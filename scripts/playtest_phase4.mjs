import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = 'http://localhost:5188/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(1800);

const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const clearLevels = async () => {
  for (let i = 0; i < 50; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1');
    await p.waitForTimeout(70);
  }
};
const shot = (n) => p.screenshot({ path: `${OUT}/${n}` });

// 크라우드 준비 헬퍼: 보스 없이 시간 점프 + 무기 지급 + 잠깐 대기
async function buildCrowd(weapons) {
  await hook('setBossFlags', true, true, true);
  for (const w of weapons) await hook('giveWeapon', w);
  await hook('setTime', 160);
  await p.keyboard.down('d');
  await p.waitForTimeout(2600);
  await p.keyboard.up('d');
  await clearLevels();
}

// === 장수별 무쌍 5종 ===
const musouCases = [
  ['guanyu', 'p4_musou_guanyu.png'],
  ['zhangfei', 'p4_musou_zhangfei.png'],
  ['zhugeliang', 'p4_musou_zhuge.png'],
  ['huangzhong', 'p4_musou_huang.png'],
  ['lvbu', 'p4_musou_lvbu.png'],
];
for (const [hero, file] of musouCases) {
  await hook('selectHero', hero);
  await p.waitForTimeout(200);
  await buildCrowd(['thunder']);
  await hook('activateMusou');
  await p.waitForTimeout(380);
  await shot(file);
}

// === 전장 이벤트 3종 (한 런에서) ===
await hook('selectHero', 'zhaoyun');
await buildCrowd(['guandao', 'crossbow']);
await hook('triggerEvent', 'rush');
await p.waitForTimeout(1600);
await clearLevels();
await shot('p4_rush.png');
await hook('triggerEvent', 'meteor');
await p.waitForTimeout(1200);
await clearLevels();
await shot('p4_meteor.png');
await hook('triggerEvent', 'cart');
await p.waitForTimeout(500);
await shot('p4_cart.png');
const evStats = await stats();

// === 저주 유물 카드 ===
await hook('forceRelic');
await p.waitForTimeout(500);
await shot('p4_relic.png');
await clearLevels();

// === 무한 모드 ===
await hook('enterEndless');
await p.waitForTimeout(400);
await hook('setTime', 720); // 12분 → HP 가속
await p.keyboard.down('a');
await p.waitForTimeout(2200);
await p.keyboard.up('a');
await clearLevels();
await shot('p4_endless.png');
const endStats = await stats();

// === 공유 카드 흐름 (사망 → 결과 → 전과 공유) ===
await hook('killPlayer');
await p.waitForTimeout(900);
await shot('p4_result.png');
// "전과 공유" 버튼 클릭
const clicked = await p.evaluate(() => {
  const btns = Array.from(document.querySelectorAll('button, .btn, div'));
  const b = btns.find((e) => (e.textContent || '').includes('전과 공유'));
  if (b) { b.click(); return true; }
  return false;
});
await p.waitForTimeout(500);
await shot('p4_share.png');

console.log(JSON.stringify({
  events: { relics: evStats.relics, state: evStats.state },
  endless: { time: endStats.time, endless: endStats.endless, alive: endStats.alive, relics: endStats.relics },
  shareBtnClicked: clicked,
  errs: errs.slice(0, 10),
}, null, 2));
await b.close();
