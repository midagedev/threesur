import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(700);
console.log('타이틀 혼잣말:', await p.evaluate(() => document.querySelector('.title-quote')?.textContent || null));
await p.screenshot({ path: OUT + '/p3_title_quote.png' });

await p.getByText('출진 出陣', { exact: true }).click();
await p.waitForTimeout(500);
const hq = await p.evaluate(() => Array.from(document.querySelectorAll('.hero-quote')).map(e=>e.textContent));
console.log('장수 대사 수:', hq.length);
await p.screenshot({ path: OUT + '/p3_select_quote.png' });

// 조운 선택 → 잠깐 플레이 → 사망 유도 → 결과(무한 프롬프트 없음)
await p.locator('.hero-card').first().click();
await p.waitForTimeout(1200);
await p.evaluate(() => window.__GAME_TEST__?.killPlayer?.());
await p.waitForTimeout(1200);
const scene = await p.evaluate(() => window.__GAME_TEST__?.scene);
const rq = await p.evaluate(() => document.querySelector('.result-quote')?.textContent || null);
console.log('사망 후 씬:', scene, '| 결과 대사:', rq);
await p.screenshot({ path: OUT + '/p3_result_quote.png' });
await b.close();
