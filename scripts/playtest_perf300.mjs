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
    await p.keyboard.press('Digit1'); await p.waitForTimeout(45);
  }
};
await hook('selectHero', 'zhangfei'); // 근접형(광역 즉시 소탕 약함 → 포위 유지)
await hook('enterEndless');
await hook('setTime', 700); // 무한 스케일로 대량 스폰
await clearLevels();
await hook('setInvulnerable', 300);
// 밀집이 쌓일 시간
let peak = { alive: 0 };
for (let i = 0; i < 30; i++) {
  await p.waitForTimeout(160);
  await clearLevels();
  const s = await stats();
  const d = await dbg();
  if (s.alive > peak.alive) peak = { alive: s.alive, fps: d.fps, calls: d.calls };
  if (i === 20) await p.screenshot({ path: `${OUT}/perf300.png` });
}
console.log(JSON.stringify({ peak, errs: errs.slice(0, 6) }, null, 2));
await b.close();
