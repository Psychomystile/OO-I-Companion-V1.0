/* Fullscreen presentation; the approved source image remains unchanged. */
(()=>{
 'use strict';
 let active=null,replaying=false;
 const scenes=[{top:0,height:350},{top:402,height:355},{top:763,height:343},{top:1114,height:422}];
 document.addEventListener('click',event=>{
  const trigger=event.target.closest('button[data-start-normal],button[data-c-action="deploy"]');
  if(!trigger||trigger.disabled||replaying)return;
  event.preventDefault();event.stopImmediatePropagation();if(active)return;
  const dialog=document.createElement('dialog');dialog.className='entry-dialog';dialog.setAttribute('aria-label','Enter your Rig');
  dialog.innerHTML='<div class="entry-stage"><div class="entry-frame"><div class="entry-window"><img class="entry-art" src="images/intro/entry-sequence.png" alt="Entering the Rig"></div><button type="button" class="entry-start" aria-label="Start Engine" hidden></button></div></div><div class="entry-footer"><span class="entry-status" role="status">Entering Rig…</span><button type="button" class="entry-skip">Skip intro</button></div><div class="entry-launch" aria-hidden="true"><div class="entry-door entry-door-left"></div><div class="entry-door entry-door-right"></div></div>';
  document.body.append(dialog);active=dialog;
  const frame=dialog.querySelector('.entry-frame'),view=dialog.querySelector('.entry-window'),art=dialog.querySelector('.entry-art'),start=dialog.querySelector('.entry-start'),skip=dialog.querySelector('.entry-skip'),status=dialog.querySelector('.entry-status');
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const timers=new Set();let closed=false,atStarter=false,launching=false,currentScene=0;
  const previousOverflow=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';
  function later(fn,delay){const t=setTimeout(()=>{timers.delete(t);if(!closed)fn();},delay);timers.add(t);}
  function clear(){timers.forEach(clearTimeout);timers.clear();}
  function fit(){
   if(closed)return;const viewport=window.visualViewport;
   const width=viewport?.width||innerWidth,height=viewport?.height||innerHeight;
   dialog.style.width=width+'px';dialog.style.height=height+'px';
   dialog.style.left=(viewport?.offsetLeft||0)+'px';dialog.style.top=(viewport?.offsetTop||0)+'px';
   // Cinematic fit: enlarge portrait imagery while preserving the whole starter.
   const ratio=1024/scenes[currentScene].height;
   const imageWidth=Math.min(Math.max(width,height*ratio),width*2.5);
   frame.style.width=imageWidth+'px';frame.style.height=imageWidth/ratio+'px';
  }
  window.addEventListener('resize',fit);window.visualViewport?.addEventListener('resize',fit);window.visualViewport?.addEventListener('scroll',fit);
  function scene(i){currentScene=i;const s=scenes[i];art.style.top=(-s.top/s.height*100)+'%';art.alt=['First-person view entering the Rig hatch','Seated in the Rig cockpit','Hand approaching the engine starter','Engine ignition panel'][i];fit();view.classList.remove('entry-dark');}
  function ready(){if(closed||launching)return;atStarter=true;clear();scene(3);start.hidden=false;skip.hidden=true;status.textContent='Press Start Engine';start.focus({preventScroll:true});}
  function cleanup(){if(closed)return;closed=true;clear();window.removeEventListener('resize',fit);window.visualViewport?.removeEventListener('resize',fit);window.visualViewport?.removeEventListener('scroll',fit);document.documentElement.style.overflow=previousOverflow;active=null;dialog.close();dialog.remove();if(!launching)trigger.focus({preventScroll:true});}
  function beginGame(){replaying=true;try{trigger.click();}finally{replaying=false;}}
  start.addEventListener('click',()=>{
   if(launching||!atStarter)return;launching=true;clear();start.disabled=true;dialog.classList.add('entry-launching');status.textContent='Opening hangar…';
   if(motion.matches){beginGame();cleanup();return;}
   later(()=>dialog.classList.add('entry-doors-open'),180);
   later(()=>{beginGame();dialog.classList.add('entry-reveal-game');},1450);
   later(cleanup,2400);
  });
  skip.addEventListener('click',ready);
  dialog.addEventListener('keydown',()=>dialog.classList.add('entry-keyboard'));
  dialog.addEventListener('cancel',event=>{event.preventDefault();if(!launching)cleanup();});
  function play(){if(closed||atStarter)return;scene(0);if(motion.matches){ready();return;}
   later(()=>view.classList.add('entry-dark'),2400);
   later(()=>{scene(1);status.textContent='Cockpit ready.';},3550);
   later(()=>view.classList.add('entry-dark'),5900);
   later(()=>{scene(2);status.textContent='Ignition sequence.';},6550);
   later(()=>view.classList.add('entry-dark'),8550);
   later(ready,9500);
  }
  art.addEventListener('load',play,{once:true});
  art.addEventListener('error',()=>{if(closed)return;ready();art.hidden=true;start.classList.add('entry-start-fallback');start.textContent='Start Engine';},{once:true});
  scene(0);dialog.showModal();fit();skip.focus({preventScroll:true});
 },true);
})();
