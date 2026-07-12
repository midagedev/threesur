// Phase 3 전체 루프 봇 테스트: 타이틀→선택(조운)→플레이→사망→결과→상점→재출진 + 모바일 뷰.
import { chromium } from '@playwright/test';
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const URL = process.env.URL || 'http://localhost:5188/threesur/';

const log = (...a) => console.log(...a);
const b = await chromium.launch({ args: ['--use-angle=metal', '--autoplay-policy=no-user-gesture-required'] });

// ============ 데스크톱 전체 루프 ============
{
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console:' + m.text()); });
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);

  const scene = () => p.evaluate(() => window.__GAME_TEST__?.scene);
  const stats = () => p.evaluate(() => window.__GAME_TEST__?.stats);
  const gsave = () => p.evaluate(() => window.__GAME_TEST__?.save);

  log('초기 씬:', await scene());
  await p.screenshot({ path: OUT + '/p3_title.png' });

  // 타이틀 → 출진 버튼 클릭
  await p.getByText('출진 出陣', { exact: true }).click();
  await p.waitForTimeout(500);
  log('출진 후 씬:', await scene());
  await p.screenshot({ path: OUT + '/p3_select.png' });

  // 장수 선택: 조운(첫 카드)
  await p.locator('.hero-card').first().click();
  await p.waitForTimeout(500);
  log('선택 후 씬:', await scene(), '장수:', (await stats())?.hero);

  // 30초 생존 플레이 (원형 카이팅 + 레벨업 카드 선택)
  const keys = ['w', 'd', 's', 'a'];
  for (let i = 0; i < 26; i++) {
    const k = keys[i % 4];
    await p.keyboard.down(k);
    await p.waitForTimeout(1000);
    await p.keyboard.up(k);
    // 레벨업 카드 뜨면 1번 선택
    const st = await stats();
    if (i % 4 === 0) log(`  i=${i} scene=${await scene()} state=${st?.state} t=${st?.time?.toFixed(1)} kills=${st?.kills}`);
    if (st?.state === 'levelup') await p.keyboard.press('Digit1');
    if (i === 10) await p.screenshot({ path: OUT + '/p3_play.png' });
  }
  const before = await stats();
  log('플레이 후:', JSON.stringify(before));

  // 사망 유도
  await p.evaluate(() => window.__GAME_TEST__.killPlayer());
  await p.waitForTimeout(1200);
  log('사망 후 씬:', await scene());
  const saveAfter = await gsave();
  log('저장 골드(적립):', saveAfter?.gold, '최고기록:', JSON.stringify(saveAfter?.best));
  await p.screenshot({ path: OUT + '/p3_result.png' });

  // 결과 → 본진(타이틀)
  await p.getByText('본진으로 本陣', { exact: true }).click();
  await p.waitForTimeout(500);
  log('결과→본진 후 씬:', await scene());

  // 골드 지급 후 상점 진입 + 구매
  await p.evaluate(() => window.__GAME_TEST__.grantGold(3000));
  await p.getByText('본진 本陣', { exact: true }).click();
  await p.waitForTimeout(500);
  log('상점 씬:', await scene(), '골드:', (await gsave())?.gold);
  await p.screenshot({ path: OUT + '/p3_shop.png' });

  // 첫 강화 구매 (무예 단련)
  await p.locator('.shop-row').first().getByText('강화', { exact: true }).click();
  await p.waitForTimeout(400);
  const s2 = await gsave();
  log('구매 후 골드:', s2?.gold, '업그레이드:', JSON.stringify(s2?.upgrades));
  await p.screenshot({ path: OUT + '/p3_shop_bought.png' });

  // 전공(도감) 탭 확인
  await p.getByText('전공 戰功', { exact: true }).click();
  await p.waitForTimeout(300);
  await p.screenshot({ path: OUT + '/p3_codex.png' });

  // 재출진: 뒤로 → 출진 → 선택
  await p.getByText('뒤로 ‹', { exact: true }).click();
  await p.waitForTimeout(400);
  await p.getByText('출진 出陣', { exact: true }).click();
  await p.waitForTimeout(400);
  await p.locator('.hero-card').first().click();
  await p.waitForTimeout(600);
  log('재출진 씬:', await scene(), '메타적용 확인 stats:', JSON.stringify(await stats()));

  const dbg = await p.evaluate(() => window.__DEBUG__?.info());
  log('디버그:', JSON.stringify(dbg));
  log('에러:', errs.slice(0, 8));
  await ctx.close();
}

// ============ 모바일 뷰 (390x844) — 조이스틱 + HUD ============
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: OUT + '/p3_m_title.png' });

  // 출진 → 선택 → 조운
  await p.getByText('출진 出陣', { exact: true }).click();
  await p.waitForTimeout(500);
  await p.screenshot({ path: OUT + '/p3_m_select.png' });
  await p.locator('.hero-card').first().click();
  await p.waitForTimeout(1500);

  // 좌하단 이동 존에 실제 PointerEvent 디스패치 → 플로팅 조이스틱 표시 + 이동
  const posBefore = await p.evaluate(() => window.__GAME_TEST__?.stats);
  await p.evaluate(() => {
    const zone = document.querySelector('div[style*="55%"]');
    const fire = (type, x, y) =>
      zone.dispatchEvent(new PointerEvent(type, { pointerId: 1, clientX: x, clientY: y, bubbles: true, cancelable: true }));
    fire('pointerdown', 110, 700);
    fire('pointermove', 150, 650);
  });
  await p.waitForTimeout(800);
  await p.screenshot({ path: OUT + '/p3_m_run.png' });
  const joyState = await p.evaluate(() => {
    const zone = Array.from(document.querySelectorAll('div')).find((d) => (d.getAttribute('style') || '').includes('55%'));
    const base = zone ? zone.querySelector('div') : null;
    return { baseShown: base ? base.style.display === 'block' : false, scene: window.__GAME_TEST__?.scene };
  });
  const posAfter = await p.evaluate(() => window.__GAME_TEST__?.stats);
  // pointerup으로 해제
  await p.evaluate(() => {
    const zone = document.querySelector('div[style*="55%"]');
    zone.dispatchEvent(new PointerEvent('pointerup', { pointerId: 1, clientX: 150, clientY: 650, bubbles: true }));
  });
  console.log('모바일 조이스틱:', JSON.stringify(joyState), 'errs:', errs.slice(0, 5));
  await ctx.close();
}

await b.close();
log('완료');
