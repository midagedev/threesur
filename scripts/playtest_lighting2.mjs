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
await hook('selectHero', 'guanyu'); // 무쌍 오버레이 없는 근접형
await hook('setTime', 420); // 밀집
await clearLevels();
await p.waitForTimeout(1200); // 적 밀집 형성
await hook('setInvulnerable', 30);
// 유성우: 다수 폭발이 지면·적을 비추는 순간을 연속 캡처
await hook('triggerEvent', 'meteor');
for (let i = 0; i < 6; i++) {
  await p.waitForTimeout(230);
  await p.screenshot({ path: `${OUT}/lt2_${i}.png` });
}
const frames = [];
for (let i = 0; i < 6; i++) { await p.waitForTimeout(140); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const s = await stats();
console.log(JSON.stringify({ alive: s.alive, fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 8) }, null, 2));
await b.close();
