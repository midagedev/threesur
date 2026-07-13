import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('c:' + m.text()); });
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(1600);
const hook = (fn, ...args) => p.evaluate(({ fn, args }) => window.__GAME_TEST__[fn](...args), { fn, args });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);
const dbg = () => p.evaluate(() => window.__DEBUG__.info());
const clearLevels = async () => {
  for (let i = 0; i < 90; i++) {
    const s = await stats();
    if (s.state !== 'levelup') break;
    await p.keyboard.press('Digit1'); await p.waitForTimeout(45);
  }
};

// (1) 피아 색상 구분: 아군 화살/부적 + 적 진홍 투사체 + 붉은 지면 점 (보스 소환으로 적탄 보장)
await hook('selectHero', 'huangzhong');
await hook('setTime', 380);
await clearLevels();
await hook('giveWeapon', 'crossbow');
await hook('setInvulnerable', 200);
await hook('spawnBoss', 'dongzhuo');
await p.waitForTimeout(900);
await clearLevels();
await hook('showEnemyProjectiles'); // 적탄 쇼케이스로 6종 색 확인
await p.waitForTimeout(500);
await p.screenshot({ path: OUT + '/feel_enemyproj.png' });
await p.waitForTimeout(900);
await clearLevels();
await p.screenshot({ path: OUT + '/feel_piaf.png' });

// (2) 타격감: 밀집 근접 연속 프레임 (스케일 펀치 + 데미지 팝)
await hook('selectHero', 'guanyu');
await hook('setTime', 430);
await clearLevels();
await hook('setInvulnerable', 200);
await p.waitForTimeout(1000);
await clearLevels();
for (let i = 0; i < 3; i++) { await p.waitForTimeout(70); await p.screenshot({ path: `${OUT}/feel_hit${i}.png` }); }

// (3) 피격감: 무적 해제 후 피격 (붉은 비네트 + 플레이어 틴트)
await hook('setInvulnerable', 0);
await hook('setPlayerPosition', 0, 0);
await p.waitForTimeout(300);
await p.screenshot({ path: OUT + '/feel_hurt.png' });

const frames = [];
for (let i = 0; i < 6; i++) { await p.waitForTimeout(120); frames.push(await dbg()); }
const avg = (k) => Math.round(frames.reduce((a, x) => a + x[k], 0) / frames.length);
const s = await stats();
console.log(JSON.stringify({ alive: s.alive, hp: s.hp, fps: avg('fps'), calls: avg('calls'), errs: errs.slice(0, 8) }, null, 2));
await b.close();
