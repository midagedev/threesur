import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(700);
await p.screenshot({ path: OUT + '/p3_title_quote.png' });
const tq = await p.evaluate(() => document.querySelector('.title-quote')?.textContent || null);
console.log('타이틀 혼잣말:', tq);

await p.getByText('출진 出陣', { exact: true }).click();
await p.waitForTimeout(500);
await p.screenshot({ path: OUT + '/p3_select_quote.png' });
const hq = await p.evaluate(() => Array.from(document.querySelectorAll('.hero-quote')).map(e=>e.textContent));
console.log('장수 대사 수:', hq.length, '예:', hq[0]);

// 조운 선택 → 승리 강제 → 결과 대사
await p.locator('.hero-card').first().click();
await p.waitForTimeout(600);
await p.evaluate(() => window.__GAME_TEST__.setTime(600));
await p.waitForTimeout(600);
await p.screenshot({ path: OUT + '/p3_result_quote.png' });
const rq = await p.evaluate(() => document.querySelector('.result-quote')?.textContent || null);
console.log('결과 대사:', rq);
await b.close();
