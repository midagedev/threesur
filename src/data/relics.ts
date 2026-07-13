import type { PlayerStats } from '../game/player';
import { getLang } from '../core/i18n';

// 저주받은 유물 (DESIGN §10). risk-reward 레벨업 카드로 등장(보라색 테두리, 10% 확률, 최대 2개).
// 패시브와 동일하게 stats에 적용하되 강한 이득 + 뚜렷한 대가를 함께 준다.
// 이름/설명은 ko + en(한자는 공통). 표시 시 relicName/relicDesc로 현재 언어 선택.
export interface RelicDef {
  id: string;
  name: string;
  nameEn: string;
  hanja: string;
  desc: string;
  descEn: string;
  apply: (s: PlayerStats) => void;
}

export const RELIC_DEFS: RelicDef[] = [
  {
    id: 'seven_star',
    name: '칠성검',
    nameEn: 'Seven Stars Sword',
    hanja: '七星劍',
    desc: '공격력 +40%, 최대 체력 -30%',
    descEn: 'Attack +40%, Max HP -30%',
    apply: (s) => {
      s.damageMul *= 1.4;
      s.maxHpMul *= 0.7;
    },
  },
  {
    id: 'bronze_decree',
    name: '동작대 금령',
    nameEn: 'Bronze Sparrow Decree',
    hanja: '銅雀臺金令',
    desc: '골드 획득 +100%, 이동속도 -15%',
    descEn: 'Gold gain +100%, Move speed -15%',
    apply: (s) => {
      s.goldMul *= 2.0;
      s.speedMul *= 0.85;
    },
  },
  {
    id: 'ox_fan',
    name: '우선',
    nameEn: 'Ox Fan',
    hanja: '牛扇',
    desc: '쿨다운 -25%, 픽업 반경 -50%',
    descEn: 'Cooldown -25%, Pickup radius -50%',
    apply: (s) => {
      s.cooldownMul *= 0.75;
      s.pickupMul *= 0.5;
    },
  },
  {
    id: 'poison_pill',
    name: '오석산',
    nameEn: 'Five-Mineral Powder',
    hanja: '五石散',
    desc: '공격력 +30%, 받는 피해 +25%',
    descEn: 'Attack +30%, Damage taken +25%',
    apply: (s) => {
      s.damageMul *= 1.3;
      s.dmgTakenMul *= 1.25;
    },
  },
  {
    id: 'blood_banner',
    name: '피의 군기',
    nameEn: 'Blood War-Banner',
    hanja: '血軍旗',
    desc: '투사체 +2, 체력 재생 정지, 최대 체력 -15%',
    descEn: 'Projectiles +2, HP regen off, Max HP -15%',
    apply: (s) => {
      s.projectileBonus += 2;
      s.hpRegen = 0;
      s.maxHpMul *= 0.85;
    },
  },
  {
    id: 'greedy_seal',
    name: '탐랑의 인',
    nameEn: 'Seal of Greed',
    hanja: '貪狼印',
    desc: '경험치 +50%, 광역 -25%',
    descEn: 'XP +50%, Area -25%',
    apply: (s) => {
      s.xpMul *= 1.5;
      s.areaMul *= 0.75;
    },
  },
];

export const RELIC_BY_ID: Record<string, RelicDef> = {};
for (const r of RELIC_DEFS) RELIC_BY_ID[r.id] = r;

// 현재 언어의 유물 이름/설명 (한자는 별도 병기).
export function relicName(d: RelicDef): string {
  return getLang() === 'en' ? d.nameEn : d.name;
}
export function relicDesc(d: RelicDef): string {
  return getLang() === 'en' ? d.descEn : d.desc;
}

// 아직 보유하지 않은 유물 중 하나를 무작위로 반환(없으면 null). (rng: 0..1 반환 함수)
export function rollRelic(rand: () => number, ownedIds: readonly string[]): RelicDef | null {
  const pool = RELIC_DEFS.filter((r) => !ownedIds.includes(r.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(rand() * pool.length)];
}

// ============================================================================
// 명기(名器) — 보스 처치 보상 전용 양성 아이템 (DESIGN §14.2)
// 저주 유물과 달리 순수 이득(대가 없음)·상한 없음·보스 드랍 전용.
// lore는 three-kingdoms-mud named.json 안목 감정문을 1~2문장으로 축약(ko/en 병기, i18n 무접촉).
// 효과는 빌드를 굴절시키는 패시브형 — 저주 유물과 동일하게 PlayerStats에 적용된다.
export interface MasterworkDef {
  id: string;
  name: string;
  nameEn: string;
  hanja: string;
  desc: string; // 효과 요약(카드)
  descEn: string;
  lore: string; // 감정문(도감/카드 하단)
  loreEn: string;
  apply: (s: PlayerStats) => void;
}

export const MASTERWORK_DEFS: MasterworkDef[] = [
  {
    id: 'zhangba_mao',
    name: '장팔사모',
    nameEn: 'Serpent Spear',
    hanja: '丈八蛇矛',
    desc: '공격력 +20%, 광역 +15%',
    descEn: 'Attack +20%, Area +15%',
    lore: '한 길 여덟 자, 뱀처럼 굽이친 긴 모. 길이가 곧 거리이고 무게가 곧 기세라, 닿을 자리를 먼저 정하는 쪽은 늘 이 모를 쥔 손이다.',
    loreEn: 'A serpentine spear a fathom and eight feet long. Reach is distance and weight is momentum — the hand that holds it always decides where the blow lands first.',
    apply: (s) => {
      s.damageMul *= 1.2;
      s.areaMul *= 1.15;
    },
  },
  {
    id: 'qinggang_jian',
    name: '청홍검',
    nameEn: 'Qinggang Blade',
    hanja: '靑釭劍',
    desc: '공격력 +18%, 사거리·투사체 속도 +15%',
    descEn: 'Attack +18%, Range & projectile speed +15%',
    lore: '칼등이 푸르게 식어 빛나는 양날 보검. 쇠를 진흙처럼 갈라, 벤 줄도 모른 채 늦게야 피가 흐른다.',
    loreEn: 'A double-edged sword glowing blue-cold along its spine. It parts iron like clay — the cut is felt only when the blood comes late.',
    apply: (s) => {
      s.damageMul *= 1.18;
      s.rangeMul *= 1.15;
    },
  },
  {
    id: 'wanshi_gong',
    name: '만석궁',
    nameEn: 'Myriad-Stone Bow',
    hanja: '萬石弓',
    desc: '사거리·투사체 속도 +30%',
    descEn: 'Range & projectile speed +30%',
    lore: '만 석을 당긴다는 초강궁. 살이 닿은 갑주와 방패는 종이처럼 뚫려 살촉 자국만 남는다.',
    loreEn: 'A superbow said to draw ten thousand stones. Armor and shields it strikes tear like paper, leaving only the arrowhead’s mark.',
    apply: (s) => {
      s.rangeMul *= 1.3;
    },
  },
  {
    id: 'bao_dao',
    name: '보도',
    nameEn: 'Treasured Saber',
    hanja: '寶刀',
    desc: '공격력 +28%',
    descEn: 'Attack +28%',
    lore: '외날을 곧게 세운 환수도 계열의 명품. 잘 벼린 칼이라 손에 익을수록 난전에서 빠르고 매섭게 빛난다.',
    loreEn: 'A masterwork ring-pommel saber with a true single edge. The better it fits the hand, the faster and fiercer it shines in the melee.',
    apply: (s) => {
      s.damageMul *= 1.28;
    },
  },
  {
    id: 'tietai_gong',
    name: '철태궁',
    nameEn: 'Iron-Core Bow',
    hanja: '鐵胎弓',
    desc: '투사체 +1, 공격력 +10%',
    descEn: 'Projectiles +1, Attack +10%',
    lore: '활채 안쪽에 쇠심을 먹인 강궁. 시위를 끝까지 메길 줄 아는 자만이 그 굳은 채를 살린다.',
    loreEn: 'A bow with an iron core in its limbs. Only one who can draw the string to its limit brings the stiff stave to life.',
    apply: (s) => {
      s.projectileBonus += 1;
      s.damageMul *= 1.1;
    },
  },
  {
    id: 'shuangtie_ji',
    name: '쌍철극',
    nameEn: 'Twin Iron Halberds',
    hanja: '雙鐵戟',
    desc: '투사체 +1, 광역 +12%',
    descEn: 'Projectiles +1, Area +12%',
    lore: '철로 무겁게 벼린 쌍극. 두 날이 서로 다른 높이에서 파고들어, 막는 자는 어느 쪽을 버릴지 늦게야 깨닫는다.',
    loreEn: 'A pair of heavy iron halberds. The two blades bite in at different heights — the defender learns too late which one to abandon.',
    apply: (s) => {
      s.projectileBonus += 1;
      s.areaMul *= 1.12;
    },
  },
  {
    id: 'lian_nu',
    name: '연노',
    nameEn: 'Repeating Crossbow',
    hanja: '連弩',
    desc: '쿨다운 -20%',
    descEn: 'Cooldown -20%',
    lore: '짧은 살을 잇달아 먹이는 연발 쇠뇌. 한 발의 깊이는 덜해도 쉼 없이 쏟아져 적이 고개를 들지 못하게 한다.',
    loreEn: 'A repeating crossbow that feeds short bolts in sequence. Each bites less deep, but the endless volley keeps the enemy’s head down.',
    apply: (s) => {
      s.cooldownMul *= 0.8;
    },
  },
  {
    id: 'mingguang_kai',
    name: '명광개',
    nameEn: 'Radiant Cuirass',
    hanja: '明光鎧',
    desc: '받는 피해 -22%',
    descEn: 'Damage taken -22%',
    lore: '가슴의 둥근 호심경이 빛을 되쏘는 중갑. 창끝이 미끄러질 만큼 단단해, 무겁되 그 무게가 곧 살길이다.',
    loreEn: 'Heavy armor whose round breast-mirror throws light back. Hard enough to turn a spear-point — its weight is the very road to survival.',
    apply: (s) => {
      s.dmgTakenMul *= 0.78;
    },
  },
  {
    id: 'sunzi_bingfa',
    name: '손자병법',
    nameEn: 'The Art of War',
    hanja: '孫子兵法',
    desc: '쿨다운 -15%, 광역 +10%',
    descEn: 'Cooldown -15%, Area +10%',
    lore: '허와 실, 속임과 형세를 가른 십삼 편. 끝까지 익힌 자는 싸우기 전에 이미 셈을 마치고 적의 빈 곳을 짚어 낸다.',
    loreEn: 'Thirteen chapters dividing the empty and the solid, deception and form. One who masters it finishes the reckoning before the battle and finds the enemy’s gaps.',
    apply: (s) => {
      s.cooldownMul *= 0.85;
      s.areaMul *= 1.1;
    },
  },
  {
    id: 'taigong_bingfa',
    name: '태공병법',
    nameEn: 'Taigong’s Art',
    hanja: '太公兵法',
    desc: '경험치 +35%',
    descEn: 'XP +35%',
    lore: '강태공의 이름을 빌린 오래된 비전. 천하를 한 판으로 보는 큰 계책이라, 익힌 자의 셈은 형세 전부에 가닿는다.',
    loreEn: 'An ancient secret text under Jiang Taigong’s name. Its grand design reads all-under-heaven as one board — its reckoning reaches the whole field.',
    apply: (s) => {
      s.xpMul *= 1.35;
    },
  },
  {
    id: 'heshi_bi',
    name: '화씨벽',
    nameEn: 'He’s Jade Disc',
    hanja: '和氏璧',
    desc: '골드 +60%, 픽업 반경 +20%',
    descEn: 'Gold +60%, Pickup radius +20%',
    lore: '천하에 둘 없다는 보옥. 진시황이 깎아 옥새로 삼았다는 그 돌이라, 지닌 자를 두고 격이 아니라 천명을 가늠한다.',
    loreEn: 'A jade beyond compare. The very stone Qin Shi Huang cut into an imperial seal — men measure its bearer not by rank but by the mandate of heaven.',
    apply: (s) => {
      s.goldMul *= 1.6;
      s.pickupMul *= 1.2;
    },
  },
  {
    id: 'yu_jue',
    name: '옥결',
    nameEn: 'Jade Jue',
    hanja: '玉玦',
    desc: '체력 재생 +1.5/s, 최대 체력 +12%',
    descEn: 'HP regen +1.5/s, Max HP +12%',
    lore: '한쪽이 트인 고리 옥. 그 트임은 결단의 표식이라, 지닌 것만으로 망설이지 않는 사람으로 읽힌다.',
    loreEn: 'A ring of jade broken on one side. That gap is the mark of resolve — to wear it is to be read as one who does not hesitate.',
    apply: (s) => {
      s.hpRegen += 1.5;
      s.maxHpMul *= 1.12;
    },
  },
];

export const MASTERWORK_BY_ID: Record<string, MasterworkDef> = {};
for (const m of MASTERWORK_DEFS) MASTERWORK_BY_ID[m.id] = m;

export function masterworkName(d: MasterworkDef): string {
  return getLang() === 'en' ? d.nameEn : d.name;
}
export function masterworkDesc(d: MasterworkDef): string {
  return getLang() === 'en' ? d.descEn : d.desc;
}
export function masterworkLore(d: MasterworkDef): string {
  return getLang() === 'en' ? d.loreEn : d.lore;
}

// 도감 보유 판정(save 영속 기반 — 도감은 런 밖에서 열림). 획득한 명기 def를 표시 순서대로 반환.
// save를 직접 import하지 않도록 구조적 타입만 받는다(SaveData가 masterworks: string[] 보유).
export function ownedMasterworks(save: { masterworks: readonly string[] }): MasterworkDef[] {
  return MASTERWORK_DEFS.filter((m) => save.masterworks.includes(m.id));
}
export function isMasterworkOwned(id: string, save: { masterworks: readonly string[] }): boolean {
  return save.masterworks.includes(id);
}

// 미보유 명기 중 최대 count개를 무작위로 반환(3택 카드용). ownedIds 제외, 중복 없음.
export function rollMasterworks(rand: () => number, ownedIds: readonly string[], count: number): MasterworkDef[] {
  const pool = MASTERWORK_DEFS.filter((m) => !ownedIds.includes(m.id));
  // Fisher-Yates 부분 셔플
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const t = pool[i];
    pool[i] = pool[j];
    pool[j] = t;
  }
  return pool.slice(0, Math.max(0, count));
}
