/* Local PDF export. Original sheet artwork: Of Oil and Iron / Scoutsifer Studio. */
async function buildRigPDF(rigs){
 const {PDFDocument,StandardFonts,rgb}=PDFLib,doc=await PDFDocument.create();
 const font=await doc.embedFont(StandardFonts.Helvetica),bold=await doc.embedFont(StandardFonts.HelveticaBold);
 const response=await fetch('images/print/rig-sheet.png');if(!response.ok)throw Error('Rig sheet artwork could not be loaded.');
 const art=await doc.embedPng(await response.arrayBuffer());
 const colossalResponse=await fetch('images/print/rig-sheet-colossal.png');if(!colossalResponse.ok)throw Error('Colossal sheet artwork could not be loaded.');const colossalArt=await doc.embedPng(await colossalResponse.arrayBuffer());
 const clean=v=>String(v??'').replace(/\s+/g,' ').replace(/[–—−]/g,'-').replace(/[’‘]/g,"'").replace(/[“”″]/g,'"').replace(/…/g,'...').replace(/[^\x20-\x7e\xa0-\xff]/g,'');
 let page,y;
 const text=(v,x,top,size=10,strong=false,max=530)=>{let t=clean(v),f=strong?bold:font;while(f.widthOfTextAtSize(t,size)>max&&size>5)size-=.2;page.drawText(t,{x,y:842-top-size,size,font:f,color:rgb(.08,.09,.09)});};
 const rect=(x,top,w,h,fill=false)=>page.drawRectangle({x,y:842-top-h,width:w,height:h,borderWidth:.6,borderColor:rgb(.2,.2,.2),...(fill?{color:rgb(.25,.25,.25)}:{})});
 const newPage=(title)=>{page=doc.addPage([595,842]);y=48;text(title,32,22,12,true);text('Of Oil and Iron - Unofficial Companion v0.28.20',32,816,8);};
 const lines=(v,size=10,width=520)=>{const words=clean(v).split(/\s+/),out=[];let line='';for(const word of words){if(font.widthOfTextAtSize(line+' '+word,size)>width&&line){out.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)out.push(line);return out;};
 const block=(title,body)=>{const ls=lines(body);if(y+32+ls.length*13>795)newPage(title+' (continued)');text(title,32,y,11,true);y+=18;for(const l of ls){if(y>790)newPage(title+' (continued)');text(l,32,y,10);y+=13;}y+=12;};
 for(const r of rigs){
 const rig=effectiveRig(r),b=r.battle||freshBattle(r),pilot=pilotOf(r),total=isCampaign()?(r.campaign?.rerolls||0):0,used=Math.min(total,b.rerollsUsed||0);
 const colossal=rig.weight==='Colossal';newPage(state.name+' / '+r.name);page.drawImage(colossal?colossalArt:art,{x:32,y:842-74-(colossal?326:263),width:536,height:colossal?326:263});
 // Coordinates follow the unmodified original sheet.
 text(r.name,220,96,9,true,60);if(!colossal)text(rig.weight,285,96,8,false,57);text(rig.speed,350,96,11);text(rig.exhaust,415,96,11);text(cost(r)+' / '+ironCapacity(r),478,96,10);
 rig.heat.forEach((v,i)=>{const x=44+i*51.5;rect(x,116,49,31);text(v===null?'-':(v>=0?'+':'')+v,x+17,124,11,true,44);if(i===b.heat)rect(x+2,118,4,4,true);});
 PARTS.forEach((part,i)=>{const x=62+i*132;const max=rig.sp[i],now=b.sp[i];for(let n=0;n<max;n++){const col=n%8,row=Math.floor(n/8);rect(x+col*12,158+row*10,8,8,n>=now);}text('SP '+now+'/'+max+'  ARM '+rig.armour[i]+'+',x,185,8,true,112);text(b.parts[i],x+48,198,7,false,64);});
 for(let slot=0;slot<(colossal?3:2);slot++){const x=45+(slot===1?258:0),dy=slot===2?61:0,w=r.weapons[slot]===null?null:rig.weapons[r.weapons[slot]];if(!w)continue;text(w.name,x+65,223+dy,7,true,76);text(w.rof,x+27,244+dy,9);text(w.str,x+105,244+dy,9);text(w.rng,x+28,267+dy,9);text(w.acc,x+105,267+dy,9);const ls=lines(w.perks,6.5,89);ls.slice(0,5).forEach((l,k)=>text(l,x+157,237+dy+k*8,6.5));}
 r.equipment.slice(0,colossal?4:3).forEach((id,i)=>text(DATA.equipment[id].name,54,(colossal?352:291)+i*(colossal?12:14),8,false,337));
 text(pilot.name,colossal?308:416,297,9,true,130);text(pilot.aim+'+',colossal?339:451,318,10);y=colossal?420:357;
 block('IRONCLAD / BATTLE STATUS',[(r.campaign?.pilotName||r.ironcladName||'Unnamed Ironclad'),pilot.name,'Aim '+pilot.aim+'+',isCampaign()?'Level '+r.campaign?.level+' / '+r.campaign?.xp+' XP':'Quick Game','Round '+state.round,'Actions '+b.actions+'/5',b.activated?'Activated':'Not activated','Conditions: '+(b.conditions.join(', ')||'None'),b.shutDown?'Shut down':''].filter(Boolean).join(' | '));
 if(total){text('RE-ROLLS: '+(total-used)+' / '+total+' available (filled = used)',32,y,10,true);y+=18;for(let i=0;i<total;i++){if(i&&i%32===0)y+=15;rect(32+(i%32)*16,y,10,10,b.rerollFlags?.[i]??(i<used));}y+=25;}
 block('COMPONENTS / HIT LOCATION',PARTS.map((p,i)=>p+' ('+['1-4','5-7','8-10','11-12'][i]+'): '+b.sp[i]+'/'+rig.sp[i]+' SP, Armour '+rig.armour[i]+'+, '+b.parts[i]+(b.ruptured[i]?', Ruptured':'')).join(' | '));
 r.weapons.forEach((index,slot)=>{if(index===null)return;const w=rig.weapons[index];block(SLOTS[slot]+' - '+w.name+' / '+w.iron+' Iron','ROF '+w.rof+' | STR '+w.str+' | RNG '+w.rng+' | ACC '+w.acc+' | '+b.weaponState[slot]+'\nPerks: '+w.perks);});
 r.equipment.forEach(id=>block(DATA.equipment[id].name+' / Equipment',DATA.equipment[id].effect));
 if(r.campaign?.traits?.length)block('PERMANENT DAMAGE',r.campaign.traits.map(t=>PARTS[t.part]+': '+TRAITS[t.part][t.kind].join(' - ')).join(' | '));
 if(b.notes)block('NOTES',b.notes);
 }
 doc.setTitle(state.name+' - Rig sheets');doc.setAuthor('Of Oil and Iron Companion');return doc.save();
}
async function exportRigPDF(button){
 if(!state.squad.length)return;button.disabled=true;const label=button.textContent;button.textContent='Preparing PDF...';
 try{const bytes=await buildRigPDF(clone(state.squad)),blob=new Blob([bytes],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=(state.name.replace(/[^a-z0-9_-]/gi,'_')||'Squadron')+'-rig-sheets.pdf';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
 catch(e){notify('PDF export failed: '+e.message);}finally{button.disabled=false;button.textContent=label;}
}
