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
  for (let i = 0; i < 90; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(48);
  }
};
await hook('selectHero', 'zhugeliang'); // 부적 + 낙뢰 무쌍
await hook('setTime', 220);
await clearLevels();
await hook('setInvulnerable', 200);
await p.waitForTimeout(900);
await clearLevels();
// (A) 팔랑이는 부적 — 여러 프레임
for (let i = 0; i < 4; i++) { await p.waitForTimeout(120); await p.screenshot({ path: `${OUT}/p2_tal${i}.png` }); }
// (B) 낙뢰 무쌍 — 지면/적 수광 + 볼류메트릭 볼트
await hook('fillMusou'); await hook('activateMusou');
for (let i = 0; i < 5; i++) { await p.waitForTimeout(160); await p.screenshot({ path: `${OUT}/p2_bolt${i}.png` }); }
// (C) 300+ 밀집 성능
await clearLevels();
await hook('setTime', 545);
await p.waitForTimeout(1400);
await clearLevels();
await p.screenshot({ path: `${OUT}/p2_dense.png` });
const frames = [];
for (let i = 0; i < 12; i++) { await p.waitForTimeout(110); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const mx = (k) => Math.max(...frames.map((x) => x[k]));
const s = await stats();
console.log(JSON.stringify({ alive: s.alive, fps: avg('fps'), minFps: Math.min(...frames.map(f=>f.fps)), calls: avg('calls'), maxCalls: mx('calls'), errs: errs.slice(0, 8) }, null, 2));
await b.close();
