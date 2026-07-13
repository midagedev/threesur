import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport:{width:1280,height:720} });
p.on('pageerror', e=>console.log('ERR', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil:'networkidle' });
await p.waitForTimeout(700);
const info = await p.evaluate(() => {
  const gt = window.__GAME_TEST__ || {};
  const keys = Object.keys(gt);
  const stats = gt.stats || null;
  // HUD hp 텍스트 요소 탐색
  const hp = Array.from(document.querySelectorAll('div')).map(d=>d.textContent).find(t=>t&&/^\d+ \/ \d+$/.test(t.trim()));
  const save = localStorage.getItem('threesur-save-v1');
  return { keys, statsKeys: stats?Object.keys(stats):null, sampleStats: stats, hudHp: hp||null, hasSave: !!save };
});
console.log('GAME_TEST keys:', JSON.stringify(info.keys));
console.log('stats keys:', JSON.stringify(info.statsKeys));
console.log('hudHp(title):', info.hudHp, ' save존재:', info.hasSave);
await b.close();
