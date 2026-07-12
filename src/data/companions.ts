export type CompanionAttack = 'slash' | 'lightning';

export interface CompanionDef {
  id: string;
  name: string;
  hanja: string;
  charIndex: number;
  attack: CompanionAttack;
  damage: number;
  cooldown: number;
}

// 군웅전 콘텐츠 팩의 임시동료 개념을 짧은 원군 이벤트로 축약한다.
// 별도 관계/경제 시스템 없이 장수별로 한 명이 45초에 합류해 런 끝까지 돕는다.
export const COMPANION_BY_HERO: Record<string, CompanionDef> = {
  zhaoyun: { id: 'liubei', name: '유비', hanja: '劉備', charIndex: 7, attack: 'slash', damage: 34, cooldown: 1.1 },
  guanyu: { id: 'caocao', name: '조조', hanja: '曹操', charIndex: 0, attack: 'lightning', damage: 42, cooldown: 1.45 },
  zhangfei: { id: 'zhaoyun', name: '조운', hanja: '趙雲', charIndex: 17, attack: 'slash', damage: 38, cooldown: 1.0 },
  zhugeliang: { id: 'zhouyu', name: '주유', hanja: '周瑜', charIndex: 18, attack: 'lightning', damage: 46, cooldown: 1.5 },
  huangzhong: { id: 'liubei', name: '유비', hanja: '劉備', charIndex: 7, attack: 'slash', damage: 34, cooldown: 1.1 },
  lvbu: { id: 'zhangliao', name: '장료', hanja: '張遼', charIndex: 16, attack: 'slash', damage: 44, cooldown: 1.05 },
};

export const COMPANION_JOIN_TIME = 45;
