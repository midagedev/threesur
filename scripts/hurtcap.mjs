import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const clr = async () => { for (let i = 0; i < 80; i++) { const s = await stats(); if (s.state !== 'levelup') break; await p.keyboard.press('Digit1'); await p.waitForTimeout(40); } };
await hook('selectHero', 'guanyu');
await hook('setTime', 90);
await clr();
// (1) 단발 피격 → 붉은 비네트 + 플레이어 붉은 틴트
await hook('setInvulnerable', 0);
await hook('damagePlayer', 45);
await p.waitForTimeout(90);
await p.screenshot({ path: `${OUT}/hurt_flash.png` });
// (2) 반복 피격으로 저체력 → 상시 붉은 비네트 + 심박
for (let i = 0; i < 6; i++) { await hook('setInvulnerable', 0); await hook('damagePlayer', 12); await p.waitForTimeout(60); }
await p.waitForTimeout(400);
await p.screenshot({ path: `${OUT}/hurt_lowhp.png` });
const s = await stats();
console.log(JSON.stringify({ hp: s.hp, errs: errs.slice(0, 5) }));
await b.close();
