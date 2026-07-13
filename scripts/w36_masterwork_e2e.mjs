import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = 'http://localhost:4173/threesur/';
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
const hpText = () => p.evaluate(() => {
  const m = document.body.innerText.match(/(\d+)\s*\/\s*(\d+)/);
  return m ? m[0] : null;
});
const readSave = () => p.evaluate(() => { try { return JSON.parse(localStorage.getItem('threesur-save-v1')); } catch { return null; } });
const clr = async () => { for (let i=0;i<60;i++){const s=await stats(); if(s.state!=='levelup')break; await p.keyboard.press('Digit1'); await p.waitForTimeout(45);} };

const report = {};

// ============ Test 1: killBoss 통합 경로 ============
await hook('selectHero', 'guanyu');
await hook('setInvulnerable', 999);
await hook('setTime', 179);
await p.waitForTimeout(2500); await clr(); // 보스 스폰 대기 + 원군/시네마틱 정리
let s = await stats();
report.bossSpawned = s.bossActive;
const killsBefore = s.kills;
await hook('killBoss');
await p.waitForTimeout(500);
s = await stats();
report.killBoss = { bossActiveAfter: s.bossActive, killsDelta: s.kills - killsBefore };

// ============ Test 2: 명기 3택 카드 + 획득 + owned-exclusion ============
await hook('selectHero', 'guanyu'); // 새 런(깨끗한 상태)
await hook('setInvulnerable', 999);
await hook('setTime', 90);
await p.waitForTimeout(800); await clr();
report.hpBaseline = await hpText();
// 보스 보물 픽업 시뮬 → 명기 3택 카드
await hook('treasure', true);
await p.waitForTimeout(500);
s = await stats();
report.cardState = s.state; // 'levelup' 기대
await p.screenshot({ path: `${OUT}/w36_card_1.png` });
await p.keyboard.press('Digit1'); // 선택
await p.waitForTimeout(400);
s = await stats();
report.afterPick1State = s.state; // 'play' 기대
await p.screenshot({ path: `${OUT}/w36_acquire_fx.png` }); // 금빛 문장 연출
// 두 번째 드로우 → owned-exclusion 확인용 스샷
await hook('treasure', true);
await p.waitForTimeout(500);
await p.screenshot({ path: `${OUT}/w36_card_2.png` });
await p.keyboard.press('Digit1');
await p.waitForTimeout(300); await clr();

// ============ Test 3: 명기 전량 획득 → maxHp 반영(옥결 +12%) ============
for (let i = 0; i < 14; i++) {
  s = await stats();
  if (s.state === 'play') await hook('treasure', true);
  await p.waitForTimeout(250);
  await p.keyboard.press('Digit1');
  await p.waitForTimeout(120);
  await clr();
}
report.hpAfterAll = await hpText(); // 옥결 maxHpMul ×1.12 반영 기대
report.errsMid = errs.length;

// ============ Test 4: 진화 우선(명기 카드 미출현) ============
await hook('selectHero', 'guanyu');
await hook('setInvulnerable', 999);
await hook('setTime', 90);
await p.waitForTimeout(700); await clr();
await hook('giveWeapon', 'guandao'); // Lv8
await hook('givePassive', 'armor', 5); // guandao+armor → zhanma
await p.waitForTimeout(200); await clr();
await hook('treasure', true); // 보스 보물: 진화 가능 → 진화 상자 우선
await p.waitForTimeout(500);
s = await stats();
report.evoCase = { state: s.state, weapons: s.weapons.filter(w=>w.startsWith('zhanma')||w.startsWith('guandao')) };

// ============ Test 5: 영속(localStorage) ============
await hook('selectHero', 'guanyu');
await hook('setInvulnerable', 999);
await hook('setTime', 90);
await p.waitForTimeout(600); await clr();
await hook('treasure', true); await p.waitForTimeout(300); await p.keyboard.press('Digit1'); await p.waitForTimeout(200); await clr();
await hook('killPlayer'); // 런 종료 → onRunEnd → writeSave
await p.waitForTimeout(1200);
const save = await readSave();
report.savedMasterworks = save ? save.masterworks : 'NO_SAVE';

report.totalErrs = errs.length;
report.errSample = errs.slice(0, 10);
console.log(JSON.stringify(report, null, 2));
await b.close();
