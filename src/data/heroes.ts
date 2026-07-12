// 플레이어블 장수 정의. 고유 보너스는 stats 기본값(장수 base)으로 접힌다.
export interface HeroDef {
  id: string;
  name: string; // 한글 이름
  hanja: string; // 한자 표기
  sheet: 'sgrade';
  charIndex: number; // sgrade 시트 내 캐릭터 인덱스
  baseHp: number;
  baseSpeed: number; // m/s
  // 고유 보너스 (시작 스탯 배수)
  speedMul: number;
  damageMul: number;
  maxHpMul: number;
  cooldownMul: number;
  rangeMul: number; // 사거리/투사체 속도 (황충)
  dmgTakenMul: number; // 받는 피해 배수 (여포 1.25)
  startWeapon: string;
  bonusText: string; // 고유 보너스 설명(UI)
  musou: string; // 무쌍난무 종류 키
}

export const HEROES: Record<string, HeroDef> = {
  zhaoyun: {
    id: 'zhaoyun',
    name: '조운',
    hanja: '趙雲',
    sheet: 'sgrade',
    charIndex: 17,
    baseHp: 100,
    baseSpeed: 5.2,
    speedMul: 1.1, // 이동속도 +10%
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'spear',
    bonusText: '이동속도 +10%',
    musou: 'zhaoyun',
  },
  guanyu: {
    id: 'guanyu',
    name: '관우',
    hanja: '關羽',
    sheet: 'sgrade',
    charIndex: 5,
    baseHp: 110,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1.15, // 공격력 +15%
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'guandao',
    bonusText: '공격력 +15%',
    musou: 'guanyu',
  },
  zhangfei: {
    id: 'zhangfei',
    name: '장비',
    hanja: '張飛',
    sheet: 'sgrade',
    charIndex: 15,
    baseHp: 100,
    baseSpeed: 4.8,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1.25, // 최대체력 +25%
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'zhangba',
    bonusText: '최대체력 +25%',
    musou: 'zhangfei',
  },
  zhugeliang: {
    id: 'zhugeliang',
    name: '제갈량',
    hanja: '諸葛亮',
    sheet: 'sgrade',
    charIndex: 19,
    baseHp: 90,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 0.9, // 쿨다운 -10%
    rangeMul: 1,
    dmgTakenMul: 1,
    startWeapon: 'baiyu',
    bonusText: '쿨다운 -10%',
    musou: 'zhugeliang',
  },
  huangzhong: {
    id: 'huangzhong',
    name: '황충',
    hanja: '黃忠',
    sheet: 'sgrade',
    charIndex: 6,
    baseHp: 95,
    baseSpeed: 4.9,
    speedMul: 1,
    damageMul: 1,
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1.2, // 사거리/투사체속도 +20%
    dmgTakenMul: 1,
    startWeapon: 'crossbow',
    bonusText: '사거리·투사체속도 +20%',
    musou: 'huangzhong',
  },
  lvbu: {
    id: 'lvbu',
    name: '여포',
    hanja: '呂布',
    sheet: 'sgrade',
    charIndex: 10,
    baseHp: 120,
    baseSpeed: 5.0,
    speedMul: 1,
    damageMul: 1.25, // 공격력 +25%
    maxHpMul: 1,
    cooldownMul: 1,
    rangeMul: 1,
    dmgTakenMul: 1.25, // 받는 피해 +25%
    startWeapon: 'halberd',
    bonusText: '공격력 +25%, 받는 피해 +25%',
    musou: 'lvbu',
  },
};
