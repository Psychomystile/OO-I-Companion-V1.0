from pathlib import Path
import concurrent.futures, fitz, json, re, hashlib, io, argparse
from PIL import Image

parser=argparse.ArgumentParser(description='Render the complete supplied Rulebook V1 for the local app reader.')
parser.add_argument('source',help='Path to the original Rulebook V1 PDF')
parser.add_argument('--app-root',default=str(Path(__file__).resolve().parents[1]))
args=parser.parse_args()
SOURCE=Path(args.source).resolve()
ROOT=Path(args.app_root).resolve()
DEST=ROOT/'rulebook'
TOC=[('Introduction',5),('Timeline of the Smoglands',7),('Getting Started',15),('Core Rules',23),('Rig Control Terminal',24),('Weapons and Equipment',25),('Engine and Heat',26),('Playing the Game',27),('Activation and Action Points',28),('Attacking and Damage',30),('Catastrophic Damage',31),('Rig Destruction',33),('Maintenance Phase',34),('Conditions',35),('Example Turn',37),('Rig Operating Manual',41),('Ironclads',45),('Weapon Perks',46),('Common Weapons',48),('Krim Corporation',49),('Nox Industries',55),('Triton Engineering',61),('Arcus Technologies',67),('Freegear Coalition',73),('Mercenary Nomads',79),('Equipment List',85),('Deploying to War and Formations',89),('Deployments',93),('Engagements',95),('Campaign',101),('Quick Reference',111),('Rules Glossary',113)]
REF=re.compile(r'\b(?:pp?\.?|pages?)\s*(\d{1,3})(?:\s*[–—-]\s*(\d{1,3}))?',re.I)

def asset(index):
 doc=fitz.open(SOURCE);page=doc[index];w,h=page.rect.width,page.rect.height
 pix=page.get_pixmap(matrix=fitz.Matrix(2000/w,2000/w),alpha=False)
 image=Image.frombytes('RGB',[pix.width,pix.height],pix.samples)
 buffer=io.BytesIO(); image.save(buffer,'WEBP',quality=88,method=5)
 data=buffer.getvalue(); assert len(data)>100
 target=DEST/'pages'/f'{index+1:03}.webp'; target.write_bytes(data)
 check=Image.open(target); check.load()
 blocks=[];headings=[]
 for b in page.get_text('dict')['blocks']:
  if b['type']!=0:continue
  text='\n'.join(''.join(s['text'] for s in line['spans']) for line in b['lines']).strip()
  if not text:continue
  box=[round(b['bbox'][0]/w,5),round(b['bbox'][1]/h,5),round(b['bbox'][2]/w,5),round(b['bbox'][3]/h,5)]
  # Watermarks and folios remain visible in the original page image.
  if text in ['Psychomystile','© Scoutsifer Studio. All Rights Reserved'] or re.fullmatch(r'\d{1,3}',text) and box[1]>.9:continue
  blocks.append({'text':text,'box':box})
  for line in b['lines']:
   t=''.join(s['text'] for s in line['spans']).strip()
   if t and len(t)<100 and max(s['size'] for s in line['spans'])>=12 and any(c.isalpha() for c in t):headings.append(t)
 refs=[]
 for match in REF.finditer(page.get_text()):
  target=int(match.group(1))
  if not 1<=target<=115:continue
  for rect in page.search_for(match.group(0)):
   refs.append({'page':target,'end':int(match.group(2)) if match.group(2) else None,'label':match.group(0),'box':[round(rect.x0/w,5),round(rect.y0/h,5),round(rect.x1/w,5),round(rect.y1/h,5)]})
 printed=index-2 if 3<=index<=117 else None
 title=next((t for t,p in TOC if p==printed),headings[0] if headings else ('Cover' if index==0 else 'Illustration'))
 figures=[]
 if printed in [93,94]:
  images=[b for b in page.get_text('dict')['blocks'] if b['type']==1 and b['bbox'][2]-b['bbox'][0]>150 and b['bbox'][3]-b['bbox'][1]>100]
  images.sort(key=lambda b:(round(b['bbox'][1]/50),b['bbox'][0]))
  figures=[[round(b['bbox'][0]/w,5),round(b['bbox'][1]/h,5),round(b['bbox'][2]/w,5),round(b['bbox'][3]/h,5)] for b in images]
 return {'figures':figures,'index':index+1,'number':printed,'label':str(printed) if printed else ['Front cover','Inside cover','Title page'][index] if index<3 else 'Back matter' if index==118 else 'Back cover' if index==120 else 'Illustration','title':title,'width':pix.width,'height':pix.height,'blocks':blocks,'refs':refs}

if __name__=='__main__':
 (DEST/'pages').mkdir(parents=True,exist_ok=True)
 with concurrent.futures.ProcessPoolExecutor(max_workers=4) as pool:
  pages=[]
  for page in pool.map(asset,range(121)):
   pages.append(page)
   if len(pages)%20==0:print('Prepared',len(pages),'of 121 pages',flush=True)
 labels={86: 'Equipment Table B', 87: 'Equipment Table C', 90: 'Iron Costs and Equipment', 91: 'The Battlefield', 92: 'Battlefield and Objectives', 94: 'Deployments 7–12', 102: 'Winning the Campaign and Fielding Your Squadron', 104: 'Ironclad Experience and Aftermath', 105: 'Rig Recovery and Permanent Damage', 106: 'Salvage and Reinforcement', 107: 'Iron Market and Recruiting', 108: 'Scrapping and Mercenaries', 109: 'Squadron Reference Charts', 110: 'Squadron Reference Charts', 112: 'Quick Reference · Heat and Damage', 114: 'Rules Glossary (continued)', 115: 'Rules Glossary (continued)'}
 for number,title in labels.items():pages[number+2]['title']=title
 data={'schema':1,'version':'0.28.34','source':'Of Oil and Iron Rulebook V1 (user supplied)','sourceSHA256':hashlib.sha256(SOURCE.read_bytes()).hexdigest(),'pageCount':len(pages),'numberedPageMax':115,'toc':[{'title':'Cover','index':1},*({'title':t,'index':p+3} for t,p in TOC)],'pages':pages}
 (DEST/'rulebook-data.js').write_text('/* Complete user-supplied Rulebook V1 page index. */\nglobalThis.OOIRulebookData='+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n')
 (ROOT/'tools/rulebook-asset-check.json').write_text(json.dumps({'sourceSHA256':data['sourceSHA256'],'pages':len(pages),'internalLinks':sum(len(p['refs']) for p in pages),'webpBytes':sum(p.stat().st_size for p in (DEST/'pages').glob('*.webp'))},indent=2))
 print('Complete:',len(pages),'pages.',flush=True)
