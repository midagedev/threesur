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
await hook('selectHero', 'zhugeliang'); // 낙뢰 무쌍
await hook('setTime', 300);
await clearLevels();
await p.waitForTimeout(500);

// (A) 화약통 폭발 라이팅: 오브젝트 배치 후 근처에서 대기하며 무기 타격 유도
await hook('showWorldObjects');
await p.waitForTimeout(700);
await p.screenshot({ path: OUT + '/lt_objects.png' });

// (B) 무쌍(낙뢰 폭풍) — 지면/적을 번쩍 비추는지
await hook('fillMusou');
await hook('activateMusou');
await p.waitForTimeout(450);
await p.screenshot({ path: OUT + '/lt_musou.png' });
const dMusou = await dbg();

// (C) 유성 이벤트 — 다수 폭발 라이팅
await clearLevels();
await hook('triggerEvent', 'meteor');
await p.waitForTimeout(1300);
await p.screenshot({ path: OUT + '/lt_meteor.png' });

// fps/calls 평균
const frames = [];
for (let i = 0; i < 8; i++) { await p.waitForTimeout(150); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const s = await stats();
console.log(JSON.stringify({
  alive: s.alive,
  musouCalls: dMusou.calls,
  fps: avg('fps'), calls: avg('calls'),
  errs: errs.slice(0, 10),
}, null, 2));
await b.close();
