/* Local PDF download, split into small static assets for reliable delivery. */
(() => {
 'use strict';
 const info=globalThis.OOIRulebookPDFInfo,buffers=new Map(),pending=new Map();let cached=null,building=null,downloadURL=null;
 const base=new URL('.',document.currentScript.src);
 function accept(index,text){
  if(!info?.parts[index]||buffers.has(index))return;
  let bytes;
  if(typeof Uint8Array.fromBase64==='function')bytes=Uint8Array.fromBase64(text);
  else{const binary=atob(text);bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);}
  if(bytes.length!==info.parts[index].bytes)throw Error('PDF part length mismatch. Update the complete rulebook folder.');buffers.set(index,bytes);
 }
 async function part(index){
  if(buffers.has(index))return buffers.get(index);
  if(pending.has(index))return pending.get(index);
  const promise=new Promise((resolve,reject)=>{
   const script=document.createElement('script'),url=new URL(info.parts[index].src,base);url.searchParams.set('v',info.version);script.src=url.href;
   const finish=()=>{clearTimeout(timer);script.remove();pending.delete(index);};
   script.onload=()=>{finish();buffers.has(index)?resolve(buffers.get(index)):reject(Error('PDF data is missing. Update the complete app folder.'));};
   script.onerror=()=>{finish();reject(Error('Could not load the PDF. Check your connection and the complete rulebook folder, then try again.'));};
   const timer=setTimeout(()=>{finish();reject(Error('PDF download timed out. Try again.'));},45000);document.head.append(script);
  });pending.set(index,promise);return promise;
 }
 async function getBlob({progress=()=>{}}={}){
  if(cached){progress(info.bytes,info.bytes);return cached;}
  if(!info)throw Error('The PDF download files are missing.');
  if(building)return building;
  building=(async()=>{let loaded=0;const parts=[];for(let i=0;i<info.parts.length;i++){const data=await part(i);parts.push(data);loaded+=data.length;progress(loaded,info.bytes);}
   const blob=new Blob(parts,{type:'application/pdf'});if(blob.size!==info.bytes)throw Error('Incomplete PDF download.');
   if((await blob.slice(0,5).text())!=='%PDF-')throw Error('Invalid PDF download.');cached=blob;buffers.clear();return blob;
  })();try{return await building;}finally{building=null;}
 }
 function save(blob,parent=document.body){const url=downloadURL||(downloadURL=URL.createObjectURL(blob)),a=document.createElement('a');a.href=url;a.download=info.filename;a.hidden=true;parent.append(a);a.click();a.remove();return url;}
 window.addEventListener('pagehide',event=>{if(!event.persisted&&downloadURL){URL.revokeObjectURL(downloadURL);downloadURL=null;}});
 globalThis.OOIRulebookPDF={accept,getBlob,save,info};
})();
