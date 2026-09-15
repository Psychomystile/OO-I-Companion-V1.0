/* Approved artwork is displayed unchanged through four viewport windows. */
(()=>{
 'use strict';
 let active=null,replaying=false;
 const scenes=[{top:0,height:350},{top:402,height:355},{top:763,height:343},{top:1114,height:422}];
 document.addEventListener('click',event=>{
  const trigger=event.target.closest('button[data-start-normal],button[data-c-action="deploy"]');
  if(!trigger||trigger.disabled||replaying)return;
  event.preventDefault();event.stopImmediatePropagation();
  if(active)return;
  const dialog=document.createElement('dialog');dialog.className='entry-dialog';dialog.setAttribute('aria-label','Enter your Rig');
  dialog.innerHTML='<div class="entry-stage"><div class="entry-window"><img class="entry-art" src="images/intro/entry-sequence.png" alt="First-person view entering the Rig"></div><button type="button" class="entry-start" aria-label="Start Engine" hidden></button></div><div class="entry-footer"><span class="entry-status" role="status">Entering Rig…</span><button type="button" class="entry-skip">Skip intro</button></div>';
  document.body.append(dialog);active=dialog;
  const stage=dialog.querySelector('.entry-stage'),view=dialog.querySelector('.entry-window'),art=dialog.querySelector('.entry-art'),start=dialog.querySelector('.entry-start'),skip=dialog.querySelector('.entry-skip'),status=dialog.querySelector('.entry-status');
  const timers=new Set();let closed=false,atStarter=false,currentScene=0;
  function fit(){
   if(closed)return;
   const viewport=window.visualViewport;
   const width=viewport?.width||window.innerWidth;
   const height=viewport?.height||window.innerHeight;
   const footer=Math.max(100,dialog.querySelector('.entry-footer').offsetHeight);
   const imageHeight=Math.max(44,height-footer-48);
   dialog.style.width=Math.max(1,Math.min(1100,width-32,imageHeight*1024/scenes[currentScene].height))+'px';
  }
  window.addEventListener('resize',fit);
  window.visualViewport?.addEventListener('resize',fit);
  function later(fn,delay){const timer=setTimeout(()=>{timers.delete(timer);if(!closed)fn();},delay);timers.add(timer);}
  function clear(){timers.forEach(clearTimeout);timers.clear();}
  function scene(i){currentScene=i;const s=scenes[i];stage.style.aspectRatio='1024 / '+s.height;art.style.top=(-s.top/s.height*100)+'%';art.alt=['First-person view entering the Rig hatch','Seated inside the Rig cockpit','Hand approaching the engine starter','Engine ignition panel'][i];view.classList.remove('entry-dark');fit();}
  function ready(){atStarter=true;clear();scene(3);start.hidden=false;skip.hidden=true;status.textContent='Press Start Engine to begin.';start.focus();}
  function cleanup(){if(closed)return;closed=true;clear();window.removeEventListener('resize',fit);window.visualViewport?.removeEventListener('resize',fit);active=null;dialog.close();dialog.remove();trigger.focus();}
  start.addEventListener('click',()=>{cleanup();replaying=true;try{trigger.click();}finally{replaying=false;}});
  skip.addEventListener('click',ready);
  dialog.addEventListener('cancel',event=>{event.preventDefault();cleanup();});
  function play(){if(closed||atStarter)return;scene(0);if(matchMedia('(prefers-reduced-motion: reduce)').matches){ready();return;}
   later(()=>view.classList.add('entry-dark'),2400);
   later(()=>{scene(1);status.textContent='Cockpit ready.';},3550);
   later(()=>view.classList.add('entry-dark'),5900);
   later(()=>{scene(2);status.textContent='Ignition sequence.';},6550);
   later(()=>view.classList.add('entry-dark'),8550);
   later(ready,9200);
  }
  art.addEventListener('load',play,{once:true});
  art.addEventListener('error',()=>{if(closed)return;atStarter=true;clear();scene(3);art.hidden=true;start.hidden=false;start.classList.add('entry-start-fallback');start.textContent='Start Engine';skip.hidden=true;status.textContent='Press Start Engine to begin.';},{once:true});
  scene(0);dialog.showModal();fit();skip.focus();
 },true);
})();
