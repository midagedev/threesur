import { chromium } from '@playwright/test';
const OUT = '/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
const p = await ctx.newPage();
p.on('pageerror', e => console.log('ERR', e.message));
await p.goto('http://localhost:5188/threesur/', { waitUntil: 'networkidle' });
await p.waitForTimeout(700);
const scene = () => p.evaluate(() => window.__GAME_TEST__?.scene);
for (let a=0;a<5;a++){ if(await scene()==='run')break; if(await scene()==='title'){await p.getByText('출진 出陣',{exact:true}).click().catch(()=>{});await p.waitForTimeout(400);} await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(600); }
console.log('scene:', await scene());

// 무쌍 버튼을 피한 다양한 위치 — 각각 한 번의 pointerdown으로 활성화되어야 함
const pts = [[60,90],[195,180],[340,140],[90,650],[200,430],[150,800],[370,820]];
const res=[];
for (const [x,y] of pts) {
  const r = await p.evaluate(([x,y]) => {
    const el = document.elementFromPoint(x,y);
    el.dispatchEvent(new PointerEvent('pointerdown',{pointerId:1,clientX:x,clientY:y,bubbles:true,cancelable:true,pointerType:'touch'}));
    const zone = Array.from(document.querySelectorAll('div')).find(d=>{const s=getComputedStyle(d);return s.position==='fixed'&&s.zIndex==='22'&&d.querySelector('div');});
    const base = zone?zone.querySelector('div'):null;
    const active = base?base.style.display==='block':false;
    window.dispatchEvent(new PointerEvent('pointerup',{pointerId:1,clientX:x,clientY:y,bubbles:true,pointerType:'touch'}));
    return active;
  }, [x,y]);
  res.push(`(${x},${y})→${r?'OK':'FAIL'}`);
}
console.log('버튼 밖 탭:', res.join('  '));

// 무쌍 버튼 중심 탭 → 이동 활성화 안 됨(정상) + 버튼이 hit target
const btn = await p.evaluate(() => {
  const btn = Array.from(document.querySelectorAll('div')).find(d=>getComputedStyle(d).zIndex==='23');
  const r = btn.getBoundingClientRect(); const cx=r.left+r.width/2, cy=r.top+r.height/2;
  const el = document.elementFromPoint(cx,cy);
  el.dispatchEvent(new PointerEvent('pointerdown',{pointerId:2,clientX:cx,clientY:cy,bubbles:true,cancelable:true,pointerType:'touch'}));
  const zone = Array.from(document.querySelectorAll('div')).find(d=>{const s=getComputedStyle(d);return s.position==='fixed'&&s.zIndex==='22'&&d.querySelector('div');});
  const moveActivated = zone.querySelector('div').style.display==='block';
  window.dispatchEvent(new PointerEvent('pointerup',{pointerId:2,clientX:cx,clientY:cy,bubbles:true,pointerType:'touch'}));
  return { onButton: (el.closest && !!el.closest('div[style*="z-index:23"]')) || getComputedStyle(el.parentElement||el).zIndex==='23', moveActivated };
});
console.log('무쌍버튼 중심:', JSON.stringify(btn));

// 시각 증거: 상단-중앙 탭 상태 스크린샷 (base가 그 지점에 뜸)
await p.evaluate(() => { const el=document.elementFromPoint(195,160); el.dispatchEvent(new PointerEvent('pointerdown',{pointerId:3,clientX:195,clientY:160,bubbles:true,cancelable:true,pointerType:'touch'})); el.dispatchEvent(new PointerEvent('pointermove',{pointerId:3,clientX:225,clientY:120,bubbles:true,pointerType:'touch'})); });
await p.waitForTimeout(200);
await p.screenshot({ path: OUT + '/p3_joystick16_topcenter.png' });
await ctx.close(); await b.close();
