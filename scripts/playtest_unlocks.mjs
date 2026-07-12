import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const URL = process.env.URL || 'http://localhost:5188/threesur/';
const OUT = process.env.OUT || '/private/tmp/threesur-unlock-qa';
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--use-angle=metal'] });
const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await context.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
});

async function openSelect() {
  await page.getByText('출진 出陣', { exact: true }).click();
  await page.waitForTimeout(250);
}

const readCards = () => page.evaluate(() =>
  Array.from(document.querySelectorAll('.hero-card')).map((card) => ({
    name: card.querySelector('.hero-name')?.textContent?.trim() ?? '',
    locked: card.classList.contains('locked'),
    lockText: card.querySelector('.hero-lock')?.textContent?.trim() ?? '',
  })),
);

await page.goto(URL, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.removeItem('threesur-save-v1'));
await page.reload({ waitUntil: 'networkidle' });
await openSelect();
const fresh = await readCards();
await page.screenshot({ path: `${OUT}/fresh-desktop.png` });

const freshUnlocked = fresh.filter((x) => !x.locked).map((x) => x.name);
if (freshUnlocked.join('|') !== '조운趙雲|관우關羽') {
  throw new Error(`새 저장 초기 장수 오류: ${freshUnlocked.join(', ')}`);
}
const zhugeFresh = fresh.find((x) => x.name.startsWith('제갈량'));
if (!zhugeFresh?.locked || !zhugeFresh.lockText.includes('동탁')) {
  throw new Error(`제갈량 잠금 조건 오류: ${JSON.stringify(zhugeFresh)}`);
}
await page.locator('.hero-card').filter({ hasText: '제갈량' }).click();
await page.waitForTimeout(150);
const sceneAfterLockedClick = await page.evaluate(() => window.__GAME_TEST__.scene);
if (sceneAfterLockedClick !== 'select') throw new Error('잠긴 제갈량 카드로 런에 진입함');

await page.evaluate(() => {
  localStorage.setItem('threesur-save-v1', JSON.stringify({
    version: 1,
    gold: 0,
    upgrades: {},
    lvbuUnlocked: false,
    muted: true,
    best: { time: 180, kills: 80, level: 8, combo: 40 },
    bosses: ['yuanshao', 'dongzhuo'],
    achievements: [],
    totalKills: 100,
    totalWins: 0,
  }));
});
await page.reload({ waitUntil: 'networkidle' });
await openSelect();
const progressed = await readCards();
await page.screenshot({ path: `${OUT}/progressed-desktop.png` });
const progressedUnlocked = progressed.filter((x) => !x.locked).map((x) => x.name);
if (progressedUnlocked.join('|') !== '조운趙雲|관우關羽|장비張飛|제갈량諸葛亮|황충黃忠') {
  throw new Error(`진행 저장 해금 오류: ${progressedUnlocked.join(', ')}`);
}
const lvbu = progressed.find((x) => x.name.startsWith('여포'));
if (!lvbu?.locked || !lvbu.lockText.includes('5000')) throw new Error('여포 골드 잠금이 사라짐');

// 결과 화면에서 새 해금 피드백이 즉시 보이는지 확인(황충: 최고 생존 3분).
await page.evaluate(() => {
  localStorage.setItem('threesur-save-v1', JSON.stringify({
    version: 1,
    gold: 0,
    upgrades: {},
    lvbuUnlocked: false,
    muted: true,
    best: { time: 179, kills: 0, level: 1, combo: 0 },
    bosses: [],
    achievements: [],
    totalKills: 0,
    totalWins: 0,
  }));
});
await page.reload({ waitUntil: 'networkidle' });
await openSelect();
await page.locator('.hero-card').filter({ hasText: '조운' }).click();
await page.waitForTimeout(200);
await page.evaluate(() => {
  window.__GAME_TEST__.setBossFlags(true, true, true);
  window.__GAME_TEST__.setTime(180);
  window.__GAME_TEST__.killPlayer();
});
await page.waitForTimeout(700);
const unlockToast = await page.locator('.hero-unlock-toast').textContent();
if (!unlockToast?.includes('황충')) throw new Error(`결과 해금 피드백 오류: ${unlockToast}`);
await page.screenshot({ path: `${OUT}/unlock-result.png` });
if (errors.length) throw new Error(`브라우저 오류: ${errors.join(' | ')}`);

await context.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const mobilePage = await mobile.newPage();
await mobilePage.goto(URL, { waitUntil: 'networkidle' });
await mobilePage.evaluate(() => localStorage.removeItem('threesur-save-v1'));
await mobilePage.reload({ waitUntil: 'networkidle' });
await mobilePage.getByText('출진 出陣', { exact: true }).click();
await mobilePage.waitForTimeout(250);
await mobilePage.screenshot({ path: `${OUT}/fresh-mobile.png` });
await mobile.close();

await browser.close();
console.log(JSON.stringify({ fresh, progressed, sceneAfterLockedClick, unlockToast, errors }, null, 2));
