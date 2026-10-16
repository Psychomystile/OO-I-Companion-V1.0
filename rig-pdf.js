/* Local PDF export. Original sheet artwork: Of Oil and Iron / Scoutsifer Studio. */
async function buildRigPDF(rigs){
 const {PDFDocument,StandardFonts,rgb}=PDFLib,doc=await PDFDocument.create();
 const font=await doc.embedFont(StandardFonts.Courier),bold=await doc.embedFont(StandardFonts.CourierBold);
 const response=await fetch('images/print/rig-sheet.png');if(!response.ok)throw Error('Rig sheet artwork could not be loaded.');
 const art=await doc.embedPng(await response.arrayBuffer());
 const colossalResponse=await fetch('images/print/rig-sheet-colossal.png');if(!colossalResponse.ok)throw Error('Colossal sheet artwork could not be loaded.');const colossalArt=await doc.embedPng(await colossalResponse.arrayBuffer());
 const clean=v=>String(v??'').replace(/\s+/g,' ').replace(/[–—−]/g,'-').replace(/[’‘]/g,"'").replace(/[“”″]/g,'"').replace(/…/g,'...').replace(/[^\x20-\x7e\xa0-\xff]/g,'');
 let page,y;
 const text=(v,x,top,size=10,strong=false,max=530)=>{
  let t=clean(v),f=strong?bold:font;
  while(f.widthOfTextAtSize(t,size)>max&&size>6)size=Math.max(6,size-.2);
  if(f.widthOfTextAtSize(t,size)>max){while(t.length&&f.widthOfTextAtSize(t+'...',size)>max)t=t.slice(0,-1);t+='...';}
  page.drawText(t,{x,y:842-top-size,size,font:f,color:rgb(.08,.09,.09)});
 };
 const rect=(x,top,w,h,fill=false)=>page.drawRectangle({x,y:842-top-h,width:w,height:h,borderWidth:.6,borderColor:rgb(.2,.2,.2),...(fill?{color:rgb(.25,.25,.25)}:{})});
 const newPage=(title)=>{page=doc.addPage([595,842]);y=56;const titleLines=lines(title,11,530);titleLines.slice(0,2).forEach((line,i)=>text(line,32,20+i*17,11,true));text('Of Oil and Iron - Unofficial Companion v0.28.25',32,816,8);};
 const lines=(v,size=10,width=520)=>{
  const words=clean(v).split(/\s+/),out=[];let line='';
  for(let word of words){
   if(line&&font.widthOfTextAtSize(line+' '+word,size)>width){out.push(line);line='';}
   while(font.widthOfTextAtSize(word,size)>width){let n=Math.max(1,Math.floor(width/(size*.6)));out.push(word.slice(0,n));word=word.slice(n);}
   if(word)line+=(line?' ':'')+word;
  }if(line)out.push(line);return out;
 };
 const block=(title,body)=>{const ls=lines(body);if(y+32+ls.length*13>795)newPage(title+' (continued)');text(title,32,y,11,true);y+=18;for(const l of ls){if(y>790)newPage(title+' (continued)');text(l,32,y,10);y+=13;}y+=12;};
 for(const r of rigsByClass(rigs)){
 const rig=effectiveRig(r),b=r.battle||freshBattle(r),pilot=pilotOf(r);
 const colossal=rig.weight==='Colossal';newPage(state.name+' / '+r.name);page.drawImage(colossal?colossalArt:art,{x:32,y:842-74-(colossal?326:263),width:536,height:colossal?326:263});
 // Coordinates follow the unmodified original sheet.
 text(r.name,220,96,9,true,60);if(!colossal)text(rig.weight,285,96,8,false,57);text(rig.speed,350,96,11);text(rig.exhaust,415,96,11);text(cost(r)+' / '+ironCapacity(r),478,96,10);
 rig.heat.forEach((v,i)=>{const x=44+i*51.5;rect(x,116,49,31);text(v===null?'-':(v>=0?'+':'')+v,x+17,124,11,true,44);if(i===b.heat)rect(x+2,118,4,4,true);});
 PARTS.forEach((part,i)=>{const x=62+i*132;const max=rig.sp[i],now=b.sp[i];for(let n=0;n<max;n++){const col=n%8,row=Math.floor(n/8);rect(x+col*12,158+row*10,8,8,n>=now);}const save=String(rig.armour[i])+'+',saveWidth=bold.widthOfTextAtSize(save,12);text(save,110+i*132.5+(46-saveWidth)/2,196,12,true,46);/* The adjacent printed range is the hit-location result. */});
 // Write above the printed underlines, with separate bounded areas for each value.
 for(let slot=0;slot<(colossal?3:2);slot++){
  const x=45+(slot===1?258:0),dy=slot===2?61:0,w=r.weapons[slot]===null?null:rig.weapons[r.weapons[slot]];
  if(!w)continue;
  // A single typewritten header gives long weapon names enough width without shrinking them.
  page.drawRectangle({x,y:842-(217+dy)-17,width:150,height:17,color:rgb(1,1,1)});
  text(['L','R','H'][slot]+': '+w.name,x,219+dy,9,true,150);
  text(w.rof,x+29,234+dy,12,true,41);
  text(w.str,x+107,234+dy,12,true,41);
  text(w.rng,x+29,256+dy,12,true,41);
  text(w.acc,x+107,256+dy,12,true,43);
  // Remove the blank writing rules behind perks so no letter crosses a line.
  page.drawRectangle({x:x+152,y:842-(235+dy)-41,width:100,height:41,color:rgb(1,1,1)});
  const perkLines=lines(w.perks||'None',8,95);
  perkLines.forEach((line,k)=>text(line,x+156,236+dy+k*12,8,false,95));
 }
 // The first Equipment entry follows the printed label; later entries use full writing lines.
 r.equipment.slice(0,4).forEach((id,i)=>{const baseline=(colossal?347:288)+i*(colossal?15:14),left=i===0?114:54,right=colossal?513:393;text(DATA.equipment[id].name,left,baseline-8.5,8.5,false,right-left);});
 text(pilot.name,colossal?308:416,296,10,true,130);
 text(pilot.aim+'+',colossal?339:451,316,12,true,43);y=colossal?420:357;
 r.equipment.forEach(id=>block(DATA.equipment[id].name+' / Equipment',DATA.equipment[id].effect));

 }
 doc.setTitle(state.name+' - Rig sheets');doc.setAuthor('Of Oil and Iron Companion');return doc.save();
}
async function exportRigPDF(button){
 if(button.disabled||state.view!=='build'||state.factionPending||campaignStarted()||!state.squad.length)return;
 const label=button.querySelector('.pdf-button-label');if(!label)return;
 const text=label.textContent;button.disabled=true;button.setAttribute('aria-busy','true');label.textContent='Preparing PDF...';
 try{const bytes=await buildRigPDF(clone(state.squad)),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=(state.name.replace(/[^a-z0-9_-]/gi,'_')||'Squadron')+'-rig-sheets.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
 catch(e){notify('PDF export failed: '+e.message);}finally{button.disabled=false;button.removeAttribute('aria-busy');label.textContent=text;}
}
