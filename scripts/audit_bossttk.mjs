import { chromium } from '@playwright/test';
const URL = process.env.URL || 'http://localhost:5189/threesur/';
const OUT = process.env.OUT;
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1800);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const hpText = () => p.evaluate(() => { const m = (document.body.textContent || '').match(/(\d+)\s*\/\s*(\d+)/); return m ? [+m[1], +m[2]] : null; });
const clearLevels = async () => { for (let i = 0; i < 40; i++) { const s = await stats(); if (s.state !== 'levelup') break; await p.keyboard.press('Digit1'); await p.waitForTimeout(25); } };

// 대표 보스 6패턴 (name, pattern, 대표 등장 시각초, 표기 HP)
const bosses = [
  ['yuanshao', 'fan', 180, 8000],
  ['xiahoudun', 'dash', 180, 9000],
  ['sunce', 'rush', 200, 8500],
  ['dongzhuo', 'firezone', 360, 22000],
  ['simayi', 'delaybolt', 360, 20000],
  ['lvbu', 'lvbu', 540, 46000],
];
const results = [];
for (const [type, pattern, t, baseHp] of bosses) {
  await hook('goToTitle'); await p.waitForTimeout(300);
  await hook('selectHero', 'guanyu'); await p.waitForTimeout(400);
  // 실전형 강빌드(무장 다수·핵심 패시브) — TTK 하한(실플레이 최소치)
  for (const w of ['sword', 'halberd', 'spear', 'bow', 'bagua']) await hook('giveWeapon', w);
  await hook('givePassive', 'power', 5); await hook('givePassive', 'area', 4); await hook('givePassive', 'haste', 5);
  await hook('setTime', t); await hook('setInvulnerable', 99999);
  await p.waitForTimeout(600);
  await hook('spawnBoss', type); await p.waitForTimeout(700);
  const spawned = (await stats()).bossActive;
  await p.screenshot({ path: OUT + `/gate_boss_${pattern}_${type}.png` });
  const t0 = Date.now(); let killed = false; let elapsed = 0;
  while ((Date.now() - t0) / 1000 < 75) {
    // 보스로 접근(북쪽 스폰) — 근접 딜 유지
    await p.keyboard.down('w'); await p.waitForTimeout(120); await p.keyboard.up('w');
    await clearLevels();
    const s = await stats();
    if (!s.bossActive) { killed = true; elapsed = +((Date.now() - t0) / 1000).toFixed(1); break; }
    await p.waitForTimeout(60);
  }
  if (!killed) elapsed = +((Date.now() - t0) / 1000).toFixed(1);
  results.push({ boss: type, pattern, encTime: `${t/60}min`, baseHp, ttk: killed ? elapsed : `>75(미처치)`, killed });
}
console.log(JSON.stringify({ note: 'guanyu 5무기 maxed + power5/area4/haste5 + invuln, killBoss 미사용(실전 오토에임)', results, errs: errs.slice(0, 3) }, null, 2));
await b.close();
