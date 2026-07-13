import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
const scene=()=>p.evaluate(()=>window.__GAME_TEST__?.scene);
const st=()=>p.evaluate(()=>window.__GAME_TEST__?.stats);
const hp=()=>p.evaluate(()=>{const t=Array.from(document.querySelectorAll('div')).map(d=>d.textContent).find(x=>x&&/^\d+ \/ \d+$/.test((x||'').trim()));if(!t)return null;const[a,c]=t.trim().split(' / ').map(Number);return {hp:a,max:c};});
await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
await p.evaluate(()=>{window.__GAME_TEST__.grantGold(3000);window.__GAME_TEST__.buyUpgrade('revive');});
for(let a=0;a<6;a++){ if(await scene()==='run')break; const s=await scene(); if(s==='title'){await p.getByText('출진 出陣',{exact:true}).click().catch(()=>{});await p.waitForTimeout(400);} await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(600);}
await p.evaluate(()=>window.__GAME_TEST__.setTime(500)); // 극고밀도
// 부활 배너 감지 훅
await p.evaluate(()=>{ window.__QA_REVIVE__=false; const obs=new MutationObserver(()=>{ if(Array.from(document.querySelectorAll('div')).some(d=>(d.textContent||'').includes('起死回生'))) window.__QA_REVIVE__=true; }); obs.observe(document.body,{childList:true,subtree:true}); });
let hist=[]; let ended=false;
for(let i=0;i<80;i++){ const h=await hp(); const s=await st(); const rv=await p.evaluate(()=>window.__QA_REVIVE__);
  hist.push(`${s.time?.toFixed(0)}s hp=${h?h.hp:'?'} st=${s.state} rv=${rv}`);
  if(s.state==='dead'||await scene()==='result'){ended=true;break;}
  await p.waitForTimeout(300);
}
const reviveBanner = await p.evaluate(()=>window.__QA_REVIVE__);
// HP 반등(near0 → high) 탐지
let reboundSeen=false; for(let i=1;i<hist.length;i++){}
console.log('부활 배너(起死回生) 관측:', reviveBanner, '| 결과화면 도달:', ended, '| scene:', await scene());
console.log('HP 이력(요약):', hist.filter((_,i)=>i%4===0).join('  '));
console.log('마지막 5틱:', hist.slice(-5).join('  '), '| errs:', errs.slice(0,2));
await b.close();
