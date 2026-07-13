import { chromium } from '@playwright/test';
const URL='https://midagedev.github.io/threesur/';
const OUT='/private/tmp/claude-501/-Users-hckim-repo-threesur/f67b1df0-c534-4e0e-b241-c49ac5531400/scratchpad';
const b=await chromium.launch({args:['--use-angle=metal']});
const p=await b.newPage({viewport:{width:1280,height:720}}); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(URL,{waitUntil:'domcontentloaded'}); await p.waitForTimeout(2500);
await p.getByText('출진',{exact:false}).first().click().catch(()=>{}); await p.waitForTimeout(500);
await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(800);
// 20초 플레이
const keys=['w','d','s','a'];
for(let i=0;i<20;i++){ const k=keys[i%4]; await p.keyboard.down(k); await p.waitForTimeout(700); await p.keyboard.up(k);
  const lu=await p.evaluate(()=>Array.from(document.querySelectorAll('div')).some(d=>(d.textContent||'').includes('레벨 업')||(d.textContent||'').includes('리롤')));
  if(lu) await p.keyboard.press('Digit1');
}
await p.screenshot({path:OUT+'/qa_live_20s.png'});
// 董卓 를 담은 요소 특정
const found = await p.evaluate(()=>{
  const out=[];
  for(const el of Array.from(document.querySelectorAll('*'))){
    // 직접 텍스트에 董卓 포함(자식 텍스트 제외 위해 leaf 위주)
    if((el.textContent||'').includes('董卓') && el.children.length<=1){
      const r=el.getBoundingClientRect(); const s=getComputedStyle(el);
      out.push({tag:el.tagName, cls:el.className||'', z:s.zIndex, pe:s.pointerEvents, x:Math.round(r.left),y:Math.round(r.top),w:Math.round(r.width),h:Math.round(r.height), txt:(el.textContent||'').slice(0,40)});
    }
  }
  // 보스 HP 바 후보(상단 빨강 이름) 및 씬 상태
  return out.slice(0,6);
});
console.log('董卓 포함 요소:', JSON.stringify(found,null,0));
console.log('errs:', errs.slice(0,2));
await b.close();
