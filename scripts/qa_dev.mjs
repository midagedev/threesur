import { chromium } from '@playwright/test';
const URL='http://localhost:5188/threesur/';
const b=await chromium.launch({args:['--use-angle=metal']});
const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
const scene=()=>p.evaluate(()=>window.__GAME_TEST__?.scene);
const st=()=>p.evaluate(()=>window.__GAME_TEST__?.stats);
const hp=()=>p.evaluate(()=>{const t=Array.from(document.querySelectorAll('div')).map(d=>d.textContent).find(x=>x&&/^\d+ \/ \d+$/.test((x||'').trim()));if(!t)return null;const[a,c]=t.trim().split(' / ').map(Number);return {hp:a,max:c};});
const fps=(ms)=>p.evaluate((ms)=>new Promise(r=>{let n=0;const t0=performance.now();function f(){n++;const e=performance.now()-t0;if(e>=ms)r(Math.round(n/(e/1000)));else requestAnimationFrame(f);}requestAnimationFrame(f);}),ms);
async function fresh(){ await p.evaluate(()=>window.__GAME_TEST__?.goToTitle?.()); await p.waitForTimeout(500); await p.evaluate(()=>window.__GAME_TEST__?.selectHero?.('zhaoyun')); await p.waitForTimeout(700); return (await scene())==='run'; }
async function kite(ms){ const keys=['w','d','s','a']; const n=Math.ceil(ms/500); for(let i=0;i<n;i++){ const k=keys[i%4]; await p.keyboard.down(k); await p.waitForTimeout(500); await p.keyboard.up(k); const lu=(await st())?.state==='levelup'; if(lu)await p.keyboard.press('Digit1'); } }
await p.goto(URL,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(1500);

// ── B: 부활 재사망 (C3) ──
try{
 await p.evaluate(()=>window.__GAME_TEST__.goToTitle()); await p.waitForTimeout(400);
 await p.evaluate(()=>{window.__GAME_TEST__.grantGold(3000);window.__GAME_TEST__.buyUpgrade('revive');});
 const rev=await p.evaluate(()=>window.__GAME_TEST__.save.upgrades.revive);
 await p.evaluate(()=>window.__GAME_TEST__.selectHero('zhaoyun')); await p.waitForTimeout(700);
 await p.evaluate(()=>{window.__QA_R=false;new MutationObserver(()=>{if(Array.from(document.querySelectorAll('div')).some(d=>(d.textContent||'').includes('起死回生')))window.__QA_R=true;}).observe(document.body,{childList:true,subtree:true});});
 await p.evaluate(()=>window.__GAME_TEST__.setTime(520));
 let ended=false; for(let i=0;i<70;i++){ const s=await st(); if(s.state==='dead'||await scene()==='result'){ended=true;break;} await p.waitForTimeout(300); }
 const rb=await p.evaluate(()=>window.__QA_R);
 console.log(`B 부활재사망: reviveUpg=${rev} 부활배너=${rb} 결과도달=${ended} scene=${await scene()}`);
}catch(e){ console.log('B 실패:', String(e).slice(0,80)); }

// ── A: 원소(3분) 보스전 타이밍 ──
try{
 await fresh();
 await p.evaluate(()=>{const g=window.__GAME_TEST__;g.giveWeapon('crossbow');g.giveWeapon('baiyu');g.giveWeapon('thunder');g.givePassive('horseshoe',3);});
 await p.evaluate(()=>{window.__GAME_TEST__.setBossFlags(false,true,true);window.__GAME_TEST__.setTime(178);});
 let spawnT=null,deathT=null,seen=false;
 for(let i=0;i<120;i++){ const s=await st(); if(s.bossActive&&!seen){seen=true;spawnT=s.time;} if(seen&&!s.bossActive&&!deathT){deathT=s.time;break;} if(s.state==='dead')break; await kite(500); }
 console.log(`A 원소전: 스폰 t=${spawnT?.toFixed(0)} 처치 t=${deathT?deathT.toFixed(0):'미처치'} → 소요=${(spawnT!=null&&deathT!=null)?(deathT-spawnT).toFixed(0)+'s':'-'}`);
}catch(e){ console.log('A 실패:', String(e).slice(0,80)); }

// ── C: 구간 밀도/HP/fps 프록시 ──
try{
 await fresh();
 await p.evaluate(()=>{const g=window.__GAME_TEST__;g.giveWeapon('crossbow');g.giveWeapon('baiyu');g.givePassive('horseshoe',2);g.givePassive('armor',2);});
 for(const T of [60,180,360,540]){
   await p.evaluate((t)=>window.__GAME_TEST__.setTime(t),T); await p.waitForTimeout(300);
   const h0=await hp(); await kite(10000); const h1=await hp(); const s=await st(); const f=await fps(600);
   console.log(`C 구간 t≈${T}s: HP ${h0?h0.hp:'?'}→${h1?h1.hp:'?'} alive=${s.alive} fps~${f} state=${s.state}`);
   if(s.state==='dead'){ console.log('   (해당 구간에서 전사)'); await fresh(); await p.evaluate(()=>{const g=window.__GAME_TEST__;g.giveWeapon('crossbow');g.giveWeapon('baiyu');g.givePassive('horseshoe',2);g.givePassive('armor',2);}); }
 }
}catch(e){ console.log('C 실패:', String(e).slice(0,80)); }

console.log('errs:', errs.slice(0,3));
await b.close();
