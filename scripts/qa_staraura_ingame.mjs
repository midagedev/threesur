// 인게임 실측: 사당 버프 스타파워 실루엣 아웃라인 오라(#51) — 실전 광원/블룸 스택 누적 확인.
// off/on 스크린샷 → hotFrac(화이트아웃)·네온 존재율 픽셀 분석.
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';

const URL = 'http://localhost:5202/threesur/';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/staraura';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console:' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(1800);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });
const stats = () => p.evaluate(() => window.__GAME_TEST__.stats);

await hook('selectHero', 'zhaoyun');
await p.waitForTimeout(700);
await hook('setInvulnerable', 9999);
await hook('setTime', 60);
await p.waitForTimeout(400);

// off 캡처(버프 없음)
const offBuf = await p.screenshot();
fs.writeFileSync(`${OUT}/ingame_off.png`, offBuf);

// 사당 버프 강제 후 애니메이션 몇 프레임 흐르게
await hook('shrineBuff', 'attack', 60);
await p.waitForTimeout(500);
await p.keyboard.down('d'); await p.waitForTimeout(350); await p.keyboard.up('d');
await p.waitForTimeout(300);
const onBuf = await p.screenshot();
fs.writeFileSync(`${OUT}/ingame_on.png`, onBuf);
await p.waitForTimeout(400);
const on2Buf = await p.screenshot();
fs.writeFileSync(`${OUT}/ingame_on2.png`, on2Buf);

const s = await stats();

// 픽셀 분석: hotFrac = 근백색(모든 채널>248) 비율. neonFrac = 강한 청록/자홍(채도 높고 밝은) 비율.
function analyze(buf) {
  const png = PNG.sync.read(buf);
  const { width, height, data } = png;
  let hot = 0, neon = 0, total = width * height;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], bl = data[i + 2];
    if (r > 248 && g > 248 && bl > 248) hot++;
    const mx = Math.max(r, g, bl), mn = Math.min(r, g, bl);
    // 청록(g,b 높고 r 낮음) 또는 자홍(r,b 높고 g 낮음), 채도·밝기 있는 픽셀
    const cyan = g > 150 && bl > 150 && r < 140;
    const magenta = r > 150 && bl > 130 && g < 130;
    if ((mx - mn) > 70 && (cyan || magenta)) neon++;
  }
  return { hotFrac: +(hot / total).toFixed(5), neonFrac: +(neon / total).toFixed(5) };
}

const off = analyze(offBuf);
const on = analyze(onBuf);
const on2 = analyze(on2Buf);
console.log(JSON.stringify({
  scene: s?.state, alive: s?.alive, buffActive: s?.shrineBuff ?? '(n/a)',
  off, on, on2,
  neonDelta: +(on.neonFrac - off.neonFrac).toFixed(5),
  hotFracMax: Math.max(on.hotFrac, on2.hotFrac),
  errCount: errs.length, errs: errs.slice(0, 5),
}, null, 2));
await b.close();
