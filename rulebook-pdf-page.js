(() => {
 'use strict';
 const button=document.getElementById('download-rulebook-pdf'),status=document.getElementById('pdf-progress'),ready=document.getElementById('pdf-ready');
 button.addEventListener('click',async()=>{if(button.disabled)return;button.disabled=true;status.textContent='Preparing PDF…';try{
  const blob=await OOIRulebookPDF.getBlob({progress:(n,total)=>status.textContent='Preparing PDF · '+Math.round(n/total*100)+'%'});
  ready.href=OOIRulebookPDF.save(blob);ready.hidden=false;status.textContent='PDF ready. If the download did not start, tap Download ready PDF.';
 }catch(error){status.textContent=error.message;}finally{button.disabled=false;}});
})();
