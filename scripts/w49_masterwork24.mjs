import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = 'http://localhost:5196/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push('P:' + e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('C:' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.mouse.click(640, 360);
await p.waitForTimeout(1400);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const hpMax = async () => p.evaluate(() => {
  const m = document.body.innerText.match(/(\d+)\s*\/\s*(\d+)/);
  return m ? Number(m[2]) : null;
});
const readSave = () => p.evaluate(() => { try { return JSON.parse(localStorage.getItem('threesur-save-v1')); } catch { return null; } });
// 카드에 표시된 명기 이름들을 읽는다(3택 캡처).
const cardTitles = () => p.evaluate(() => Array.from(document.querySelectorAll('.lvl-card .lc-title, .card-title, .lvl-card')).map(e => e.textContent.trim()).filter(Boolean).slice(0, 12));
const clr = async () => { for (let i=0;i<80;i++){const s=await stats(); if(s.state!=='levelup')break; await p.keyboard.press('Digit1'); await p.waitForTimeout(45);} };

const report = { seenCardTitles: new Set() };

// ── 세팅: 관우 런, 무적, 안전 시점
await hook('selectHero', 'guanyu');
await hook('setInvulnerable', 999);
await hook('setTime', 90);
await p.waitForTimeout(800); await clr();
const baseHpMax = await hpMax();
report.baseHpMax = baseHpMax;

// ── 명기 3택 강제 → 첫 카드 스샷(신규 명기 표기 확인)
await hook('treasure', true);
await p.waitForTimeout(500);
let s = await stats();
report.firstDrawState = s.state; // 'levelup' 기대
await p.screenshot({ path: `${OUT}/w49_card_first.png` });
// 카드 텍스트 수집
{
  const html = await p.evaluate(() => document.querySelector('.overlay, #overlay, body')?.innerText || '');
  report.firstCardText = html.split('\n').filter(Boolean).slice(0, 40);
}
await p.keyboard.press('Digit1');
await p.waitForTimeout(400);
s = await stats();
report.afterPickState = s.state; // 'play' 기대
await p.screenshot({ path: `${OUT}/w49_acquire_fx.png` });

// ── 전량 획득 루프: 24종 모두 취득 시도(미보유 풀 소진 → 폴백 보상)
let masterworkDraws = 0;
for (let i = 0; i < 40; i++) {
  s = await stats();
  if (s.state === 'play') await hook('treasure', true);
  await p.waitForTimeout(180);
  s = await stats();
  if (s.state === 'levelup') {
    masterworkDraws++;
    // 카드 타이틀 수집
    const txt = await p.evaluate(() => document.querySelector('.overlay, #overlay, body')?.innerText || '');
    txt.split('\n').map(x=>x.trim()).filter(Boolean).forEach(x=>report.seenCardTitles.add(x));
    await p.keyboard.press('Digit1');
    await p.waitForTimeout(120);
  }
  await clr();
  const sv = await readSave();
  if (sv && sv.masterworks && sv.masterworks.length >= 24) break;
}
report.masterworkDraws = masterworkDraws;
report.hpMaxAfterAll = await hpMax();

// ── 저장 영속: 런 종료 후 localStorage
await hook('killPlayer');
await p.waitForTimeout(1400);
const save = await readSave();
report.savedMasterworkCount = save ? (save.masterworks||[]).length : 'NO_SAVE';
report.savedMasterworks = save ? save.masterworks : [];

// ── 도감 24종 레이아웃 확인
await hook('goToTitle');
await p.waitForTimeout(400);
await hook('openShop', 'codex');
await p.waitForTimeout(700);
await p.screenshot({ path: `${OUT}/w49_codex.png`, fullPage: false });
// mw 도감 헤더 텍스트(“x/24”) + 그리드 셀 수 + 가로 오버플로 여부
report.codex = await p.evaluate(() => {
  const hint = Array.from(document.querySelectorAll('.controls-hint')).map(e=>e.textContent).find(t=>/名器/.test(t)) || null;
  const cells = document.querySelectorAll('.mw-grid .mw-cell').length;
  const grid = document.querySelector('.mw-grid');
  const overflowX = document.documentElement.scrollWidth > document.documentElement.clientWidth;
  const screen = document.querySelector('.overlay .screen');
  return { hint, cells, gridCols: grid ? getComputedStyle(grid).gridTemplateColumns.split(' ').length : 0, overflowX, screenScrollH: screen?screen.scrollHeight:0, screenClientH: screen?screen.clientHeight:0 };
});
// 도감 하단까지 스크롤해 마지막 셀도 렌더되는지
await p.evaluate(() => { const s=document.querySelector('.overlay .screen'); if(s) s.scrollTop = s.scrollHeight; });
await p.waitForTimeout(400);
await p.screenshot({ path: `${OUT}/w49_codex_bottom.png` });

report.seenCardTitles = Array.from(report.seenCardTitles).filter(t=>/名|器|삭|환수|각궁|양당|찰갑|자수|은인|구장|사마|병법|백옥|쌍환|矟|環|角|裲|札|紫|銀|九|司|兵|白|雙/.test(t));
report.totalErrs = errs.length;
report.errSample = errs.slice(0, 12);
console.log(JSON.stringify(report, null, 2));
await b.close();
