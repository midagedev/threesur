import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = 'http://localhost:4173/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push('P:' + e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('C:' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.mouse.click(640, 360);
await p.waitForTimeout(1400);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const dbg = () => p.evaluate(() => window.__DEBUG__.info());
const hp = () => p.evaluate(() => { const m = document.body.innerText.match(/(\d+)\s*\/\s*(\d+)/); return m ? +m[1] : null; });
const clr = async () => { for (let i=0;i<60;i++){const s=await stats(); if(s.state!=='levelup')break; await p.keyboard.press('Digit1'); await p.waitForTimeout(40);} };
const rep = {};

// ===== Pass 1: 조준선 + 화살 시인성 + 3중 구분 (invuln, 원거리 밀집) =====
await hook('selectHero', 'huangzhong'); // 연노 사수 계열 — 아군 다수 화살
await hook('setInvulnerable', 999);
await hook('giveWeapon', 'crossbow'); // 아군 금색 화살(적탄과 구분 대조군)
await hook('setTime', 300); // 5:00 — 궁수/책사 혼재
await p.waitForTimeout(2500); await clr();
// 조준선은 사수 윈드업 순간에만 뜸 → 여러 프레임 촬영해 포착
for (let i=0;i<6;i++){ await p.waitForTimeout(280); await clr(); await p.screenshot({ path: `${OUT}/w44_scene_${i}.png` }); }
let s = await stats();
rep.pass1 = { alive: s.alive, enemyProjectiles: s.enemyProjectiles, kinds: s.enemyProjectileKinds };

// ===== Pass 2: 성능(밀집) =====
const frames = [];
for (let i=0;i<10;i++){ await p.waitForTimeout(120); frames.push(await dbg()); }
rep.fps = Math.round(frames.reduce((a,x)=>a+x.fps,0)/frames.length);
rep.calls = Math.round(frames.reduce((a,x)=>a+x.calls,0)/frames.length);

// ===== Pass 3: 회피 evidence — 정지 vs 수직 스트레이프 HP 손실 (invuln OFF) =====
async function measureLoss(strafe) {
  await hook('selectHero', 'huangzhong');
  await hook('setInvulnerable', 0); // 무적 해제
  await hook('setTime', 300);
  await p.waitForTimeout(1500); await clr();
  const h0 = await hp();
  const t0 = Date.now();
  // 6초 관측
  while (Date.now() - t0 < 6000) {
    if (strafe) { await p.keyboard.down('ArrowUp'); await p.waitForTimeout(360); await p.keyboard.up('ArrowUp'); await p.keyboard.down('ArrowDown'); await p.waitForTimeout(360); await p.keyboard.up('ArrowDown'); }
    else { await p.waitForTimeout(360); }
    await clr();
  }
  const h1 = await hp();
  return { h0, h1, loss: (h0 != null && h1 != null) ? h0 - h1 : null };
}
rep.stationary = await measureLoss(false);
rep.strafe = await measureLoss(true);

rep.totalErrs = errs.length;
rep.errSample = errs.slice(0, 8);
console.log(JSON.stringify(rep, null, 2));
await b.close();
