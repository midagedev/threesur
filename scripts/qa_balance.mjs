import { chromium } from '@playwright/test';
const URL = process.env.URL || 'https://midagedev.github.io/threesur/';
const b = await chromium.launch({ args:['--use-angle=metal'] });
const p = await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(URL,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
// 조운 선택 시작 (버튼 텍스트 기반)
await p.getByText('출진',{exact:false}).first().click().catch(()=>{}); await p.waitForTimeout(500);
await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(800);
const read = ()=>p.evaluate(()=>{
  const txts=Array.from(document.querySelectorAll('div')).map(d=>(d.textContent||'').trim());
  const time=txts.find(t=>/^\d\d:\d\d$/.test(t))||null;
  const lv=txts.find(t=>/^Lv \d+$/.test(t)); const kills=txts.find(t=>/^처치 \d+$/.test(t));
  const hp=txts.find(t=>/^\d+ \/ \d+$/.test(t));
  const boss=txts.some(t=>t.includes('袁紹'))?'袁紹':(txts.some(t=>t.includes('董卓'))?'董卓':(txts.some(t=>t.includes('呂布'))?'呂布':null));
  const levelup=txts.some(t=>t.includes('레벨 업')||t.includes('리롤'));
  const dead=txts.some(t=>t.includes('戰死')); const win=txts.some(t=>t.includes('天下統一'));
  return {time,lv,kills,hp,boss,levelup,dead,win};
});
const fps=(ms)=>p.evaluate((ms)=>new Promise(res=>{let n=0;const t0=performance.now();function f(){n++;const e=performance.now()-t0;if(e>=ms)res(Math.round(n/(e/1000)));else requestAnimationFrame(f);}requestAnimationFrame(f);}),ms);
const keys=['w','d','s','a','w','a','s','d'];
let firstMinLevels=0, prevLv=1, bossStart=null, bossEnd=null, seenBoss=false, lastLog=0;
const t0=Date.now();
for(let i=0;i<220;i++){
  const k=keys[i%keys.length]; await p.keyboard.down(k); await p.waitForTimeout(700); await p.keyboard.up(k);
  const r=await read();
  if(r.levelup){ await p.keyboard.press('Digit1'); }
  const lvNum=r.lv?parseInt(r.lv.replace('Lv','')):prevLv;
  const elapsed=(Date.now()-t0)/1000;
  if(elapsed<=60 && lvNum>prevLv) firstMinLevels += (lvNum-prevLv);
  prevLv=lvNum;
  if(r.boss && !seenBoss){ seenBoss=true; bossStart=r.time; }
  if(seenBoss && !r.boss && !bossEnd){ bossEnd=r.time; }
  if(elapsed-lastLog>=15){ lastLog=elapsed; const f=await fps(600); console.log(`[${r.time||'--'}] ${r.lv} ${r.kills} HP=${r.hp} fps~${f} boss=${r.boss||'-'} lvup=${r.levelup}`); }
  if(r.dead||r.win){ console.log(`>>> 종료: ${r.dead?'戰死':'天下統一'} @ ${r.time}`); break; }
}
console.log(`요약: 첫60초 레벨업수=${firstMinLevels} | 원소전 시작=${bossStart} 종료=${bossEnd} | errs=${errs.slice(0,2)}`);
await b.close();
