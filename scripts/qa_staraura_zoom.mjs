// 사당 오라 실루엣 클로즈업 — 배너/대사 클리어 후 플레이어 중심 클립 확대.
import { chromium } from '@playwright/test';
import { PNG } from 'pngjs';
import fs from 'fs';

const URL = 'http://localhost:5202/threesur/';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad/staraura';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
const errs = [];
p.on('pageerror', (e) => errs.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errs.push('console:' + m.text()); });
await p.goto(URL, { waitUntil: 'networkidle' });
await p.waitForTimeout(1800);
const hook = (fn, ...a) => p.evaluate(({ fn, a }) => window.__GAME_TEST__[fn](...a), { fn, a });

await hook('selectHero', 'zhaoyun');
await p.waitForTimeout(700);
await hook('setInvulnerable', 9999);
await hook('setTime', 200); // 원군/배너 이벤트 없는 구간
// 대사/배너 자연 소멸 대기
await p.waitForTimeout(3500);

// 플레이어 화면 중앙(카메라 추적) — 중심 근처 320x360 클립을 2x로.
const clip = { x: 480, y: 200, width: 320, height: 360 };
const cx = clip.x, cy = clip.y, cw = clip.width, ch = clip.height;

const offBuf = await p.screenshot({ clip });
fs.writeFileSync(`${OUT}/zoom_off.png`, offBuf);

await hook('shrineBuff', 'attack', 60);
await p.waitForTimeout(600);
const onBuf = await p.screenshot({ clip });
fs.writeFileSync(`${OUT}/zoom_on.png`, onBuf);

// 클립 내 hotFrac + 네온 존재율(off 대비 증가분)
function analyze(buf) {
  const png = PNG.sync.read(buf);
  const { width, height, data } = png;
  let hot = 0, neon = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], bl = data[i + 2];
    if (r > 248 && g > 248 && bl > 248) hot++;
    const mx = Math.max(r, g, bl), mn = Math.min(r, g, bl);
    const cyan = g > 140 && bl > 140 && r < 130;
    const magenta = r > 140 && bl > 120 && g < 120;
    if ((mx - mn) > 60 && (cyan || magenta)) neon++;
  }
  const total = width * height;
  return { hotFrac: +(hot / total).toFixed(5), neonFrac: +(neon / total).toFixed(5) };
}
const off = analyze(offBuf);
const on = analyze(onBuf);
console.log(JSON.stringify({
  clipInfo: { cx, cy, cw, ch },
  off, on, neonDelta: +(on.neonFrac - off.neonFrac).toFixed(5),
  errCount: errs.length, errs: errs.slice(0, 4),
}, null, 2));
await b.close();
