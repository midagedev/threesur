// 킬 콤보 카운터. 3초 내 킬을 유지, 마일스톤 돌파 시 배너 + XP 보너스.
const WINDOW = 3.0;
const MILESTONES = [100, 500, 1000];
const MILESTONE_LABELS = ['百人斬!', '五百人斬!', '千人斬!'];
const MILESTONE_XP = [30, 120, 400];
export const FEVER_THRESHOLD = 200; // 콤보 피버 진입 기준

export class Combo {
  count = 0;
  private timer = 0;
  private nextMilestone = 0;
  private readonly onBanner: (text: string) => void;
  private readonly onPunch: () => void;

  constructor(onBanner: (text: string) => void, onPunch: () => void) {
    this.onBanner = onBanner;
    this.onPunch = onPunch;
  }

  reset(): void {
    this.count = 0;
    this.timer = 0;
    this.nextMilestone = 0;
  }

  // 콤보 피버 상태 (200+ 유지). run이 읽어 XP 1.5배·화면 연출·전용 사운드를 건다.
  get fever(): boolean {
    return this.count >= FEVER_THRESHOLD;
  }

  // 킬 등록. 마일스톤 돌파 시 반환하는 보너스 XP(없으면 0).
  onKill(): number {
    this.count++;
    this.timer = WINDOW;
    this.onPunch();
    let bonus = 0;
    while (this.nextMilestone < MILESTONES.length && this.count >= MILESTONES[this.nextMilestone]) {
      this.onBanner(MILESTONE_LABELS[this.nextMilestone]);
      bonus += MILESTONE_XP[this.nextMilestone];
      this.nextMilestone++;
    }
    return bonus;
  }

  update(dt: number): void {
    if (this.count > 0) {
      this.timer -= dt;
      if (this.timer <= 0) {
        this.count = 0;
        this.nextMilestone = 0;
      }
    }
  }
}
