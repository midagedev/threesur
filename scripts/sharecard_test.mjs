import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const BASE = 'http://localhost:5188/threesur/';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
await p.goto(BASE, { waitUntil: 'networkidle' });
await p.waitForTimeout(1500);

async function renderCase(victory, heroId, fname) {
  await p.evaluate(async ({ BASE, victory, heroId }) => {
    document.querySelectorAll('#sc_test').forEach((e) => e.remove());
    const share = await import(BASE + 'src/ui/shareCard.ts');
    const ach = await import(BASE + 'src/data/achievements.ts');
    // sgrade 시트 이미지 로드 → 초상용 스텁 atlas
    const img = new Image();
    img.src = BASE + 'assets/sprites/sgrade.png';
    await img.decode();
    const atlas = { sgrade: { texture: { image: img } } };
    const bosses = victory ? ['yuanshao', 'dongzhuo', 'lvbu'] : ['yuanshao'];
    const weapons = [
      { id: 'zhanma', level: 8 }, { id: 'thunder', level: 8 }, { id: 'chibi', level: 8 },
      { id: 'orbit', level: 6 }, { id: 'crossbow', level: 8 }, { id: 'halberd', level: 5 },
    ];
    const ctx = { victory, kills: victory ? 8432 : 1274, maxCombo: victory ? 640 : 210, time: victory ? 600 : 372, level: victory ? 43 : 28, bosses, weapons };
    const title = ach.bestTitle(ach.evaluateAchievements(ctx));
    const data = { victory, heroId, time: ctx.time, kills: ctx.kills, maxCombo: ctx.maxCombo, level: ctx.level, goldEarned: 5230, weapons, title };
    const cv = share.renderShareCard(data, atlas);
    cv.id = 'sc_test';
    cv.style.cssText = 'position:fixed;left:40px;top:45px;width:1200px;height:630px;z-index:9999;';
    document.body.appendChild(cv);
  }, { BASE, victory, heroId });
  await p.waitForTimeout(400);
  const el = await p.$('#sc_test');
  await el.screenshot({ path: OUT + '/' + fname });
}

await renderCase(true, 'zhaoyun', 'share_victory.png');
await renderCase(false, 'guanyu', 'share_defeat.png');
console.log(JSON.stringify({ errs: errs.slice(0, 8) }));
await b.close();
