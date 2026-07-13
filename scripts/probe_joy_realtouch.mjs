import { chromium } from '@playwright/test';
const b = await chromium.launch({ args: ['--use-angle=metal'] });
const ctx = await b.newContext({ viewport:{width:390,height:844}, hasTouch:true, isMobile:true, deviceScaleFactor:2 });
const p = await ctx.newPage();
p.on('pageerror', e=>console.log('ERR', e.message));
const cdp = await ctx.newCDPSession(p);
const touch = (type, pts) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: pts });
await p.goto('http://localhost:5188/threesur/', { waitUntil:'networkidle' });
await p.waitForTimeout(700);
const scene = () => p.evaluate(()=>window.__GAME_TEST__?.scene);
for (let a=0;a<5;a++){ if(await scene()==='run')break; if(await scene()==='title'){await p.getByText('출진 出陣',{exact:true}).click().catch(()=>{});await p.waitForTimeout(400);} await p.locator('.hero-card').first().click().catch(()=>{}); await p.waitForTimeout(600); }
console.log('scene:', await scene());
const baseActive = () => p.evaluate(()=>{ const z=Array.from(document.querySelectorAll('div')).find(d=>{const s=getComputedStyle(d);return s.position==='fixed'&&s.zIndex==='22'&&d.querySelector('div');}); const base=z?z.querySelector('div'):null; return base?base.style.display==='block':false; });

// (1) 좌측 여러 위치 연속 10회 실제 터치
const pts=[[40,120],[180,90],[80,300],[250,250],[60,600],[300,500],[120,780],[350,700],[200,160],[30,820]];
let ok=0;
for (let i=0;i<pts.length;i++){ const [x,y]=pts[i]; await touch('touchStart',[{x,y,id:1}]); const a=await baseActive(); if(a)ok++; else console.log('  실패@',x,y); await touch('touchEnd',[]); await p.waitForTimeout(60); }
console.log(`(1) 연속 10회 실제 터치: ${ok}/10 활성`);

// (2) 무쌍 버튼 + 이동 동시 터치 → 이동 활성 → 해제 → 재터치
const btn = await p.evaluate(()=>{const b=Array.from(document.querySelectorAll('div')).find(d=>getComputedStyle(d).zIndex==='23');const r=b.getBoundingClientRect();return [Math.round(r.left+r.width/2),Math.round(r.top+r.height/2)];});
await touch('touchStart',[{x:btn[0],y:btn[1],id:0}]);
await touch('touchStart',[{x:btn[0],y:btn[1],id:0},{x:150,y:400,id:1}]);
const dual = await baseActive();
await touch('touchEnd',[]);
await p.waitForTimeout(80);
await touch('touchStart',[{x:120,y:500,id:2}]);
const retouch = await baseActive();
await touch('touchEnd',[]);
console.log(`(2) 무쌍 동시터치 중 이동활성: ${dual} / 해제 후 재터치 활성: ${retouch}`);

// (3) 레벨업 카드 열고 닫은 뒤 터치
await p.evaluate(()=>{try{window.__GAME_TEST__.giveWeapon('guandao');window.__GAME_TEST__.levelUp();}catch(e){}});
await p.waitForTimeout(400);
const luOpen = await p.evaluate(()=>window.__GAME_TEST__?.stats?.state);
await p.keyboard.press('Digit1'); // 카드 선택하여 닫기
await p.waitForTimeout(400);
const luClosed = await p.evaluate(()=>window.__GAME_TEST__?.stats?.state);
await touch('touchStart',[{x:150,y:450,id:3}]);
const afterLU = await baseActive();
await touch('touchEnd',[]);
console.log(`(3) 레벨업 ${luOpen}→${luClosed}, 닫은 뒤 터치 활성: ${afterLU}`);
await ctx.close(); await b.close();
