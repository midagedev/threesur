import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const log=(...a)=>console.log(...a);
const hpOf = (p)=>p.evaluate(()=>{const t=Array.from(document.querySelectorAll('div')).map(d=>d.textContent).find(x=>x&&/^\d+ \/ \d+$/.test((x||'').trim()));if(!t)return null;const [a,c]=t.trim().split(' / ').map(Number);return {hp:a,max:c};});
const st = (p)=>p.evaluate(()=>window.__GAME_TEST__?.stats);
const scene=(p)=>p.evaluate(()=>window.__GAME_TEST__?.scene);
async function enterRun(p){ for(let a=0;a<6;a++){ if(await scene(p)==='run')return true; const s=await scene(p); if(s==='title'){await p.getByText('출진 出陣',{exact:true}).click().catch(()=>{});await p.waitForTimeout(400);} await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(600);} return (await scene(p))==='run'; }

// ── 케이스 1: 일시정지 중 무쌍 입력 ──
{ const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
  await enterRun(p);
  await p.evaluate(()=>window.__GAME_TEST__.fillMusou()); await p.waitForTimeout(100);
  const before=await st(p);
  await p.keyboard.press('Escape'); await p.waitForTimeout(200);
  const paused=await st(p); const sc1=await scene(p);
  await p.keyboard.press('Space'); await p.waitForTimeout(300);
  const afterSpace=await st(p);
  await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  const resumed=await st(p);
  log('C1 일시정지중무쌍: gaugeBefore=%s pausedState=%s scene=%s | Space후 musouGauge=%s state=%s | resume후 musouGauge=%s state=%s | errs=%s',
    before.musou.toFixed(0), paused.state, sc1, afterSpace.musou.toFixed(0), afterSpace.state, resumed.musou.toFixed(0), resumed.state, errs.slice(0,2));
  await p.close(); }

// ── 케이스 2: 레벨업 카드 열린 채 보스 등장 ──
{ const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
  await enterRun(p);
  await p.evaluate(()=>window.__GAME_TEST__.levelUp()); await p.waitForTimeout(300);
  const luOpen=await st(p);
  await p.evaluate(()=>window.__GAME_TEST__.spawnBoss('yuanshao')); await p.waitForTimeout(400);
  const withBoss=await st(p);
  await p.keyboard.press('Digit1'); await p.waitForTimeout(400);
  const afterPick=await st(p);
  log('C2 레벨업중보스: luState=%s | 보스스폰후 state=%s bossActive=%s | 카드선택후 state=%s bossActive=%s | errs=%s',
    luOpen.state, withBoss.state, withBoss.bossActive, afterPick.state, afterPick.bossActive, errs.slice(0,2));
  await p.close(); }

// ── 케이스 3: 부활 직후 재사망 ──
{ const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
  // 부활 메타 구매
  await p.evaluate(()=>{window.__GAME_TEST__.grantGold(3000);window.__GAME_TEST__.buyUpgrade('revive');});
  const saveRevive=await p.evaluate(()=>window.__GAME_TEST__.save.upgrades);
  await enterRun(p);
  await p.evaluate(()=>window.__GAME_TEST__.setTime(120)); // 밀도↑
  // 가만히 서서 접촉 피해로 사망 유도, hp/상태 폴링
  let reviveSeen=false, deaths=0, prevHp=999, ended=false;
  for(let i=0;i<50;i++){ const h=await hpOf(p); const s=await st(p);
    if(h){ if(prevHp<=2 && h.hp> h.max*0.3) { reviveSeen=true; } prevHp=h.hp; }
    if(s.state==='dead'||s.state==='victory'||await scene(p)==='result'){ ended=true; break; }
    await p.waitForTimeout(400);
  }
  log('C3 부활재사망: reviveUpgrade=%s | reviveSeen(HP반등)=%s | endedToResult=%s scene=%s | errs=%s',
    JSON.stringify(saveRevive), reviveSeen, ended, await scene(p), errs.slice(0,2));
  await p.close(); }

// ── 케이스 4: 음소거 상태 유지(새로고침) ──
{ const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
  await p.goto('http://localhost:5188/threesur/',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
  // 타이틀의 음소거 버튼(🔊/🔇) 클릭
  const clicked = await p.evaluate(()=>{ const btn=Array.from(document.querySelectorAll('button')).find(b=>/🔊|🔇/.test(b.textContent||'')); if(!btn)return null; btn.click(); return btn.textContent; });
  await p.waitForTimeout(200);
  const mutedAfterClick = await p.evaluate(()=>{ try{return JSON.parse(localStorage.getItem('threesur-save-v1')).muted;}catch(e){return 'noSave';} });
  await p.reload({waitUntil:'networkidle'}); await p.waitForTimeout(700);
  const mutedAfterReload = await p.evaluate(()=>{ try{return JSON.parse(localStorage.getItem('threesur-save-v1')).muted;}catch(e){return 'noSave';} });
  const btnGlyph = await p.evaluate(()=>{ const btn=Array.from(document.querySelectorAll('button')).find(b=>/🔊|🔇/.test(b.textContent||'')); return btn?btn.textContent:null; });
  log('C4 음소거유지: 클릭후glyph=%s savedMuted=%s | 새로고침후 savedMuted=%s 버튼glyph=%s | errs=%s',
    clicked, mutedAfterClick, mutedAfterReload, btnGlyph, errs.slice(0,2));
  await p.close(); }

await b.close();
