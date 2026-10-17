/* Of Oil & Iron v0.28.31 — local, seeded dynamic roster construction.
 * No proposal bank, network service, or save-state access. */
(function(root,factory){
 'use strict';
 const api=factory();
 if(typeof module==='object'&&module.exports)module.exports=api;
 else root.OOIDynamicRoster=api;
})(typeof globalThis==='object'?globalThis:this,function(){
 'use strict';
 const VERSION='0.28.31',CLASSES=['Light','Medium','Heavy','Colossal'];
 const STYLES=['random','balanced','fast','firepower','cc'];
 const ROLES=['runner','assault','gunner','controller','guardian','vip','anchor','breaker','interdictor','ambusher'];
 const melee=w=>!!w&&(w.melee===true||/\bMelee\b/i.test(w.perks));
 const hull=w=>!!w&&/\bHull\b/i.test(w.perks);
 const copy=c=>({...c,weapons:c.weapons.slice(),equipment:c.equipment.slice(),targets:{...c.targets}});
 function rng(seed){let a=seed>>>0;return ()=>{a=(a+0x6D2B79F5)>>>0;let t=Math.imul(a^a>>>15,1|a);t^=t+Math.imul(t^t>>>7,61|t);return ((t^t>>>14)>>>0)/4294967296;};}
 function hash(s){let h=2166136261;for(const ch of s){h^=ch.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
 const pair=c=>[c.rigId,...c.weapons.slice(0,2).sort((a,b)=>a-b)].join('/');
 const signature=c=>JSON.stringify([c.rigId,c.pilot,c.weapons,c.equipment.slice().sort((a,b)=>a-b),c.targets]);
 function create(data){
  const {DATA,PILOTS,FORMATIONS,ENGAGEMENTS}=data;
  const rigs=new Map(DATA.rigs.map(r=>[r.id,r])),bareCache=new Map();
  const spent=c=>PILOTS[c.pilot].iron+c.weapons.reduce((n,w)=>n+(w===null?0:rigs.get(c.rigId).weapons[w].iron),0)+c.equipment.reduce((n,e)=>n+DATA.equipment[e].iron,0);
  const weapons=c=>c.weapons.map(w=>w===null?null:rigs.get(c.rigId).weapons[w]);
  const scenario=q=>q.engagement+(ENGAGEMENTS.find(e=>e[0]===q.engagement)?.[3]?':'+q.side:'');
  function requestErrors(q){
   if(!q||!['standard','campaign'].includes(q.mode)||!STYLES.includes(q.style))return ['Invalid mode or style.'];
   if(!Number.isInteger(q.formation)||q.formation<1||!FORMATIONS[q.formation]?.[1])return ['Choose a printed formation.'];
   if(!ENGAGEMENTS.some(e=>e[0]===q.engagement)||!['attacker','defender'].includes(q.side)||![0,1,2].includes(q.density))return ['Invalid Game setup.'];
   if(q.mode==='campaign'&&(q.formation>3||q.faction==='nomads'))return ['Starting campaigns require a main faction and a Skirmish formation.'];
   if(FORMATIONS[q.formation][1].some((n,i)=>n&&!DATA.rigs.some(r=>r.faction===q.faction&&r.weight===CLASSES[i])))return ['This faction cannot fill that formation.'];
   return [];
  }
  // D6 attack expectation, used only to compare roles. Not a game simulator or
  // win probability; conditional heat bonuses and one-use items are separate.
  function attack(c,slot,distance=6,armour=4,cover=1){
   const w=weapons(c)[slot];if(!w)return {damage:0,critical:0};
   const m=melee(w),eq=c.equipment,range=w.rng.split('/').map(Number);
   const sr=range[0]+(c.targets[5]===slot?2:0),lr=(range[1]||range[0])+(c.targets[5]===slot?4:0),long=distance>sr;
   if(distance>(m?1:lr))return {damage:0,critical:0};
   let acc=Number((String(w.acc).match(/[+-]\d+/)||[0])[0]);
   if(/SR/.test(w.acc)&&long||/LR/.test(w.acc)&&!long)acc=0;
   if(!m&&!(long&&/Bombardment/.test(w.perks)))acc-=cover;
   if(eq.includes(7)&&distance<=6)acc++;
   if(eq.includes(8)&&distance>12&&!m)acc++;
   if(eq.includes(18)&&['anchor','gunner','breaker','guardian','vip','interdictor'].includes(c.role))acc++;
   let hit=0,crit=0;for(let d=1;d<=6;d++)if(d+acc>=PILOTS[c.pilot].aim){hit+=1/6;if(d>=(/Penetrating/.test(w.perks)||c.targets[0]===slot?5:6))crit+=1/6;}
   if(eq.includes(4)&&m&&c.weapons[0]===c.weapons[1]){crit*=2-hit;hit=1-(1-hit)**2;}
   const ws=weapons(c),rof=w.rof+(m&&melee(ws[0])&&melee(ws[1])?1:0);
   const power=w.str+(c.targets[1]===slot?1:0),ap=Number((w.perks.match(/Piercing\s*(\d+)/i)||[])[1]||0);
   const fail=Math.min(1,Math.max(0,(armour+ap-1)/6));
   return {damage:(rof*hit*power+(/Sustained Fire/.test(w.perks)?rof*crit:0))*fail+(/Breaching/.test(w.perks)?rof*crit:0),critical:rof*crit};
  }
  function metrics(c){
   const r=rigs.get(c.rigId),ws=weapons(c);let shoot=0,close=0,asset=0,control=0,near=0;
   ws.forEach((w,s)=>{if(!w)return;if(melee(w)){close=Math.max(close,attack(c,s,1,4,0).damage);return;}
    for(const [distance,p]of[[5,.3],[11,.45],[17,.25]]){const a=attack(c,s,distance,4,1);shoot+=p*a.damage;if(/Shock|Impale|Rupture|Incendiary|Staggering/.test(w.perks))control+=p*a.critical;}
    asset+=attack(c,s,8,5,0).damage;near+=attack(c,s,5,4,0).damage;
   });
   return {shoot,close,asset,control,near,ranged:ws.filter(w=>w&&!melee(w)).length,melee:ws.filter(melee).length,speed:r.speed+(c.equipment.includes(16)?2:0)};
  }
  function requiredRunners(q,n){
   if(['point-of-control','total-command'].includes(q.engagement))return 2;
   if(q.engagement==='push-the-line')return Math.ceil(n*.6);
   if(q.engagement==='supply-airdrop')return 1;
   if(q.engagement==='salvage-heist')return Math.ceil(n*.66);
   return scenario(q)==='breakthrough:attacker'?Math.ceil(n/2):0;
  }
  function validate(q,list,tactics=true){
   const errors=requestErrors(q);if(errors.length)return errors;
   if(!Array.isArray(list)||!list.length)return ['Empty squadron.'];
   const counts=CLASSES.map(w=>list.filter(c=>rigs.get(c.rigId)?.weight===w).length);
   if(counts.some((n,i)=>n!==FORMATIONS[q.formation][1][i]))errors.push('Formation does not match.');
   const ids=new Set();
   for(const c of list){
    const r=rigs.get(c.rigId);
    if(!r||r.faction!==q.faction||!Number.isInteger(c.pilot)||c.pilot<0||c.pilot>(q.mode==='campaign'?1:3)||!Array.isArray(c.weapons)||c.weapons.length!==3||c.weapons.slice(0,2).some(w=>w===null)||c.weapons.some(w=>w!==null&&(!Number.isInteger(w)||!r.weapons[w]))||!Array.isArray(c.equipment)||c.equipment.some(e=>!Number.isInteger(e)||!DATA.equipment[e])||!c.targets||!ROLES.includes(c.role))return ['Invalid faction, pilot or loadout.'];
    if(!c.id||ids.has(c.id))errors.push('Duplicate or missing Rig ID.');ids.add(c.id);
    if(spent(c)>r.iron)errors.push('Rig Iron capacity exceeded.');
    c.weapons.forEach((w,s)=>{if(w===null)return;if(s<2&&hull(r.weapons[w])||s===2&&(r.weight!=='Colossal'||!hull(r.weapons[w])))errors.push('Invalid weapon mount.');});
    if(new Set(c.equipment).size!==c.equipment.length)errors.push('Duplicate Equipment.');
    for(const id of c.equipment){
     if(q.mode==='standard'&&DATA.equipment[id].campaign)errors.push('Campaign Equipment in Quick game.');
     if([0,1,5].includes(id)){const s=c.targets[id];if(!Number.isInteger(s)||s<0||s>2||c.weapons[s]===null||melee(r.weapons[c.weapons[s]]))errors.push('Invalid Equipment assignment.');}
     // These require a specific sacrificial or cross-Rig plan. They remain
     // available in the manual builder, rather than being allocated blindly.
     if(id===30||id===35)errors.push('Equipment requiring a manual plan.');
    }
    if(tactics){const m=metrics(c);
     if(c.role==='runner'&&!c.equipment.includes(16))errors.push('Runner without mobility Equipment.');
     if(c.role==='vip'&&!c.equipment.some(e=>[12,13,31].includes(e)))errors.push('VIP without protection.');
     if(c.role==='assault'&&!m.melee)errors.push('Assault role without melee.');
     if(['gunner','interdictor','ambusher'].includes(c.role)&&(m.shoot<=.08||m.near<=.1))errors.push('Support role cannot deliver usable ranged fire.');
     if(c.role==='breaker'&&(m.asset<=.15||m.near<=.1))errors.push('Breaker cannot attack assets.');
     if(scenario(q)==='hold-the-line:defender'&&c.equipment.some(e=>[16,17].includes(e)))errors.push('Mobility allocation for static defence.');
    }
   }
   if(q.mode==='campaign'&&list.reduce((n,c)=>n+spent(c),0)>15)errors.push('Starting budget exceeds 15 Iron.');
   if(tactics){
    if(list.filter(c=>c.role==='runner').length<requiredRunners(q,list.length))errors.push('Not enough objective runners.');
    if(q.engagement==='high-value-target'&&list.filter(c=>c.role==='vip').length!==1)errors.push('Nominate exactly one VIP.');
    if((q.engagement==='sabotage'||['siege:attacker','hold-the-line:attacker'].includes(scenario(q)))&&!list.some(c=>c.role==='breaker'))errors.push('Missing mission breaker.');
    const eligible=list.filter(c=>rigs.get(c.rigId).weight!=='Colossal');
    if(q.style==='cc'&&eligible.filter(c=>metrics(c).melee).length<Math.max(1,Math.floor(eligible.length/2)))errors.push('Insufficient close-combat capability.');
    if(q.style==='firepower'&&(list.filter(c=>metrics(c).ranged).length<Math.ceil(list.length/2)||eligible.some(c=>rigs.get(c.rigId).weight==='Light'&&!metrics(c).ranged)))errors.push('Insufficient ranged capability.');
    if(q.style==='fast'&&scenario(q)!=='hold-the-line:defender'&&!list.some(c=>c.equipment.includes(16)))errors.push('Fast style without a mobility gain.');
   }
   return [...new Set(errors)];
  }
  function bare(r,mode){
   const key=r.id+'|'+mode;if(bareCache.has(key))return bareCache.get(key);
   const arms=r.weapons.flatMap((w,i)=>hull(w)?[]:[i]),hulls=[null,...r.weapons.flatMap((w,i)=>hull(w)?[i]:[])],list=[];
   for(let p=0;p<(mode==='campaign'?2:4);p++)for(let a=0;a<arms.length;a++)for(let b=a;b<arms.length;b++)for(const h of r.weight==='Colossal'?hulls:[null]){
    const c={rigId:r.id,pilot:p,weapons:[arms[a],arms[b],h],equipment:[],targets:{}};if(spent(c)<=r.iron)list.push(c);
   }
   bareCache.set(key,list);return list;
  }
  function shuffled(xs,random){return xs.map(x=>[random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);}
  function plan(q,random,history){
   const used=new Map();for(const old of history.recent||[])for(const c of old.models||[])used.set(c,(used.get(c)||0)+1);
   const models=[];
   FORMATIONS[q.formation][1].forEach((n,i)=>{const options=DATA.rigs.filter(r=>r.faction===q.faction&&r.weight===CLASSES[i]);for(let j=0;j<n;j++){
    const sorted=options.map(r=>[r,(used.get(r.id)||0)+random()*.9]).sort((a,b)=>a[1]-b[1]);models.push(sorted[0][0]);used.set(sorted[0][0].id,(used.get(sorted[0][0].id)||0)+1);
   }});
   const approach=q.style==='random'?['balanced','fast','firepower','cc'][Math.floor(random()*4)]:q.style;
   const n=models.length,slots=models.map(r=>({rig:r,role:'controller',needMelee:false,needRanged:false})),order=shuffled(slots.map((_,i)=>i),random);
   const staticDef=scenario(q)==='hold-the-line:defender';
   if(staticDef)slots.forEach(s=>s.role='anchor');
   else if(approach==='firepower')slots.forEach(s=>s.role='gunner');
   else {order.forEach((i,j)=>slots[i].role=j%3===0&&models[i].weight!=='Colossal'?'assault':j%3===1?'gunner':'controller');}
   if(q.engagement==='high-value-target'){
    const candidates=order.slice().sort((a,b)=>CLASSES.indexOf(models[b].weight)-CLASSES.indexOf(models[a].weight));slots[candidates[0]].role='vip';
    order.filter(i=>slots[i].role!=='vip').slice(0,1).forEach(i=>slots[i].role='interdictor');
   }
   if(q.engagement==='sabotage'||['siege:attacker','hold-the-line:attacker'].includes(scenario(q)))order.slice(0,Math.max(1,Math.ceil(n/3))).forEach(i=>slots[i].role='breaker');
   if(['breakthrough:defender','siege:defender'].includes(scenario(q)))order.forEach((i,j)=>slots[i].role=j%3===0?'guardian':'interdictor');
   if(scenario(q)==='ambush:attacker')slots.forEach(s=>s.role='ambusher');
   if(scenario(q)==='ambush:defender')order.slice(0,Math.ceil(n/2)).forEach(i=>slots[i].role='guardian');
   let runners=requiredRunners(q,n);if(!staticDef&&approach==='fast')runners=Math.max(runners,Math.max(1,Math.ceil(n/3)));
   const mobile=order.filter(i=>slots[i].role!=='vip').sort((a,b)=>(models[b].weight==='Colossal'?-10:models[b].speed)-(models[a].weight==='Colossal'?-10:models[a].speed));
   mobile.slice(0,runners).forEach(i=>slots[i].role='runner');
   if((q.engagement==='sabotage'||['siege:attacker','hold-the-line:attacker'].includes(scenario(q)))&&!slots.some(s=>s.role==='breaker'))slots[order.find(i=>!['runner','vip'].includes(slots[i].role))].role='breaker';
   if(q.engagement==='supply-airdrop')order.filter(i=>slots[i].role!=='runner').slice(0,1).forEach(i=>slots[i].role='guardian');
   if(approach==='cc'){
    const cc=order.filter(i=>models[i].weight!=='Colossal').sort((a,b)=>(slots[b].role==='assault')-(slots[a].role==='assault'));
    cc.slice(0,Math.max(1,Math.ceil(cc.length*.6))).forEach(i=>slots[i].needMelee=true);
   }
   slots.forEach(s=>{if(s.role==='assault')s.needMelee=true;if(approach==='firepower'||['gunner','interdictor','ambusher','breaker'].includes(s.role))s.needRanged=true;});
   // Reserve real covering fire, including CC and objective-heavy formations.
   if(!slots.some(s=>s.needRanged))slots[order.find(i=>slots[i].role!=='assault')??order[0]].needRanged=true;
   if(approach==='balanced')order.filter(i=>slots[i].role!=='assault').slice(0,Math.ceil(n/2)).forEach(i=>slots[i].needRanged=true);
   return {slots,approach};
  }
  function useful(c,id){
   const ws=weapons(c),ranged=ws.some(w=>w&&!melee(w)),mobile=['runner','assault','ambusher'].includes(c.role);
   if([30,35].includes(id))return false;
   if([0,1,2,3,5,6,8,9,18,22].includes(id)&&!ranged)return false;
   if(id===4)return c.weapons[0]===c.weapons[1]&&melee(ws[0]);
   if(id===0)return ws.some(w=>w&&!melee(w)&&/Incendiary|Impale|Rupture|Shock|Breaching|Sustained Fire/.test(w.perks)&&!/Penetrating/.test(w.perks));
   if(id===8&&!ws.some(w=>w&&!melee(w)&&Number(w.rng.split('/').at(-1))>12))return false;
   if([18,21].includes(id)&&mobile)return false;
   if([16,17].includes(id)&&c.role==='anchor')return false;
   if(id===29&&!['assault','runner','guardian'].includes(c.role))return false;
   return true;
  }
  function add(c,id,random){
   if(c.equipment.includes(id)||!useful(c,id))return false;
   if([0,1,5].includes(id)){
    const ws=weapons(c),slots=ws.flatMap((w,s)=>w&&!melee(w)&&(id!==0||/Incendiary|Impale|Rupture|Shock|Breaching|Sustained Fire/.test(w.perks)&&!/Penetrating/.test(w.perks))?[s]:[]);
    if(!slots.length)return false;c.targets[id]=slots[Math.floor(random()*slots.length)];
   }
   c.equipment.push(id);return true;
  }
  function equipmentWeight(c,id){
   let w=1;if([7,19,20,23,25,31].includes(id))w=2.5;
   if([0,1,4,5,8].includes(id))w=2;
   if(c.role==='runner'&&[13,15,16,23,24,27].includes(id))w=3;
   if(c.role==='assault'&&[4,7,14,16,24,27,29].includes(id))w=3;
   if(c.role==='vip'&&[12,13,15,19,24,31].includes(id))w=4;
   if(['gunner','anchor','breaker'].includes(c.role)&&[1,5,8,18,21].includes(id))w=3;
   if(c.role==='interdictor'&&[0,7,28].includes(id))w=3;
   if(id>=32)w=.45; // Campaign recovery is useful, but not combat firepower.
   return w;
  }
  function utility(c,q,m=metrics(c)){
   const eq=c.equipment,r=rigs.get(c.rigId);
   let protection=(eq.includes(12)?.8:0)+(eq.includes(13)?.8:0)+(eq.includes(31)?.65:0)+(eq.includes(14)&&m.melee?.2:0);
   let tools=0;
   for(const id of eq)tools+=({2:.14,3:.2,6:.15,9:.14,10:.2,11:.35,15:c.role==='runner'?.45:.18,17:.12,19:.26,20:.22,21:.3,22:.12,23:.2,24:c.role==='runner'||c.role==='vip'?.4:.2,25:.18,26:.18,27:.2,28:c.role==='interdictor'?.45:.15,29:.15,32:.3,33:.2,34:.22})[id]||0;
   let value;
   switch(c.role){
    case 'runner':value=m.shoot*.55+m.close*.28+m.speed*.55+protection*.8;break;
    case 'assault':value=m.close*1.25+m.shoot*.2+m.speed*.23+protection*.5;break;
    case 'gunner':value=m.shoot*1.4+m.control*.25+protection*.35;break;
    case 'breaker':value=m.asset*.85+m.shoot*.4+protection*.35;break;
    case 'vip':value=m.shoot*.65+m.close*.25+protection*1.7+r.sp.reduce((a,b)=>a+b,0)*.025;break;
    case 'anchor':value=m.shoot+m.close*.25+protection*.85;break;
    case 'interdictor':value=m.shoot*1.1+m.control*1.1+protection*.35;break;
    case 'ambusher':value=m.shoot*.7+m.near*.65+protection*.35;break;
    case 'guardian':value=m.shoot*.85+m.close*.35+protection;break;
    default:value=m.shoot+m.close*.45+m.control*.3+protection*.6;
   }
   // Cold/Hot are rate-of-heat traits, not fabricated extra attacks.
   const ws=weapons(c);value+=ws.filter(w=>w&&/\bCold\b/.test(w.perks)).length*.12;
   value-=ws.filter(w=>w&&/\bHot\b/.test(w.perks)).length*.08;
   if(q.density===2)value+=m.close*.06;if(q.density===0)value+=m.shoot*.06;
   return Math.max(.01,value+tools);
  }
  function fitsRole(c,slot){
   const m=metrics(c);
   if(slot.needMelee&&!m.melee||slot.needRanged&&!m.ranged)return false;
   if(['gunner','interdictor','ambusher'].includes(c.role)&&(m.shoot<=.08||m.near<=.1))return false;
   return c.role!=='breaker'||m.asset>.15&&m.near>.1;
  }
  function *candidates(q,slot,random){
   const result=[],seen=new Set(),r=slot.rig;
   function keep(c){if(!fitsRole(c,slot))return;const key=signature(c);if(seen.has(key))return;seen.add(key);result.push({config:copy(c),cost:spent(c),utility:utility(c,q)});}
   let work=0;
   for(const base of bare(r,q.mode)){
    const ws=weapons(base);if(slot.needMelee&&!ws.some(melee)||slot.needRanged&&!ws.some(w=>w&&!melee(w)))continue;
    const protections=slot.role==='vip'?[12,13,31]:[null];
    for(const protection of protections){
     const c={...copy(base),role:slot.role};
     if(slot.role==='runner')add(c,16,random);if(protection!==null)add(c,protection,random);
     if(spent(c)>r.iron)continue;
     keep(c);
     // Construct fresh Equipment subsets and weapon assignments on each draw.
     // Every intermediate budget is retained for the campaign knapsack.
     for(let path=0;path<2;path++){
      const built=copy(c);const target=spent(c)+Math.floor(random()*(r.iron-spent(c)+1));
      for(let step=0;step<DATA.equipment.length;step++){
       const available=DATA.equipment.filter(e=>!built.equipment.includes(e.id)&&(q.mode==='campaign'||!e.campaign)&&spent(built)+e.iron<=r.iron&&useful(built,e.id));
       if(!available.length)break;
       let t=random()*available.reduce((n,e)=>n+equipmentWeight(built,e.id),0),id=available.at(-1).id;
       for(const e of available){t-=equipmentWeight(built,e.id);if(t<0){id=e.id;break;}}
       add(built,id,random);keep(built);
       if(spent(built)>=target&&random()<.8)break;
      }
     }
     if(++work%16===0)yield null;
    }
   }
   if(!result.length)throw Error('Could not construct a useful '+r.weight+' loadout. Try another style.');
   return result;
  }
  function rank(options,history,index,random,q){
   const bestCost=new Map();let best=0;
   for(const o of options){best=Math.max(best,o.utility);bestCost.set(o.cost,Math.max(bestCost.get(o.cost)||0,o.utility));}
   const noises=new Map(),recent=(history.recent||[]).slice(-12),last=recent.at(-1),uses=new Map();
   for(const old of recent)for(const p of old.pairs)uses.set(p,(uses.get(p)||0)+1);
   return options.filter(o=>o.utility>=bestCost.get(o.cost)*.55&&(q.mode==='campaign'||o.utility>=best*.55)).map(o=>{
    const p=pair(o.config);if(!noises.has(p))noises.set(p,random()*.35);
    const repeated=last?.pairs[index]===p;
    const historyPenalty=(repeated?.55:0)+Math.min(.35,(uses.get(p)||0)*.035);
    return {...o,score:o.utility/best+noises.get(p)+random()*.075-historyPenalty};
   });
  }
  function select(lists,budget,last,avoidIndex=-1,avoidConfigs=[]){
   const score=(o,i)=>o.score-(avoidIndex===i&&last?.pairs[i]===pair(o.config)?1:0)-(avoidConfigs[i]?.has(signature(o.config))?3:0);
   if(!Number.isFinite(budget))return lists.map((list,i)=>list.reduce((a,b)=>score(a,i)>=score(b,i)?a:b));
   let states=new Map([[0,{score:0,rows:[]}]]);
   lists.forEach((list,i)=>{
    const byCost=new Map();for(const o of list)if(!byCost.has(o.cost)||score(o,i)>score(byCost.get(o.cost),i))byCost.set(o.cost,o);
    const next=new Map();for(const [total,path]of states)for(const [cost,o]of byCost){const n=total+cost;if(n>budget)continue;const s=path.score+score(o,i);if(!next.has(n)||s>next.get(n).score)next.set(n,{score:s,rows:[...path.rows,o]});}states=next;
   });
   if(!states.size)throw Error('Could not fit the formation and its tactical roles within 15 Iron.');
   return [...states.values()].reduce((a,b)=>a.score>=b.score?a:b).rows;
  }
  function remember(result,history){
   history.recent??=[];history.recent.push({pairs:result.rigs.map(pair),models:result.rigs.map(c=>c.rigId),signature:result.rigs.map(signature).join('|')});
   if(history.recent.length>64)history.recent.splice(0,history.recent.length-64);
  }
  function *work(q,{seed=1,history={}}={}){
   const errors=requestErrors(q);if(errors.length)throw Error(errors.join(' '));
   const random=rng(seed),p=plan(q,random,history),lists=[];let explored=0;
   for(let i=0;i<p.slots.length;i++){
    const raw=yield* candidates(q,p.slots[i],random);explored+=raw.length;
    lists.push(rank(raw,history,i,random,q));yield {completed:i+1,total:p.slots.length};
   }
   const last=history.recent?.at(-1),budget=q.mode==='campaign'?15:Infinity;
   let rows=select(lists,budget,last);
   // A different pilot or Equipment item must not hide an unchanged armament
   // vector. Re-solve using a rotating priority Rig when an alternative fits.
   if(last&&rows.every((o,i)=>pair(o.config)===last.pairs[i])){
    const start=(history.recent?.length||0)%rows.length;
    for(let k=0;k<rows.length;k++){
     const next=select(lists,budget,last,(start+k)%rows.length);
     if(next.some((o,i)=>pair(o.config)!==last.pairs[i])){rows=next;break;}
    }
   }
   // Re-solve a recently seen complete configuration. The constraints and
   // useful-loadout floor remain identical: only candidate preferences change.
   const seen=new Set((history.recent||[]).map(old=>old.signature)),avoid=lists.map(()=>new Set());
   const full=rows=>rows.map(o=>signature(o.config)).join('|');
   if(seen.has(full(rows))){
    const original=rows;let fresh=null;
    for(let attempt=0;attempt<64;attempt++){
     const focus=((history.recent?.length||0)+attempt)%rows.length;
     avoid[focus].add(signature(rows[focus].config));
     rows=select(lists,budget,last,-1,avoid);
     if(last&&rows.every((o,i)=>pair(o.config)===last.pairs[i]))rows=select(lists,budget,last,focus,avoid);
     if(!seen.has(full(rows))&&(!last||rows.some((o,i)=>pair(o.config)!==last.pairs[i]))){fresh=rows;break;}
    }
    rows=fresh||original;
   }
   const list=rows.map((o,i)=>({...copy(o.config),id:'generated-'+(seed>>>0)+'-'+i,name:rigs.get(o.config.rigId).name+' '+(i+1)}));
   const invalid=validate(q,list);if(invalid.length)throw Error(invalid.join(' '));
   return {version:VERSION,seed:seed>>>0,request:{...q},approach:p.approach,rigs:list,iron:list.reduce((n,c)=>n+spent(c),0),explored};
  }
  function generate(q,options){const job=work(q,options);let step;do{step=job.next();}while(!step.done);return step.value;}
  async function generateAsync(q,options={}){
   const job=work(q,options),now=()=>globalThis.performance?.now?.()??Date.now();let slice=now();
   for(;;){
    if(options.cancelled?.())throw Error('Generation cancelled.');
    const step=job.next();if(step.done)return step.value;
    if(step.value)options.progress?.(step.value);
    if(now()-slice>=6){await new Promise(resolve=>setTimeout(resolve,0));slice=now();}
   }
  }
  return {version:VERSION,generate,generateAsync,validate,metrics,attack,spent,remember,signature,pair,requiredRunners};
 }
 return {version:VERSION,create,rng,hash};
});
