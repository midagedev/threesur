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
  // ── 확장 12종 (콘텐츠 팩 named.json 미사용 네임드 번안). 무기 편중 회피: 인장·병법서·갑주·궁·패옥 위주.
  //    새 축 speedMul·dmgReduction 도입, 나머지는 기존 조합과 중복되지 않는 짝으로 서로 다른 빌드 시너지.
  {
    id: 'shuo',
    name: '삭',
    nameEn: 'Cavalry Lance',
    hanja: '矟',
    desc: '공격력 +15%, 이동속도 +10%',
    descEn: 'Attack +15%, Move speed +10%',
    lore: '한 길이 넘는 기병의 긴 모. 자루가 굵고 무거워 손목이 아니라 말의 기세로 휘두르니, 내리꽂으면 방패째 꿰뚫려 좀체 빠지지 않는다.',
    loreEn: 'A cavalryman’s lance longer than a fathom. Too thick and heavy for the wrist, it is swung by the horse’s momentum — driven down, it pierces shield and all and will not easily pull free.',
    apply: (s) => {
      s.damageMul *= 1.15;
      s.speedMul *= 1.1;
    },
  },
  {
    id: 'huanshou_dao',
    name: '환수도',
    nameEn: 'Ring-Pommel Saber',
    hanja: '環首刀',
    desc: '쿨다운 -10%, 공격력 +10%',
    descEn: 'Cooldown -10%, Attack +10%',
    lore: '자루 끝에 둥근 고리를 단 외날 곧은 칼. 화려할 것 없이 곧게 베고 곧게 찌르는 칼이라, 다룰 줄 아는 손에 쥐여 주면 군말 없이 제 몫을 한다.',
    loreEn: 'A straight single-edged saber with a ring at the pommel. Nothing ornate — it cuts straight and thrusts straight, and in a capable hand it does its share without a word.',
    apply: (s) => {
      s.cooldownMul *= 0.9;
      s.damageMul *= 1.1;
    },
  },
  {
    id: 'jiao_gong',
    name: '각궁',
    nameEn: 'Horn Composite Bow',
    hanja: '角弓',
    desc: '사거리·투사체 속도 +20%, 쿨다운 -8%',
    descEn: 'Range & projectile speed +20%, Cooldown -8%',
    lore: '물소뿔과 나무, 힘줄을 부레풀로 겹쳐 붙인 복합궁. 작은 몸피로도 세게 멀리 쏘아, 활을 다스릴 줄 아는 자의 사거리를 말없이 넓혀 준다.',
    loreEn: 'A composite bow of horn, wood, and sinew laminated with fish glue. Small in the hand yet it shoots hard and far, quietly widening the reach of one who can master a bow.',
    apply: (s) => {
      s.rangeMul *= 1.2;
      s.cooldownMul *= 0.92;
    },
  },
  {
    id: 'liangdang_kai',
    name: '양당개',
    nameEn: 'Two-Panel Cuirass',
    hanja: '裲襠鎧',
    desc: '받는 피해 -10%, 이동속도 +8%',
    descEn: 'Damage taken -10%, Move speed +8%',
    lore: '가슴과 등을 앞뒤 두 판으로 덮고 어깨끈으로 멘 갑. 옆구리가 가벼워 오래 걸어도 숨이 덜 차고, 빗겨 든 판이 화살을 곧잘 튕겨 흘려보낸다.',
    loreEn: 'Armor of two plates over chest and back, slung from the shoulders. Light at the sides so the breath holds through a long march, its slanted plates readily glance arrows aside.',
    apply: (s) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.1);
      s.speedMul *= 1.08;
    },
  },
  {
    id: 'zha_jia',
    name: '찰갑',
    nameEn: 'Lamellar Armor',
    hanja: '札甲',
    desc: '받는 피해 -12%, 최대 체력 +8%',
    descEn: 'Damage taken -12%, Max HP +8%',
    lore: '작은 미늘판 수천 장을 끈과 가죽으로 촘촘히 엮은 몸통 갑. 미늘이 서로 미끄러져 몸을 따라 움직이니, 잘 짜인 한 벌은 창끝을 틈으로 흘려보내 입은 자를 오래 살린다.',
    loreEn: 'A cuirass of thousands of small scales laced tight with cord and leather. The scales slide over one another to follow the body — a well-made suit slips a spear-point through the gaps and keeps its wearer alive.',
    apply: (s) => {
      s.dmgReduction = Math.min(0.8, s.dmgReduction + 0.12);
      s.maxHpMul *= 1.08;
    },
  },
  {
    id: 'zishou_jinyin',
    name: '자수금인',
    nameEn: 'Purple-Cord Gold Seal',
    hanja: '紫綬金印',
    desc: '골드 +35%, 경험치 +15%',
    descEn: 'Gold +35%, XP +15%',
    lore: '금 인장에 자줏빛 인끈을 꿰었다. 조정 상층의 격을 말없이 증언하는 물건으로, 끈의 빛깔 하나가 곧 명령이 되어 사람을 부린다.',
    loreEn: 'A gold seal strung with a purple cord. It testifies in silence to the highest rank at court — the color of the cord alone becomes a command that moves men.',
    apply: (s) => {
      s.goldMul *= 1.35;
      s.xpMul *= 1.15;
    },
  },
  {
    id: 'yin_yin',
    name: '은인',
    nameEn: 'Silver Seal',
    hanja: '銀印',
    desc: '골드 +25%, 최대 체력 +8%',
    descEn: 'Gold +25%, Max HP +8%',
    lore: '희게 닦인 은 인장에 푸른 인끈이 드리웠다. 군현을 다스리는 자의 표식이라, 이를 허리에 찬 자 앞에서는 아랫것의 말이 절로 낮아진다.',
    loreEn: 'A polished silver seal hung with a blue cord. It is the token of one who governs a commandery — before its bearer, lesser tongues lower of their own accord.',
    apply: (s) => {
      s.goldMul *= 1.25;
      s.maxHpMul *= 1.08;
    },
  },
  {
    id: 'jiuzhang_suanshu',
    name: '구장산술',
    nameEn: 'Nine Chapters',
    hanja: '九章算術',
    desc: '픽업 반경 +30%, 경험치 +15%',
    descEn: 'Pickup radius +30%, XP +15%',
    lore: '토지 측량과 곡물 환산, 세역과 운송의 셈법을 아홉 장에 묶은 산학의 경전. 펼쳐 읽은 자에게는 시세와 됫박의 속임수가 어디서 새는지 환히 드러난다.',
    loreEn: 'The mathematical classic binding land survey, grain conversion, tax and transport into nine chapters. To one who has read it, wherever a false price or short measure leaks is laid bare.',
    apply: (s) => {
      s.pickupMul *= 1.3;
      s.xpMul *= 1.15;
    },
  },
  {
    id: 'sima_fa',
    name: '사마법',
    nameEn: 'Methods of the Sima',
    hanja: '司馬法',
    desc: '광역 +12%, 최대 체력 +10%',
    descEn: 'Area +12%, Max HP +10%',
    lore: '군법과 진형을 다룬 옛 병서로, 글이 메말라 명령처럼 짧다. 읽으면 군을 부리는 법도가 차곡차곡 쟁여져, 어지러운 판에서도 무엇을 먼저 끊을지 셈하게 된다.',
    loreEn: 'An old treatise on military law and formation, its prose dry and terse as an order. Read it, and the discipline of commanding troops stacks up within — even in chaos one reckons what to cut down first.',
    apply: (s) => {
      s.areaMul *= 1.12;
      s.maxHpMul *= 1.1;
    },
  },
  {
    id: 'bingfa_chaolu',
    name: '병법 초록',
    nameEn: 'Tactics Miscellany',
    hanja: '兵法抄錄',
    desc: '경험치 +20%, 광역 +10%',
    descEn: 'XP +20%, Area +10%',
    lore: '여러 손에서 베껴 모은 잡록이라 글씨체가 장마다 다르다. 그래도 행간을 더듬다 보면 남의 패전이 제 머릿속에서 한 수의 분별로 굳는다.',
    loreEn: 'A miscellany copied by many hands, its script changing page to page. Yet feel along between the lines, and another’s defeat hardens in your mind into a single stroke of discernment.',
    apply: (s) => {
      s.xpMul *= 1.2;
      s.areaMul *= 1.1;
    },
  },
  {
    id: 'baiyu_pei',
    name: '백옥패',
    nameEn: 'White Jade Pendant',
    hanja: '白玉佩',
    desc: '체력 재생 +1/s, 이동속도 +8%',
    descEn: 'HP regen +1/s, Move speed +8%',
    lore: '서리빛 도는 흰 옥편을 끈으로 꿰어 허리 양옆에 드리운 묶음. 걸을 때마다 맑게 부딪쳐 그 소리가 사람보다 먼저 당도하니, 차림이 거칠어도 발걸음이 격을 발설한다.',
    loreEn: 'Frost-pale jade tablets strung and hung at either side of the waist. They chime clear with each step so the sound arrives before the man — coarse dress and all, the gait betrays his rank.',
    apply: (s) => {
      s.hpRegen += 1.0;
      s.speedMul *= 1.08;
    },
  },
  {
    id: 'shuanghuan_pei',
    name: '쌍환패',
    nameEn: 'Twin-Ring Pendant',
    hanja: '雙環佩',
    desc: '투사체 +1, 사거리·투사체 속도 +10%',
    descEn: 'Projectiles +1, Range & projectile speed +10%',
    lore: '두 고리를 위아래로 이어 늘어뜨린 옥. 한 고리가 울면 다른 고리가 받아 부딪는 소리가 겹으로 길게 끌리니, 마주한 자가 함부로 값을 깎지 못한다.',
    loreEn: 'A jade of two rings hung one below the other. When one rings the other answers, the chime doubling and drawing long — so none who faces it dares haggle down its worth.',
    apply: (s) => {
      s.projectileBonus += 1;
      s.rangeMul *= 1.1;
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
