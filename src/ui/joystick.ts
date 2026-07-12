import type { Input } from '../core/input';

// 모바일 터치 컨트롤: 좌측 플로팅 가상 조이스틱 + 우측 무쌍 버튼.
// 조이스틱은 터치 시작점 기준으로 떠오르고(반경 60px·데드존 10%), Input.joy에 축을 쓴다.
// 무쌍 버튼은 원형 게이지를 표시하고, 가득 차면 맥동. 탭 시 Input.press('Space').
const RADIUS = 60;
const DEADZONE = 0.1;

export class Joystick {
  private readonly input: Input;
  private readonly moveZone: HTMLDivElement;
  private readonly base: HTMLDivElement;
  private readonly knob: HTMLDivElement;
  private readonly musouBtn: HTMLDivElement;
  private readonly musouRing: HTMLDivElement;
  private movePointer = -1;
  private startX = 0;
  private startY = 0;
  private visible = false;
  private ready = false;

  constructor(input: Input) {
    this.input = input;

    // 좌측 이동 존 (플로팅 조이스틱 발생 영역)
    this.moveZone = document.createElement('div');
    this.moveZone.style.cssText = [
      'position:fixed',
      'left:0',
      'bottom:0',
      'width:55%',
      'height:70%',
      'z-index:22',
      'touch-action:none',
      'display:none',
    ].join(';');

    // 베이스는 뷰포트 기준 fixed (터치 지점 = clientX/clientY에 중앙 정렬).
    this.base = document.createElement('div');
    this.base.style.cssText = [
      'position:fixed',
      'z-index:22',
      `width:${RADIUS * 2}px`,
      `height:${RADIUS * 2}px`,
      'border-radius:50%',
      'border:2px solid rgba(232,198,103,0.5)',
      'background:radial-gradient(circle,rgba(20,22,30,0.5),rgba(10,11,17,0.35))',
      'box-shadow:0 0 18px rgba(232,198,103,0.2)',
      'transform:translate(-50%,-50%)',
      'display:none',
      'pointer-events:none',
    ].join(';');
    this.knob = document.createElement('div');
    this.knob.style.cssText = [
      'position:absolute',
      'width:52px',
      'height:52px',
      'border-radius:50%',
      'background:radial-gradient(circle at 40% 35%,#f0e4c0,#a8791f)',
      'box-shadow:0 0 14px rgba(232,198,103,0.6)',
      'transform:translate(-50%,-50%)',
      'pointer-events:none',
    ].join(';');
    this.base.appendChild(this.knob);
    this.moveZone.appendChild(this.base);
    document.body.appendChild(this.moveZone);

    // 우측 무쌍 버튼
    this.musouBtn = document.createElement('div');
    this.musouBtn.style.cssText = [
      'position:fixed',
      'right:calc(env(safe-area-inset-right,0px) + 22px)',
      'bottom:calc(env(safe-area-inset-bottom,0px) + 32px)',
      'width:92px',
      'height:92px',
      'border-radius:50%',
      'z-index:23',
      'touch-action:none',
      'display:none',
      'align-items:center',
      'justify-content:center',
      'font-family:"Nanum Myeongjo","Times New Roman",serif',
    ].join(';');
    // 게이지 링 (conic-gradient로 채움 표현)
    this.musouRing = document.createElement('div');
    this.musouRing.style.cssText = [
      'position:absolute',
      'inset:0',
      'border-radius:50%',
      'background:conic-gradient(#e8c667 0deg, rgba(40,32,14,0.7) 0deg)',
      '-webkit-mask:radial-gradient(circle, transparent 34px, #000 35px)',
      'mask:radial-gradient(circle, transparent 34px, #000 35px)',
    ].join(';');
    this.musouBtn.appendChild(this.musouRing);
    const core = document.createElement('div');
    core.style.cssText = [
      'position:absolute',
      'inset:10px',
      'border-radius:50%',
      'background:radial-gradient(circle at 40% 35%,#2a2410,#14120a)',
      'border:1px solid rgba(232,198,103,0.5)',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'color:#e8c667',
      'font-size:26px',
      'letter-spacing:1px',
    ].join(';');
    core.textContent = '無';
    this.musouBtn.appendChild(core);
    document.body.appendChild(this.musouBtn);

    // 이벤트 바인딩 (Pointer Events)
    this.moveZone.addEventListener('pointerdown', this.onMoveDown);
    this.moveZone.addEventListener('pointermove', this.onMoveMove);
    this.moveZone.addEventListener('pointerup', this.onMoveUp);
    this.moveZone.addEventListener('pointercancel', this.onMoveUp);
    this.moveZone.addEventListener('lostpointercapture', this.onMoveUp);

    this.musouBtn.addEventListener('pointerdown', this.onMusouDown);
  }

  setVisible(v: boolean): void {
    if (this.visible === v) return;
    this.visible = v;
    this.moveZone.style.display = v ? 'block' : 'none';
    this.musouBtn.style.display = v ? 'flex' : 'none';
    if (!v) this.endMove();
  }

  // 무쌍 게이지 갱신 (0..100, ready).
  setMusou(pct: number, ready: boolean): void {
    if (!this.visible) return;
    const deg = Math.min(360, (pct / 100) * 360);
    this.musouRing.style.background = `conic-gradient(#e8c667 ${deg}deg, rgba(40,32,14,0.7) ${deg}deg)`;
    if (ready && !this.ready) {
      this.musouBtn.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.12)' }, { transform: 'scale(1)' }],
        { duration: 700, iterations: Infinity },
      );
    } else if (!ready && this.ready) {
      this.musouBtn.getAnimations().forEach((a) => a.cancel());
    }
    this.ready = ready;
  }

  private readonly onMoveDown = (e: PointerEvent): void => {
    if (this.movePointer !== -1) return;
    e.preventDefault();
    this.movePointer = e.pointerId;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.base.style.left = `${e.clientX}px`;
    this.base.style.top = `${e.clientY}px`;
    this.base.style.display = 'block';
    this.knob.style.left = '50%';
    this.knob.style.top = '50%';
    this.input.joy.active = true;
    this.input.joy.x = 0;
    this.input.joy.z = 0;
    // 포인터 캡처(존 밖으로 나가도 추적). 합성/비활성 포인터에선 실패할 수 있어 무시.
    try {
      this.moveZone.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  private readonly onMoveMove = (e: PointerEvent): void => {
    if (e.pointerId !== this.movePointer) return;
    e.preventDefault();
    let dx = e.clientX - this.startX;
    let dy = e.clientY - this.startY;
    const dist = Math.hypot(dx, dy);
    if (dist > RADIUS) {
      dx = (dx / dist) * RADIUS;
      dy = (dy / dist) * RADIUS;
    }
    this.knob.style.left = `${50 + (dx / RADIUS) * 50}%`;
    this.knob.style.top = `${50 + (dy / RADIUS) * 50}%`;
    const nx = dx / RADIUS;
    const nz = dy / RADIUS;
    const mag = Math.hypot(nx, nz);
    if (mag < DEADZONE) {
      this.input.joy.x = 0;
      this.input.joy.z = 0;
    } else {
      // 화면 우=+X, 아래=+Z (Input 매핑과 일치)
      this.input.joy.x = nx;
      this.input.joy.z = nz;
    }
  };

  private readonly onMoveUp = (e: PointerEvent): void => {
    if (e.pointerId !== this.movePointer) return;
    this.endMove();
  };

  private endMove(): void {
    this.movePointer = -1;
    this.base.style.display = 'none';
    this.input.joy.active = false;
    this.input.joy.x = 0;
    this.input.joy.z = 0;
  }

  private readonly onMusouDown = (e: PointerEvent): void => {
    e.preventDefault();
    this.input.press('Space');
    this.musouBtn.animate(
      [{ filter: 'brightness(1.8)' }, { filter: 'brightness(1)' }],
      { duration: 200, easing: 'ease-out' },
    );
  };
}

// 터치 지원 여부(모바일 감지). ?touch=1 쿼리로 강제 활성 가능(데스크톱 테스트).
export function isTouchDevice(): boolean {
  if (new URLSearchParams(location.search).has('touch')) return true;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
