/* Of Oil & Iron v0.28.34 — read-only book, compact controls and layered dismissal. */
(() => {
 'use strict';
 const API=globalThis.OOIRulebook={version:'0.28.34'};
 const DATA=globalThis.OOIRulebookData;
 const READER='index.html?rulebook=1';
 const REF=/\b(?:(?:Rulebook(?:\s+V1)?\s*[,·:]?\s*)(?:pp?\.?|pages?)\s*|(?:pp?\.|pages?\b)\s*|pp?\s+)(\d{1,3})(?:\s*([–—-])\s*(\d{1,3}))?/gi;
 const ignored='script,style,noscript,textarea,input,select,option,button,a,code,pre,svg,math,[contenteditable="true"],.rulebook-dialog';
 const normal=text=>String(text||'').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const esc=text=>String(text??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const stop=new Set(['the','and','for','from','this','that','with','your','rulebook','page','pages','reference','only','quick','game','campaign','components','book','v1']);
 let dialog=null,view=null,paper=null,sidebar=null,current=1,lastIndex=1,zoom=1,focusBox=null,focusLabel='',pageToken=0,returnFocus=null,returnScroll=null,navHistory=[],lastSearch='',resizeObserver=null,backdropClick=null,fullScreen=false,normalView=null,lastTouchToggle=-Infinity,lastPinchTime=-Infinity;
 const pageAt=index=>DATA?.pages[index-1];
 function pageIndex(number){return DATA?.pages.find(p=>p.number===Number(number))?.index||null;}
 function label(p){return p.number?'p. '+p.number:p.label;}
 function tokens(query){return [...new Set(normal(query).split(' ').filter(w=>w.length>2&&!stop.has(w)&&!/^\d+$/.test(w)))];}
 function region(blocks){return {text:blocks.map(b=>b.text).join('\n'),box:[Math.min(...blocks.map(b=>b.box[0])),Math.min(...blocks.map(b=>b.box[1])),Math.max(...blocks.map(b=>b.box[2])),Math.max(...blocks.map(b=>b.box[3]))]};}
 function sectionBody(p,heading){
  const isHeading=b=>b.box[3]-b.box[1]<.025&&b.text.trim().length<80&&!/[\n.!?•]/.test(b.text.trim());
  if(!isHeading(heading))return heading;
  const below=p.blocks.filter(b=>b!==heading&&b.box[1]>=heading.box[3]-.002&&b.box[1]<.93&&Math.abs(b.box[0]-heading.box[0])<.07).sort((a,b)=>a.box[1]-b.box[1]);
  const end=below.find(b=>isHeading(b)&&b.box[1]>heading.box[3]+.01)?.box[1]??.93;
  const body=below.filter(b=>b.box[1]<end&&!isHeading(b));
  return body.length?region(body):heading;
 }
 function bestBlock(p,query){
  const phrase=normal(query),terms=tokens(query);if(!phrase||!terms.length)return null;
  let best=null,score=0;
  for(const b of p.blocks){const text=normal(b.text),first=normal(b.text.trim().split('\n')[0].replace(/^\d+[.)]\s*/,''));let n=text.includes(phrase)?12:0;if(first===phrase)n+=4;for(const word of terms)if(text.includes(word))n+=1+Math.min(1,word.length/10);if(n>0&&text.length<150)n+=.3;if(n>score){score=n;best=b;}}
  if(score<1.2)return null;
  if(p.number===26&&/heat threshold table/.test(phrase))return region(p.blocks.filter(b=>b.box[1]>=.54&&b.box[1]<.9));
  if(p.number===89&&phrase==='squadron formation')return region(p.blocks.filter(b=>b.box[0]>.5&&b.box[1]>=.27&&b.box[1]<.7));
  const deployment=query.match(/^Deployment\s+(\d+)/i);
  if(deployment&&p.figures){
   const figure=p.figures[(Number(deployment[1])-1)%6];
   if(figure)return {...best,box:[figure[0],Math.max(0,figure[1]-.045),figure[2],figure[3]]};
  }
  if((p.number>=85&&p.number<=87||p.number===103&&best.box[1]>.47)&&best.box[0]<.4&&best.text.length<110){
   const row=p.blocks.filter(b=>b!==best&&b.box[0]>=best.box[2]-.01&&Math.min(b.box[3],best.box[3])>Math.max(b.box[1],best.box[1]));
   if(row.length)return region([best,...row]);
  }
  return sectionBody(p,best);
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
    const a=document.createElement('a');a.className='rulebook-link';a.href=READER+'#page='+index;a.textContent=match[0];a.dataset.rulebookPage=number;
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
 function updateCloseAction(){
  const button=dialog?.querySelector('.rb-close');if(!button)return;
  const text=fullScreen?'Exit full screen':'Close rulebook';
  button.setAttribute('aria-label',text);button.title=text;
 }
 function resizePaper(preserve=true){
  if(!dialog||!paper||!view)return;
  const x=(view.scrollLeft+view.clientWidth/2-paper.offsetLeft)/(paper.offsetWidth||1),y=(view.scrollTop+view.clientHeight/2-paper.offsetTop)/(paper.offsetHeight||1);
  paper.style.width=Math.max(1,Math.floor(Math.min(fullScreen?1400:1000,view.clientWidth-(fullScreen?0:28))*zoom))+'px';
  dialog.querySelector('[data-rb-zoom]').textContent=Math.round(zoom*100)+'%';
  dialog.querySelector('[data-rb-action="zoom-out"]').disabled=zoom<=.5;
  dialog.querySelector('[data-rb-action="zoom-in"]').disabled=zoom>=4;
  view.classList.toggle('rb-zoomed',zoom>1);
  if(preserve){view.scrollLeft=paper.offsetLeft+x*paper.offsetWidth-view.clientWidth/2;view.scrollTop=paper.offsetTop+y*paper.offsetHeight-view.clientHeight/2;}
 }
 function toggleFullScreen(force){
  if(!dialog||!view||!paper)return;
  const next=typeof force==='boolean'?force:!fullScreen;if(next===fullScreen)return;
  const previous={index:current,zoom,top:view.scrollTop,left:view.scrollLeft,sidebar:!sidebar.hidden,x:(view.scrollLeft+view.clientWidth/2-paper.offsetLeft)/(paper.offsetWidth||1),y:(view.scrollTop+view.clientHeight/2-paper.offsetTop)/(paper.offsetHeight||1)};
  if(next){normalView=previous;setSidebar(false);}else if(normalView)zoom=normalView.zoom;
  fullScreen=next;dialog.classList.toggle('rb-fullscreen',fullScreen);
  updateCloseAction();
  dialog.querySelector('[data-rb-action="fullscreen"]').setAttribute('aria-pressed',String(fullScreen));
  if(!fullScreen)setSidebar(!!normalView?.sidebar);
  resizePaper(false);
  const restore=()=>{
   if(!dialog||next!==fullScreen)return;resizePaper(false);
   if(!fullScreen&&normalView?.index===current){view.scrollTop=normalView.top;view.scrollLeft=normalView.left;}
   else {view.scrollTop=paper.offsetTop+previous.y*paper.offsetHeight-view.clientHeight/2;view.scrollLeft=paper.offsetLeft+previous.x*paper.offsetWidth-view.clientWidth/2;}
  };
  restore();requestAnimationFrame(restore);
  if(fullScreen&&!view.contains(document.activeElement))dialog.querySelector('.rb-close').focus({preventScroll:true});
 }
 function focusPassage(){
  if(!view||!paper)return;
  if(!focusBox){view.scrollTo({top:0,left:0,behavior:'auto'});return;}
  const [x0,y0,x1]=focusBox,wide=(x1-x0)*paper.offsetWidth>view.clientWidth-32;
  const left=wide?paper.offsetLeft+x0*paper.offsetWidth-16:(x0+x1)/2*paper.offsetWidth-view.clientWidth/2+paper.offsetLeft;
  view.scrollTo({top:paper.offsetTop+y0*paper.offsetHeight-24,left:Math.max(0,left),behavior:'auto'});
 }
 function show(index,{query='',box=null,push=true,autoZoom=false}={}){
  if(!dialog||!pageAt(index))return;
  if(push&&current!==index)navHistory.push({index:current,zoom,box:focusBox,query:focusLabel,top:view.scrollTop,left:view.scrollLeft});
  current=index;lastIndex=index;const p=pageAt(index),matched=box?null:bestBlock(p,query);
  focusBox=box||matched?.box||null;focusLabel=query;
  if(autoZoom&&focusBox){const baseWidth=Math.min(fullScreen?1400:1000,view.clientWidth-(fullScreen?0:28));zoom=Math.max(1,Math.min(4,Math.max(.9/Math.max(.25,focusBox[2]-focusBox[0]),760/Math.max(1,baseWidth))));}
  const token=++pageToken;
  dialog.querySelector('[data-rb-title]').textContent=label(p);
  dialog.querySelector('[data-rb-action="back"]').disabled=!navHistory.length;
  paper.style.aspectRatio=p.width+'/'+p.height;
  paper.innerHTML=`<img class="rb-page-image" alt="Rulebook ${esc(label(p))} · ${esc(p.title)}" width="${p.width}" height="${p.height}" draggable="false"><div class="rb-hotlinks">${p.refs.map(r=>`<a class="rb-page-reference" href="${READER}#page=${pageIndex(r.page)}" data-rb-internal="${r.page}" aria-label="Open rulebook page ${r.page}" title="Open ${esc(r.label)}" style="left:${r.box[0]*100}%;top:${r.box[1]*100}%;width:${(r.box[2]-r.box[0])*100}%;height:${(r.box[3]-r.box[1])*100}%"></a>`).join('')}</div><div class="rb-page-text">${p.blocks.map(b=>`<p>${esc(b.text)}</p>`).join('')}</div>`;
  const image=paper.querySelector('img'),status=dialog.querySelector('[data-rb-status]');status.textContent='Loading '+label(p)+'…';
  image.onload=()=>{if(!dialog||token!==pageToken)return;status.textContent=label(p)+' · '+index+' / '+DATA.pageCount+' pages';resizePaper(false);focusPassage();};
  image.onerror=()=>{if(!dialog||token!==pageToken)return;status.textContent='This page could not load. Check your connection or the complete app folder, then reopen the page.';};
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
  view=paper=sidebar=null;navHistory=[];fullScreen=false;normalView=null;
 }
 function open({page=null,index=null,query=''}={}){
  if(!DATA){globalThis.alert?.('The rulebook files are missing. Update the complete app folder.');return;}
  const target=index||pageIndex(page)||lastIndex;
  if(dialog){show(target,{query,autoZoom:true});return;}
  returnFocus=document.activeElement;returnScroll={top:window.scrollY,left:window.scrollX};navHistory=[];current=target;zoom=1;lastSearch='';fullScreen=false;normalView=null;lastTouchToggle=-Infinity;lastPinchTime=-Infinity;
  dialog=document.createElement('dialog');dialog.className='rulebook-dialog';dialog.setAttribute('aria-labelledby','rulebook-title');
  dialog.innerHTML=`<header class="rb-header"><div><h2 id="rulebook-title">Rulebook</h2><p data-rb-title></p></div></header><button type="button" class="rb-close" data-rb-action="close" aria-label="Close rulebook" title="Close rulebook">×</button><div class="rb-toolbar"><button type="button" data-rb-action="contents" aria-expanded="false" aria-controls="rulebook-sidebar">Contents / Search</button><div class="rb-zoom"><button type="button" data-rb-action="zoom-out" aria-label="Zoom out">−</button><button type="button" data-rb-action="fit" data-rb-zoom aria-label="Fit page width">100%</button><button type="button" data-rb-action="zoom-in" aria-label="Zoom in">+</button></div><button type="button" data-rb-action="back" disabled>Back</button><button type="button" data-rb-action="fullscreen" aria-pressed="false">Full screen</button></div><div class="rb-layout" data-sidebar="false"><aside class="rb-sidebar" id="rulebook-sidebar" hidden><label class="rb-search"><span>Find a rule</span><input type="search" data-rb-search placeholder="Heat, formation, weapon…" autocomplete="off"></label><div data-rb-results></div></aside><div class="rb-reading"><div class="rb-viewport" tabindex="0" aria-label="Rulebook page. Double-click or double-tap to enter or leave full screen." title="Double-click or double-tap for full screen"><article class="rb-paper"></article></div></div></div><footer class="rb-footer"><span data-rb-status role="status" aria-live="polite"></span><span>Of Oil and Iron · Scott Hadley / Scoutsifer Studio</span></footer>`;
  document.body.append(dialog);document.body.classList.add('rulebook-open');view=dialog.querySelector('.rb-viewport');paper=dialog.querySelector('.rb-paper');sidebar=dialog.querySelector('.rb-sidebar');
  const dismissLayer=()=>{if(fullScreen)toggleFullScreen(false);else if(!sidebar.hidden)setSidebar(false);else close();};
  dialog.addEventListener('cancel',event=>{event.preventDefault();dismissLayer();});
  let startedOutside=false,startedOutsideList=false;
  const outside=event=>{const r=dialog?.getBoundingClientRect();return r&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom);};
  const outsideList=event=>{const r=sidebar?.getBoundingClientRect();return r&&!sidebar.hidden&&(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom);};
  const directControl=event=>{const button=event.target.closest('[data-rb-action="close"],[data-rb-action="contents"]');if(!button)return false;const r=button.getBoundingClientRect();return event.detail===0&&event.type==='click'||event.clientX>=r.left&&event.clientX<=r.right&&event.clientY>=r.top&&event.clientY<=r.bottom;};
  const hideList=()=>{tap=lastTap=touch=pinch=null;setSidebar(false);};
  // Touch browsers can retarget a tap near the edge to the nearest control.
  // Use its real coordinates, so even that tap still closes the backdrop.
  dialog.addEventListener('pointerdown',event=>{startedOutside=outside(event);startedOutsideList=outsideList(event)&&!directControl(event);if(startedOutside||startedOutsideList){event.preventDefault();event.stopPropagation();}});
  dialog.addEventListener('pointerup',event=>{
   if(startedOutsideList&&outsideList(event)){
    event.preventDefault();event.stopPropagation();startedOutside=startedOutsideList=false;
    backdropClick={x:event.clientX,y:event.clientY,time:performance.now()};hideList();return;
   }
   if(startedOutside&&outside(event)){event.preventDefault();event.stopPropagation();startedOutside=false;backdropClick={x:event.clientX,y:event.clientY,time:performance.now()};dismissLayer();}
   startedOutsideList=false;
  });
  dialog.addEventListener('click',event=>{
   if(!sidebar.hidden&&!sidebar.contains(event.target)&&!directControl(event)){event.preventDefault();event.stopPropagation();startedOutside=startedOutsideList=false;hideList();return;}
   if(startedOutside&&outside(event)){event.preventDefault();event.stopPropagation();close();return;}startedOutside=false;
   const button=event.target.closest('[data-rb-action]');
   if(button){
    const action=button.dataset.rbAction;if(action==='close'){if(fullScreen)toggleFullScreen(false);else close();return;}
    if(action==='contents'){setSidebar(sidebar.hidden);return;}
    if(action==='fullscreen'){toggleFullScreen();return;}
    if(action==='zoom-in'||action==='zoom-out'||action==='fit'){zoom=action==='fit'?1:Math.max(.5,Math.min(4,zoom+(action==='zoom-in'?.25:-.25)));resizePaper();return;}
    if(action==='back'&&navHistory.length){const previous=navHistory.pop();zoom=previous.zoom;show(previous.index,{query:previous.query,box:previous.box,push:false});return;}
   }
   const jump=event.target.closest('[data-rb-jump]');if(jump){show(Number(jump.dataset.rbJump),{query:jump.dataset.rbQuery||'',autoZoom:true});setSidebar(false);return;}
   const internal=event.target.closest('[data-rb-internal]');if(internal){event.preventDefault();show(pageIndex(internal.dataset.rbInternal));}
  });
  let searchTimer;
  dialog.addEventListener('input',event=>{if(event.target.matches('[data-rb-search]')){lastSearch=event.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(drawSidebar,120);}});
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();dismissLayer();return;}if(event.target.matches('input,select,textarea'))return;if(event.key==='ArrowLeft'&&current>1){event.preventDefault();show(current-1);}if(event.key==='ArrowRight'&&current<DATA.pageCount){event.preventDefault();show(current+1);}});
  // Double taps are handled separately from swipes and panning. Native mobile
  // dblclick events following the same gesture are ignored to avoid toggling twice.
  const readingTarget=target=>!target.closest('a,button,input,select,textarea');
  view.addEventListener('dblclick',event=>{if(!readingTarget(event.target)||performance.now()-lastTouchToggle<600||performance.now()-lastPinchTime<500)return;event.preventDefault();toggleFullScreen();});
  let pinch=null;
  view.addEventListener('touchstart',event=>{
   if(event.touches.length!==2){if(event.touches.length>2)pinch=null;return;}
   const [a,b]=event.touches,rect=view.getBoundingClientRect(),x=(a.clientX+b.clientX)/2-rect.left,y=(a.clientY+b.clientY)/2-rect.top;
   pinch={distance:Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY),zoom,x:(view.scrollLeft+x-paper.offsetLeft)/(paper.offsetWidth||1),y:(view.scrollTop+y-paper.offsetTop)/(paper.offsetHeight||1)};
   lastPinchTime=performance.now();event.preventDefault();
  },{passive:false});
  view.addEventListener('touchmove',event=>{
   if(!pinch||event.touches.length!==2)return;
   event.preventDefault();const [a,b]=event.touches,rect=view.getBoundingClientRect(),x=(a.clientX+b.clientX)/2-rect.left,y=(a.clientY+b.clientY)/2-rect.top;
   zoom=Math.max(.5,Math.min(4,pinch.zoom*Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY)/Math.max(1,pinch.distance)));
   resizePaper(false);view.scrollLeft=paper.offsetLeft+pinch.x*paper.offsetWidth-x;view.scrollTop=paper.offsetTop+pinch.y*paper.offsetHeight-y;lastPinchTime=performance.now();
  },{passive:false});
  const endPinch=event=>{if(pinch&&event.touches.length<2){pinch=null;lastPinchTime=performance.now();}};
  view.addEventListener('touchend',endPinch,{passive:true});view.addEventListener('touchcancel',endPinch,{passive:true});
  let tap=null,lastTap=null;
  view.addEventListener('touchstart',event=>{tap=event.touches.length===1&&readingTarget(event.target)?{x:event.touches[0].clientX,y:event.touches[0].clientY,time:performance.now(),top:view.scrollTop,left:view.scrollLeft}:null;if(event.touches.length!==1)lastTap=null;},{passive:true});
  view.addEventListener('touchmove',event=>{if(!tap||event.touches.length!==1){tap=null;return;}const t=event.touches[0];if(Math.hypot(t.clientX-tap.x,t.clientY-tap.y)>12)tap=null;},{passive:true});
  view.addEventListener('touchend',event=>{
   const start=tap;tap=null;if(!start||!event.changedTouches.length||!view)return;
   const t=event.changedTouches[0],now=performance.now();
   if(now-start.time>350||Math.hypot(t.clientX-start.x,t.clientY-start.y)>12||Math.abs(view.scrollTop-start.top)>6||Math.abs(view.scrollLeft-start.left)>6){lastTap=null;return;}
   if(lastTap&&now-lastTap.time<360&&Math.hypot(t.clientX-lastTap.x,t.clientY-lastTap.y)<28){event.preventDefault();lastTap=null;lastTouchToggle=now;toggleFullScreen();}
   else lastTap={x:t.clientX,y:t.clientY,time:now};
  },{passive:false});
  let touch=null;
  view.addEventListener('touchstart',event=>{touch=event.touches.length===1&&zoom===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null;},{passive:true});
  view.addEventListener('touchend',event=>{const start=touch;touch=null;if(!start||!event.changedTouches.length||zoom!==1)return;const t=event.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*2){const index=current+(dx<0?1:-1);if(pageAt(index))show(index);}},{passive:true});
  resizeObserver=new ResizeObserver(()=>resizePaper());resizeObserver.observe(view);drawSidebar();
  if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
  show(target,{query,push:false,autoZoom:!!page});dialog.querySelector('[data-rb-action="close"]').focus({preventScroll:true});
 }
 API.open=open;API.close=close;API.toggleFullScreen=toggleFullScreen;API.linkify=linkify;API.pageIndex=pageIndex;API.bestBlock=bestBlock;API.getState=()=>dialog?{index:current,page:pageAt(current).number,zoom,query:focusLabel,highlight:focusBox,history:navHistory.length,fullScreen}:null;
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
 // Compatibility links open this same read-only viewer, never a PDF download.
 const requested=new URLSearchParams(location.search);
 if(requested.get('rulebook')==='1'){
  const match=location.hash.match(/^#page=(\d+)$/),index=match?Number(match[1]):1;
  open({index:pageAt(index)?index:1});
 }
})();
