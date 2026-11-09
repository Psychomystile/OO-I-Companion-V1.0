/* Of Oil & Iron v0.28.32 — complete local rulebook and contextual references. */
(() => {
 'use strict';
 const API=globalThis.OOIRulebook={version:'0.28.32'};
 const DATA=globalThis.OOIRulebookData;
 const PDF='rulebook/of-oil-and-iron-rulebook-v1.pdf';
 const REF=/\b(?:(?:Rulebook(?:\s+V1)?\s*[,·:]?\s*)(?:pp?\.?|pages?)\s*|(?:pp?\.|pages?\b)\s*|pp?\s+)(\d{1,3})(?:\s*([–—-])\s*(\d{1,3}))?/gi;
 const ignored='script,style,noscript,textarea,input,select,option,button,a,code,pre,svg,math,[contenteditable="true"],.rulebook-dialog';
 const normal=text=>String(text||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const esc=text=>String(text??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const stop=new Set(['the','and','for','from','this','that','with','your','rulebook','page','pages','reference','only','quick','game','campaign','components','book','v1']);
 let dialog=null,view=null,paper=null,sidebar=null,current=1,lastIndex=1,zoom=1,focusBox=null,focusLabel='',pageToken=0,returnFocus=null,returnScroll=null,navHistory=[],lastSearch='',resizeObserver=null,backdropClick=null;
 const pageAt=index=>DATA?.pages[index-1];
 function pageIndex(number){return DATA?.pages.find(p=>p.number===Number(number))?.index||null;}
 function label(p){return p.number?'p. '+p.number:p.label;}
 function tokens(query){return [...new Set(normal(query).split(' ').filter(w=>w.length>2&&!stop.has(w)&&!/^\d+$/.test(w)))];}
 function bestBlock(p,query){
  const phrase=normal(query),terms=tokens(query);if(!phrase||!terms.length)return null;
  let best=null,score=0;
  for(const b of p.blocks){const text=normal(b.text);let n=text.includes(phrase)?12:0;for(const word of terms)if(text.includes(word))n+=1+Math.min(1,word.length/10);if(n>0&&text.length<150)n+=.3;if(n>score){score=n;best=b;}}
  if(score<1.2)return null;
  const deployment=query.match(/^Deployment\s+(\d+)/i);
  if(deployment&&p.figures){
   const figure=p.figures[(Number(deployment[1])-1)%6];
   if(figure)return {...best,box:[figure[0],Math.max(0,figure[1]-.045),figure[2],figure[3]]};
  }
  if((p.number>=85&&p.number<=87||p.number===103&&best.box[1]>.47)&&best.box[0]<.4&&best.text.length<110){
   const row=p.blocks.filter(b=>b.box[0]>.3&&b.box[1]>=best.box[1]-.012&&b.box[1]<best.box[3]);
   if(row.length)return {...best,box:[best.box[0],Math.min(best.box[1],...row.map(b=>b.box[1])),Math.max(best.box[2],...row.map(b=>b.box[2])),Math.max(best.box[3],...row.map(b=>b.box[3]))]};
  }
  return best;
 }
 function context(node,number){
  const parent=node.parentElement,explicit=parent.closest('[data-rulebook-query]');if(explicit)return explicit.dataset.rulebookQuery;
  const leaf=parent.closest('p,figcaption,caption,.eyebrow,label,footer')||parent;
  const clean=leaf.cloneNode(true);clean.querySelectorAll('select,input,textarea,button').forEach(el=>el.remove());
  let text=clean.textContent.replace(REF,' ').replace(/\s+/g,' ').trim();
  if(/formation/i.test(text))return 'Squadron Formation';
  const deployment=text.match(/Deployment\s+(\d+)/i);if(deployment)return 'Deployment '+deployment[1];
  if(/Components/i.test(text))return 'Structure Points';
  if(number===33&&/explosion|explode/i.test(text))return 'Rig Destruction';
  if(number===101)return 'Starting a Campaign';
  if(number===103&&parent.closest('.terrain-outcomes'))return parent.closest('.terrain-outcomes').querySelector('h3')?.textContent||'Battlefield Bonuses';
  if(number===103&&/Aftermath/i.test(text))return 'Salvage and Experience';
  if(number===46&&/Hull/i.test(text))return 'Hull';
  const weapon=parent.closest('.reference-weapon');if(weapon)return weapon.querySelector('h4')?.textContent||'';
  if(parent.closest('.lore-reader'))return parent.closest('.lore-reader').querySelector('h1')?.textContent||'';
  return text.length<=160?text:'';
 }
 function linkify(root=document.body){
  if(!DATA||!root||root.nodeType!==1||root.closest(ignored))return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:node=>node.parentElement?.closest(ignored)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
   const text=node.nodeValue;REF.lastIndex=0;const matches=[...text.matchAll(REF)].filter(m=>pageIndex(Number(m[1])));
   if(!matches.length)continue;
   const fragment=document.createDocumentFragment();let offset=0;
   for(const match of matches){
    const number=Number(match[1]),index=pageIndex(number),query=context(node,number);
    fragment.append(document.createTextNode(text.slice(offset,match.index)));
    const a=document.createElement('a');a.className='rulebook-link';a.href=PDF+'#page='+index;a.textContent=match[0];a.dataset.rulebookPage=number;
    if(match[3])a.dataset.rulebookEnd=match[3];if(query)a.dataset.rulebookQuery=query;
    a.title='Open rulebook · '+label(pageAt(index))+(query?' · '+query:'');a.setAttribute('aria-label',a.title);fragment.append(a);offset=match.index+match[0].length;
   }
   fragment.append(document.createTextNode(text.slice(offset)));node.replaceWith(fragment);
  }
 }
 function drawSidebar(){
  if(!sidebar)return;
  const query=lastSearch.trim(),terms=normal(query).split(' ').filter(Boolean);
  let html;
  if(terms.length&&normal(query).length>=2){
   const results=DATA.pages.filter(p=>{const text=normal(p.blocks.map(b=>b.text).join(' '));return terms.every(t=>text.includes(t));}).slice(0,60);
   html=`<p class="rb-result-count" role="status">${results.length}${results.length===60?'+':''} matching pages</p>`+results.map(p=>{const b=bestBlock(p,query)||p.blocks[0];return `<button class="rb-result" data-rb-jump="${p.index}" data-rb-query="${esc(query)}"><strong>${esc(label(p))} · ${esc(p.title)}</strong><span>${esc((b?.text||'').replace(/\s+/g,' ').slice(0,145))}</span></button>`;}).join('');
   if(!results.length)html+='<p class="small">No matching text. Try a shorter rule name.</p>';
  }else html=`<h3>Contents</h3><nav aria-label="Rulebook contents">${DATA.toc.map(t=>`<button class="rb-chapter" data-rb-jump="${t.index}" data-rb-query="${esc(t.title)}"><span>${esc(t.title)}</span><strong>${esc(label(pageAt(t.index)))}</strong></button>`).join('')}</nav>`;
  sidebar.querySelector('[data-rb-results]').innerHTML=html;
 }
 function setSidebar(open){if(!dialog)return;sidebar.hidden=!open;dialog.querySelector('.rb-layout').dataset.sidebar=String(open);dialog.querySelector('[data-rb-action="contents"]').setAttribute('aria-expanded',String(open));requestAnimationFrame(()=>resizePaper(false));}
 function resizePaper(preserve=true){
  if(!dialog||!paper||!view)return;
  const x=(view.scrollLeft+view.clientWidth/2)/(paper.offsetWidth||1),y=view.scrollTop/(paper.offsetHeight||1);
  paper.style.width=Math.max(1,Math.floor(Math.min(1000,view.clientWidth-28)*zoom))+'px';
  dialog.querySelector('[data-rb-zoom]').textContent=Math.round(zoom*100)+'%';
  dialog.querySelector('[data-rb-action="zoom-out"]').disabled=zoom<=1;
  dialog.querySelector('[data-rb-action="zoom-in"]').disabled=zoom>=4;
  view.classList.toggle('rb-zoomed',zoom>1);
  if(preserve){view.scrollLeft=x*paper.offsetWidth-view.clientWidth/2;view.scrollTop=y*paper.offsetHeight;}
 }
 function focusPassage(){
  if(!view||!paper)return;
  if(!focusBox){view.scrollTo({top:0,left:0,behavior:'auto'});return;}
  const [x0,y0,x1]=focusBox;
  view.scrollTo({top:paper.offsetTop+y0*paper.offsetHeight-24,left:Math.max(0,(x0+x1)/2*paper.offsetWidth-view.clientWidth/2+paper.offsetLeft),behavior:'auto'});
 }
 function show(index,{query='',box=null,push=true,autoZoom=false}={}){
  if(!dialog||!pageAt(index))return;
  if(push&&current!==index)navHistory.push({index:current,zoom,box:focusBox,query:focusLabel,top:view.scrollTop,left:view.scrollLeft});
  current=index;lastIndex=index;const p=pageAt(index),matched=box?null:bestBlock(p,query);
  focusBox=box||matched?.box||null;focusLabel=query;
  if(autoZoom&&focusBox&&window.innerWidth<650)zoom=focusBox[2]-focusBox[0]<.6?2:1.25;
  const token=++pageToken;
  dialog.querySelector('[data-rb-title]').textContent=label(p)+' · '+p.title;
  dialog.querySelector('[data-rb-page]').value=String(index);
  dialog.querySelector('[data-rb-action="previous"]').disabled=index===1;
  dialog.querySelector('[data-rb-action="next"]').disabled=index===DATA.pageCount;
  dialog.querySelector('[data-rb-action="back"]').disabled=!navHistory.length;
  dialog.querySelector('[data-rb-pdf]').href=PDF+'#page='+index;
  const hint=dialog.querySelector('[data-rb-context]');hint.hidden=!focusBox;hint.textContent=focusBox?'Highlighted passage'+(query?': '+query:''):'';
  paper.style.aspectRatio=p.width+'/'+p.height;
  paper.innerHTML=`<img class="rb-page-image" alt="Rulebook ${esc(label(p))} · ${esc(p.title)}" width="${p.width}" height="${p.height}" draggable="false"><div class="rb-hotlinks">${p.refs.map(r=>`<a class="rb-page-reference" href="${PDF}#page=${pageIndex(r.page)}" data-rb-internal="${r.page}" aria-label="Open rulebook page ${r.page}" title="Open ${esc(r.label)}" style="left:${r.box[0]*100}%;top:${r.box[1]*100}%;width:${(r.box[2]-r.box[0])*100}%;height:${(r.box[3]-r.box[1])*100}%"></a>`).join('')}</div>${focusBox?`<div class="rb-passage" aria-hidden="true" style="left:${focusBox[0]*100}%;top:${focusBox[1]*100}%;width:${(focusBox[2]-focusBox[0])*100}%;height:${(focusBox[3]-focusBox[1])*100}%"></div>`:''}<div class="rb-page-text">${p.blocks.map(b=>`<p>${esc(b.text)}</p>`).join('')}</div>`;
  const image=paper.querySelector('img'),status=dialog.querySelector('[data-rb-status]');status.textContent='Loading '+label(p)+'…';
  image.onload=()=>{if(!dialog||token!==pageToken)return;status.textContent=label(p)+' · '+index+' / '+DATA.pageCount+' PDF pages';resizePaper(false);focusPassage();};
  image.onerror=()=>{if(!dialog||token!==pageToken)return;status.textContent='This page image could not load. Use Original PDF, or check the complete app folder.';};
  image.src='rulebook/pages/'+String(index).padStart(3,'0')+'.webp';
  resizePaper(false);focusPassage();
  if(index<DATA.pageCount){const preload=new Image();preload.src='rulebook/pages/'+String(index+1).padStart(3,'0')+'.webp';}
 }
 function close(){
  if(!dialog)return;
  const old=dialog;dialog=null;pageToken++;resizeObserver?.disconnect();resizeObserver=null;
  if(old.open&&typeof old.close==='function')old.close();old.remove();document.body.classList.remove('rulebook-open');
  if(returnScroll){window.scrollTo({top:returnScroll.top,left:returnScroll.left,behavior:'instant'});}
  if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true});
  view=paper=sidebar=null;navHistory=[];
 }
 function open({page=null,index=null,query=''}={}){
  if(!DATA){globalThis.alert?.('The rulebook files are missing. Update the complete app folder.');return;}
  const target=index||pageIndex(page)||lastIndex;
  if(dialog){show(target,{query,autoZoom:true});return;}
  returnFocus=document.activeElement;returnScroll={top:window.scrollY,left:window.scrollX};navHistory=[];current=target;zoom=1;lastSearch='';
  dialog=document.createElement('dialog');dialog.className='rulebook-dialog';dialog.setAttribute('aria-labelledby','rulebook-title');
  dialog.innerHTML=`<header class="rb-header"><div><h2 id="rulebook-title">Rulebook</h2><p data-rb-title></p></div><button type="button" class="rb-close" data-rb-action="close" aria-label="Close rulebook" title="Close rulebook">×</button></header><div class="rb-toolbar"><button type="button" data-rb-action="contents" aria-expanded="false" aria-controls="rulebook-sidebar">Contents / Search</button><div class="rb-pagination"><button type="button" data-rb-action="previous" aria-label="Previous page">‹</button><label><span class="rb-sr">Go to rulebook page</span><select data-rb-page aria-label="Go to rulebook page">${DATA.pages.map(p=>`<option value="${p.index}">${esc(label(p))} · ${esc(p.title)}</option>`).join('')}</select></label><button type="button" data-rb-action="next" aria-label="Next page">›</button></div><div class="rb-zoom"><button type="button" data-rb-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-rb-action="fit" data-rb-zoom aria-label="Fit page width">100%</button><button type="button" data-rb-action="zoom-in" aria-label="Zoom in">+</button></div><button type="button" data-rb-action="back" disabled>Back</button><a class="rb-original" data-rb-pdf href="${PDF}" target="_blank" rel="noopener">Original PDF ↗</a></div><div class="rb-layout" data-sidebar="false"><aside class="rb-sidebar" id="rulebook-sidebar" hidden><label class="rb-search"><span>Find a rule</span><input type="search" data-rb-search placeholder="Heat, formation, weapon…" autocomplete="off"></label><div data-rb-results></div></aside><div class="rb-reading"><p class="rb-context" data-rb-context hidden></p><div class="rb-viewport" tabindex="0" aria-label="Rulebook page. Use zoom to read details."><article class="rb-paper"></article></div></div></div><footer class="rb-footer"><span data-rb-status role="status" aria-live="polite"></span><span>Of Oil and Iron · Scott Hadley / Scoutsifer Studio</span></footer>`;
  document.body.append(dialog);document.body.classList.add('rulebook-open');view=dialog.querySelector('.rb-viewport');paper=dialog.querySelector('.rb-paper');sidebar=dialog.querySelector('.rb-sidebar');
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  let startedOutside=false;
  const outside=event=>{const r=dialog?.getBoundingClientRect();return r&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom);};
  // Touch browsers can retarget a tap near the edge to the nearest control.
  // Use its real coordinates, so even that tap still closes the backdrop.
  dialog.addEventListener('pointerdown',event=>{startedOutside=outside(event);if(startedOutside){event.preventDefault();event.stopPropagation();}});
  dialog.addEventListener('pointerup',event=>{if(startedOutside&&outside(event)){event.preventDefault();event.stopPropagation();startedOutside=false;backdropClick={x:event.clientX,y:event.clientY,time:performance.now()};close();}});
  dialog.addEventListener('click',event=>{
   if(startedOutside&&outside(event)){event.preventDefault();event.stopPropagation();close();return;}startedOutside=false;
   const button=event.target.closest('[data-rb-action]');
   if(button){
    const action=button.dataset.rbAction;if(action==='close'){close();return;}
    if(action==='contents'){setSidebar(sidebar.hidden);return;}
    if(action==='previous'||action==='next'){show(current+(action==='next'?1:-1));return;}
    if(action==='zoom-in'||action==='zoom-out'||action==='fit'){zoom=action==='fit'?1:Math.max(1,Math.min(4,zoom+(action==='zoom-in'?.25:-.25)));resizePaper();return;}
    if(action==='back'&&navHistory.length){const previous=navHistory.pop();zoom=previous.zoom;show(previous.index,{query:previous.query,box:previous.box,push:false});return;}
   }
   const jump=event.target.closest('[data-rb-jump]');if(jump){show(Number(jump.dataset.rbJump),{query:jump.dataset.rbQuery||'',autoZoom:true});setSidebar(false);return;}
   const internal=event.target.closest('[data-rb-internal]');if(internal){event.preventDefault();show(pageIndex(internal.dataset.rbInternal));}
  });
  dialog.addEventListener('change',event=>{if(event.target.matches('[data-rb-page]'))show(Number(event.target.value));});
  let searchTimer;
  dialog.addEventListener('input',event=>{if(event.target.matches('[data-rb-search]')){lastSearch=event.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(drawSidebar,120);}});
  dialog.addEventListener('keydown',event=>{if(event.target.matches('input,select,textarea'))return;if(event.key==='ArrowLeft'&&current>1){event.preventDefault();show(current-1);}if(event.key==='ArrowRight'&&current<DATA.pageCount){event.preventDefault();show(current+1);}});
  let touch=null;
  view.addEventListener('touchstart',event=>{touch=event.touches.length===1&&zoom===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null;},{passive:true});
  view.addEventListener('touchend',event=>{const start=touch;touch=null;if(!start||!event.changedTouches.length||zoom!==1)return;const t=event.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*2){const index=current+(dx<0?1:-1);if(pageAt(index))show(index);}},{passive:true});
  resizeObserver=new ResizeObserver(()=>resizePaper());resizeObserver.observe(view);drawSidebar();
  if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
  show(target,{query,push:false,autoZoom:!!page});dialog.querySelector('[data-rb-action="close"]').focus({preventScroll:true});
 }
 API.open=open;API.close=close;API.linkify=linkify;API.pageIndex=pageIndex;API.bestBlock=bestBlock;API.getState=()=>dialog?{index:current,page:pageAt(current).number,zoom,query:focusLabel,highlight:focusBox,history:navHistory.length}:null;
 // Consume the compatibility click generated after an outside touch releases,
 // before it can reach a game control behind the now-closed dialog.
 window.addEventListener('click',event=>{const g=backdropClick;if(!g)return;backdropClick=null;if(performance.now()-g.time<650&&Math.abs(event.clientX-g.x)<32&&Math.abs(event.clientY-g.y)<32){event.preventDefault();event.stopImmediatePropagation();}},true);
 document.addEventListener('click',event=>{
  const link=event.target.closest('[data-rulebook-page]'),button=event.target.closest('[data-rulebook-open]');if(!link&&!button)return;
  event.preventDefault();event.stopPropagation();
  if(link){returnFocus=link;open({page:Number(link.dataset.rulebookPage),query:link.dataset.rulebookQuery||''});}
  else open();
 },true);
 // New app views, warnings, generator previews and campaign dialogs all pass
 // through this same reference linkifier. It never opens the book by itself.
 const observer=new MutationObserver(records=>{const roots=new Set();for(const r of records){if(r.type==='characterData'){if(r.target.parentElement)roots.add(r.target.parentElement);}else for(const node of r.addedNodes){if(node.nodeType===1)roots.add(node);else if(node.nodeType===3&&node.parentElement)roots.add(node.parentElement);}}for(const root of roots)if(root.isConnected)linkify(root);});
 linkify();observer.observe(document.body,{subtree:true,childList:true,characterData:true});
})();
