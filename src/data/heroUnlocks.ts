export interface HeroUnlockProgress {
  totalKills: number;
  best: { time: number };
  bosses: string[];
  lvbuUnlocked: boolean;
}

export const HERO_UNLOCK_ORDER = ['zhaoyun', 'guanyu', 'zhangfei', 'zhugeliang', 'huangzhong', 'lvbu'];

export function isHeroUnlocked(id: string, progress: HeroUnlockProgress): boolean {
  switch (id) {
    case 'zhaoyun':
    case 'guanyu':
      return true;
    case 'zhangfei':
      return progress.totalKills >= 100;
    case 'huangzhong':
      return progress.best.time >= 180;
    case 'zhugeliang':
      return progress.bosses.includes('dongzhuo');
    case 'lvbu':
      return progress.lvbuUnlocked;
    default:
      return false;
  }
}

export function unlockedHeroIds(progress: HeroUnlockProgress): string[] {
  return HERO_UNLOCK_ORDER.filter((id) => isHeroUnlocked(id, progress));
}

export function heroUnlockText(id: string, progress: HeroUnlockProgress): string {
  switch (id) {
    case 'zhangfei':
      return `누적 처치 ${Math.min(100, Math.floor(progress.totalKills))}/100`;
    case 'huangzhong': {
      const sec = Math.min(180, Math.floor(progress.best.time));
      return `최고 생존 ${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')} / 3:00`;
    }
    case 'zhugeliang':
      return '동탁 董卓 토벌';
    case 'lvbu':
      return '본진에서 5000⟡ 해금';
    default:
      return '';
  }
}
