// 키보드 폴링 입력. WASD/화살표 이동, Space/Esc/R 등 엣지 감지.
export class Input {
  private down = new Set<string>();
  private pressed = new Set<string>();
  // 이동 축 (재사용 객체, 프레임당 할당 없음)
  readonly move = { x: 0, z: 0 };
  // 가상 조이스틱 축 (모바일). active면 키보드 대신 이 값을 사용.
  readonly joy = { x: 0, z: 0, active: false };

  constructor(target: EventTarget = window) {
    target.addEventListener('keydown', this.onKeyDown as EventListener);
    target.addEventListener('keyup', this.onKeyUp as EventListener);
    // 포커스 상실 시 눌린 키 정리
    window.addEventListener('blur', () => {
      this.down.clear();
    });
  }

  private onKeyDown = (e: KeyboardEvent) => {
    // 게임 조작키는 브라우저 스크롤 방지
    if (MOVE_OR_ACTION.has(e.code)) e.preventDefault();
    if (!this.down.has(e.code)) this.pressed.add(e.code);
    this.down.add(e.code);
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.down.delete(e.code);
  };

  isDown(code: string): boolean {
    return this.down.has(code);
  }

  // 이번 프레임에 눌리기 시작했으면 true (소비형)
  consumePressed(code: string): boolean {
    if (this.pressed.has(code)) {
      this.pressed.delete(code);
      return true;
    }
    return false;
  }

  // 외부(가상 버튼)에서 엣지 입력 주입. keydown과 동일하게 소비된다.
  press(code: string): void {
    this.pressed.add(code);
  }

  // 이동 축 갱신: 화면 기준 위=-Z(북), 아래=+Z(남), 좌=-X(서), 우=+X(동)
  // 조이스틱이 활성이면 키보드 대신 조이스틱 벡터 사용.
  poll(): void {
    if (this.joy.active) {
      this.move.x = this.joy.x;
      this.move.z = this.joy.z;
      return;
    }
    let x = 0;
    let z = 0;
    if (this.down.has('KeyD') || this.down.has('ArrowRight')) x += 1;
    if (this.down.has('KeyA') || this.down.has('ArrowLeft')) x -= 1;
    if (this.down.has('KeyS') || this.down.has('ArrowDown')) z += 1;
    if (this.down.has('KeyW') || this.down.has('ArrowUp')) z -= 1;
    this.move.x = x;
    this.move.z = z;
  }

  // 프레임 끝에서 엣지 버퍼 정리
  endFrame(): void {
    this.pressed.clear();
  }
}

const MOVE_OR_ACTION = new Set<string>([
  'KeyW', 'KeyA', 'KeyS', 'KeyD',
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'Space',
]);
