import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
const p = await ctx.newPage();
const errs = [];
p.on('pageerror', (e) => errs.push(e.message.slice(0, 60)));
await p.goto('http://localhost:4173/threesur/', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1800);
// 타이틀 화면 더블탭 (줌 유발 지점)
await p.touchscreen.tap(195, 300); await p.waitForTimeout(120); await p.touchscreen.tap(195, 300);
await p.waitForTimeout(400);
const vv = await p.evaluate(() => ({ scale: window.visualViewport?.scale ?? 1 }));
// 게임 진입 후 첫 터치 이동 회귀 확인
await p.evaluate(() => window.__GAME_TEST__?.selectHero?.('zhaoyun'));
await p.waitForTimeout(600);
const before = await p.evaluate(() => { const s = window.__GAME_TEST__?.stats; return s ? { x: 0 } : null; });
await p.touchscreen.tap(100, 700); // 조이스틱 존 탭
await p.waitForTimeout(300);
console.log(JSON.stringify({ viewportScale: vv.scale, errs: errs.slice(0, 2) }));
await b.close();
