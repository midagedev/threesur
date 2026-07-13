import { chromium } from '@playwright/test';
const URL = process.env.URL || 'http://localhost:5188/threesur/';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', e => errs.push(e.message));
p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(2500);
await p.screenshot({ path: OUT + '/dc_title.png' });
// 타이틀 → 출진
await p.getByText('출진 出陣').first().click().catch(() => p.mouse.click(640, 386));
await p.waitForTimeout(800);
await p.screenshot({ path: OUT + '/dc_select.png' });
// 장수 선택: 조운 카드 클릭
await p.getByText('조운').first().click().catch(() => {});
await p.waitForTimeout(500);
// 출진 확정 버튼이 있으면 클릭
const btn = p.getByText(/출진|시작/).first();
await btn.click().catch(() => {});
await p.waitForTimeout(1500);
// 25초 플레이 (원형 카이팅), 레벨업 카드는 1키
const keys = ['w', 'd', 's', 'a'];
for (let i = 0; i < 12; i++) {
  await p.keyboard.down(keys[i % 4]);
  await p.waitForTimeout(900);
  await p.keyboard.up(keys[i % 4]);
  await p.keyboard.press('Digit1').catch(() => {});
}
await p.screenshot({ path: OUT + '/dc_play.png' });
const hud = await p.evaluate(() => Array.from(document.querySelectorAll('div')).map(d => d.textContent).filter(t => t && (/^\d\d:\d\d$/.test(t) || /^처치 \d+$/.test(t))).slice(0, 4));
console.log(JSON.stringify({ hud, errs: errs.slice(0, 6) }));
await b.close();
