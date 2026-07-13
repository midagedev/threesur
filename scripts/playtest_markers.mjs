import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('c:' + m.text()); });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1600);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const dbg = () => p.evaluate(() => window.__DEBUG__.info());
const clearLevels = async () => {
  for (let i = 0; i < 60; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(55);
  }
};
await hook('selectHero', 'zhaoyun');
await hook('setTime', 120);
await clearLevels();

// (A) 전장 오브젝트 4종을 플레이어 주변에 배치 → 글로우/이름표/근접 힌트/상시 이펙트 확인
await hook('showWorldObjects');
await p.waitForTimeout(1300); // 김/불티/향연기 누적
const sObj = await stats();
await p.screenshot({ path: OUT + '/mk_objects.png' });
const dObj = await dbg();

// (B) 봉화대 랜드마크 근처로 이동 → 글로우 + 불티 + 이름표
await hook('setPlayerPosition', 14, 0.5);
await p.waitForTimeout(1200);
await p.screenshot({ path: OUT + '/mk_landmark.png' });
const dLm = await dbg();

// (C) 원점 부근 광각 — 여러 랜드마크가 오픈필드에 흩어진 모습
await hook('setPlayerPosition', 0, 0);
await p.waitForTimeout(900);
await p.screenshot({ path: OUT + '/mk_field.png' });
const sField = await stats();

// fps/draw-call 평균
const frames = [];
for (let i = 0; i < 8; i++) { await p.waitForTimeout(150); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);

console.log(JSON.stringify({
  landmarks: sField.map ? sField.map.landmarks : 'n/a',
  openFieldWalls: sField.map ? sField.map.walls : 'n/a',
  colliders: sField.map ? sField.map.colliders : 'n/a',
  worldObjects: sObj.worldObjects,
  callsWithObjects: dObj.calls,
  callsAtLandmark: dLm.calls,
  fps: avg('fps'), calls: avg('calls'),
  errs: errs.slice(0, 8),
}, null, 2));
await b.close();
