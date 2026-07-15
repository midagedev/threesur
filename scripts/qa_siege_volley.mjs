// 표적 검증: (1) 점령 시 명기 3택 카드 오픈(state==='levelup') (2) 수성 중 볼리 발화(events.volley>=1)
import { chromium } from '@playwright/test';
const PORT = process.env.PORT || 5193;
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto(`http://localhost:${PORT}/threesur/`, { waitUntil: 'networkidle' });
await p.waitForTimeout(1200);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => { const s = window.__GAME_TEST__.stats; return { state: s.state, siege: s.siege, hp: s.hp }; });

await hook('selectHero', 'guanyu'); await p.waitForTimeout(400);
await hook('setInvulnerable', 9999);
await hook('setTime', 90);
await hook('setPlayerPosition', 0, -24); await p.waitForTimeout(400);
await hook('siegeBreach', 'castle-s'); await p.waitForTimeout(200);
await hook('setPlayerPosition', 0, -34); await p.waitForTimeout(300);
await hook('siegeForceLord'); await p.waitForTimeout(300);
await hook('killBoss'); await p.waitForTimeout(500);
const afterCapture = await stats(); // 기대: state==='levelup' (명기 3택)

// 카드 선택(1번) 후 수성 개전
for (let i = 0; i < 40; i++) { const st = await stats(); if (st.state !== 'levelup') break; await p.keyboard.press('Digit1'); await p.waitForTimeout(60); }
const afterPick = await stats();
await hook('siegeForceCounter'); await p.waitForTimeout(200);
// 성내에서 12초 대기 → 볼리 최소 1회(타이머 2~4s 첫발 + 8~11s 간격)
await hook('setPlayerPosition', 0, -34);
for (let i = 0; i < 12; i++) { await p.waitForTimeout(1000); await hook('setPlayerPosition', 0, -34); }
const underSiege = await stats();
console.log(JSON.stringify({
  captureOpensCards: afterCapture.state === 'levelup',
  afterPickState: afterPick.state,
  volleyCount: underSiege.siege.events.volley,
  siegeState: underSiege.siege.state,
  fallGauge: underSiege.siege.fallGauge,
  errs: errs.slice(0, 4),
}, null, 2));
await b.close();
