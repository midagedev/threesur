import { chromium } from '@playwright/test';
const URL='https://midagedev.github.io/threesur/';
const OUT='/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b=await chromium.launch({args:['--use-angle=metal']});
const ctx=await b.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true,deviceScaleFactor:2});
const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
const cdp=await ctx.newCDPSession(p);
const touch=(type,pts)=>cdp.send('Input.dispatchTouchEvent',{type,touchPoints:pts});
await p.goto(URL,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
await p.screenshot({path:OUT+'/qa_m_title.png'});
await p.getByText('출진',{exact:false}).first().click().catch(()=>{}); await p.waitForTimeout(500);
await p.screenshot({path:OUT+'/qa_m_select.png'});
await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(1000);
// 이동(터치) + 카드 자동선택하며 12초
for(let i=0;i<16;i++){ await touch('touchStart',[{x:120+(i%3)*20,y:600-(i%4)*30,id:1}]); await touch('touchMove',[{x:150,y:560,id:1}]); await p.waitForTimeout(500); await touch('touchEnd',[]); const lu=await p.evaluate(()=>Array.from(document.querySelectorAll('div')).some(d=>(d.textContent||'').includes('레벨 업'))); if(lu)await p.keyboard.press('Digit1'); }
const fps=await p.evaluate(()=>new Promise(res=>{let n=0;const t0=performance.now();function f(){n++;const e=performance.now()-t0;if(e>=1500)res(Math.round(n/(e/1000)));else requestAnimationFrame(f);}requestAnimationFrame(f);}));
// HUD/컨트롤 요소 겹침 측정
const rects=await p.evaluate(()=>{
  const vis=el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0;};
  const byText=re=>{const el=Array.from(document.querySelectorAll('div')).find(d=>re.test((d.textContent||'').trim())&&d.children.length===0); return el?el.getBoundingClientRect():null;};
  const musou=(()=>{const el=Array.from(document.querySelectorAll('div')).find(d=>getComputedStyle(d).zIndex==='23'&&vis(d));return el?el.getBoundingClientRect():null;})();
  const r=x=>x?{x:Math.round(x.left),y:Math.round(x.top),w:Math.round(x.width),h:Math.round(x.height)}:null;
  return { timer:r(byText(/^\d\d:\d\d$/)), hp:r(byText(/^\d+ \/ \d+$/)), musouBtn:r(musou), vw:innerWidth, vh:innerHeight };
});
// 겹침: musou 버튼 vs hp 바
function overlap(a,b){ if(!a||!b)return null; return !(a.x+a.w<=b.x||b.x+b.w<=a.x||a.y+a.h<=b.y||b.y+b.h<=a.y); }
await p.screenshot({path:OUT+'/qa_m_run.png'});
console.log('모바일 fps~%s | rects=%s | musou↔hp겹침=%s | errs=%s', fps, JSON.stringify(rects), overlap(rects.musouBtn,rects.hp), errs.slice(0,2));
await b.close();
