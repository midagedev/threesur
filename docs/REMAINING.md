# 남은 작업 인수인계 (2026-07-13 세션 종료 시점)

> 다음 세션 재개 시 이 문서가 단일 진실 원천. 서브에이전트는 반드시 Opus 모델로 생성하고,
> 팀 리드(Fable)는 설계·지시·검수만 담당한다. 파일 소유권 분리 후 병렬 배정 권장.

## 현재 상태 스냅샷

- 마지막 커밋: `56ff7ea` (시네마틱 카메라 모듈, **배선 전** — 게임에서 아직 비활성)
- 라이브: https://midagedev.github.io/threesur/ (main 푸시 = 자동 배포, ~40초)
- **작업트리 미커밋**: `battlefieldMap.ts`, `markers.ts` — map-castle 레인(성곽 구역)이 작업 중이던 중간 산출물. 완성 보고 못 받음. 재개 시 diff 검토 후 이어가거나 리셋 판단.
- 미커밋 스크립트: `scripts/qa_*.mjs`, `playtest_*.mjs`, `hitcap/hurtcap.mjs` 등 QA/검증 도구 — 커밋해도 무방.
- 동결 QA 서버: scratchpad `qa-freeze` git worktree (HEAD 고정, `npx vite --port 5189`). 세션 종료로 죽었을 것 — 재개 시 `git worktree list` 확인, 필요시 재생성: `git worktree add <dir> HEAD && ln -s <repo>/node_modules <dir>/ && cd <dir> && npx vite --port 5189`.

## 작업 1 (최우선, 소규모): #14 시네마틱 카메라 배선

cinematics.ts는 커밋됐지만 어디서도 import되지 않아 트리셰이크됨. 아래 스니펫을 run.ts/main.ts에 적용하면 활성화된다 (cine-camera 레인이 검증 완료한 정확한 스니펫 — 라인 번호는 56ff7ea 기준, 밀렸을 수 있으니 주변 코드로 위치 확인):

```
===== src/game/run.ts =====
[1] import 추가 (line 3 `import type { CameraRig }...` 다음)
    import { Cinematics } from '../gfx/cinematics';
[2] 필드 추가 (line ~110 `private readonly rig: CameraRig;` 다음)
    private readonly cinematics: Cinematics;
[3] 생성 (생성자 line 208 `this.rig = rig;` 다음)
    this.cinematics = new Cinematics(rig);
[4] 보스 등장 콜백에서 rig.cinematic 제거 (line 263 삭제)
    삭제: this.rig.cinematic(-0.12); // 보스 등장 시네마틱 줌인
    (팬은 [10] checkBossSpawn에서 처리 — 콜백의 banner/sayHero/audio는 유지)
[5] 무쌍 발동 (line 555 교체)
    this.rig.cinematic(-0.16);  →  this.cinematics.onMusouStart();
[6] 대시 (line 594~595 두 줄 교체 — 선택)
    this.rig.cinematic(-0.06); this.rig.punchFov(1.5);  →  this.cinematics.onDash();
[7] 무쌍 종료 감지 (line 682 교체)
    this.musou.update(dt, this.ctx, this.player);
    →  if (this.musou.update(dt, this.ctx, this.player)) this.cinematics.onMusouEnd();
[8] 대량 퇴치 킬캠 (line 699~702 frameKills 블록, addTrauma 다음 추가)
    if (this.frameKills >= 12) {
      this.cinematics.onMassKill(this.frameKills);
      this.hitstop(160, 0.4); // 킬캠 동반 소프트 슬로우(선택)
    }
[9] 보스 처치 (handleKill 보스 분기, line 949 `this.rig.addTrauma(0.9);` 다음)
    this.cinematics.onBossDeath(x - this.player.x, z - this.player.z);
[10] checkBossSpawn 전체 교체 (line 790~802) — 스폰 후 보스 방향 팬:
  private checkBossSpawn(): void {
    if (this.boss.active) return;
    let spawned = false;
    if (!this.bossFlags.b3 && this.gameTime >= 180) {
      this.bossFlags.b3 = true;
      this.boss.spawn('yuanshao', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
      spawned = true;
    } else if (!this.bossFlags.b6 && this.gameTime >= 360) {
      this.bossFlags.b6 = true;
      this.boss.spawn('dongzhuo', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
      spawned = true;
    } else if (!this.bossFlags.b9 && this.gameTime >= 540) {
      this.bossFlags.b9 = true;
      this.boss.spawn('lvbu', this.gameTime / 60, this.ctx, this.player.x, this.player.z);
      spawned = true;
    }
    if (spawned && this.boss.idx >= 0) {
      this.cinematics.onBossSpawn(
        this.enemies.x[this.boss.idx] - this.player.x,
        this.enemies.z[this.boss.idx] - this.player.z,
      );
    }
  }
[11] (a) 스킵: line 550 `if (this.state === 'paused') return;` 다음
    if (this.cinematics.wantsSkipInput &&
        (this.input.move.x !== 0 || this.input.move.z !== 0 || this.input.isDown('Space'))) {
      this.cinematics.skip();
    }
    (b) 구동: line 733 `this.rig.update(...)` 바로 앞
    this.cinematics.update(dt);
[12] 런 리셋 (resetPools, line ~427 `this.gateBreachFx.reset();` 다음)
    this.cinematics.reset();
[13] PiP 트리거 노출 (public 메서드)
    consumeReplayTrigger(): boolean { return this.cinematics.consumeReplayTrigger(); }

===== src/main.ts =====
[M1] Loop 콜백, line 203 `pipeline.setMusou(...)` 다음
    if (scene === 'run' && run.consumeReplayTrigger()) pipeline.playReplay();
```

주의: 빌보드 기울기(-ELEVATION) 때문에 궤도 회전이 크면 스프라이트 스큐 — 이미 cinematics.ts 안에서 제한됨(무쌍 ≤23°, 보스 처치 35°, 과하면 `BOSS_DEATH_AZI` 하향).
배선 후 검증: 무쌍 발동 연속 프레임, 3분 보스 등장 팬, 보스 처치 PiP 리플레이.

## 작업 2: 성곽 구역 (#12 후속, map-castle 레인 미완)

- 스펙: 정적 성곽 구역 1곳(성벽 2~3줄 + 폭 8m+ 성문 2개 + 안뜰, 스폰 원점에서 40~60m), 이름표 "낙양 외성 洛陽外城"(MarkerLayer), 깃발 버텍스 애니. 적 뭉침 방지: 구역 내 flow-field 활성 또는 넓은 성문+벽 슬라이드 중 봇 테스트로 선택.
- 작업트리의 battlefieldMap.ts/markers.ts 미커밋 diff가 이 작업의 중간 상태. buildCastle/buildBanners 함수가 만들어지다 만 상태일 수 있음.
- 완료 기준: 성문으로 적이 자연스럽게 유입, 벽 밖 무한 뭉침 없음(1분 방치 분포), 성곽 구역 전투 fps 유지.

## 작업 3: #18 무쌍(오의) 스펙터클 강화

- 전제: 작업 1(#14 배선) 완료 후 musou.ts 수정 가능.
- phase2-combat이 effects.ts에 프리미티브 선행 구축 중이었음(커밋 안 됨 — 재개 시 effects.ts diff 확인).
- 스펙 (DESIGN.md 0절 원칙 하): 발동 시 장수 문장 한자 지면 데칼(龍/義/蛇/卦/弓/戟) + light-field 대형 광원, 지속 중 테마색 광원 추종. 장수별: 조운 잔상 리본+경로 균열+별 문양 / 관우 청록 화염 트레일+확장 원형 균열 / 장비 시차 3중 충격파+먼지 웨이브 / 제갈량 볼트 연쇄+회전 팔괘진 문양 / 황충 유성 화살 포물선 낙하 / 여포 화염 벽 잔류+말발굽 불꽃. 종료 대폭발 공통.
- light-field 동시 상한(12) 내 무쌍 광원 우선순위. 검증: 장수 6명 각각 발동 스크린샷 + 60fps.

## 작업 4: #19 브라우저 로케일 한/영 지원 (오너: "이것까지 하면 진짜 끝")

- src/core/i18n.ts: navigator.language 기반 ko/en + 타이틀 수동 토글(localStorage).
- 범위: 전 UI 문자열(타이틀/선택/레벨업 카드/HUD/결과/상점/도감/업적/공유카드/일시정지/이름표/조작 안내) + 군웅전 대사 12인 영어 번역(톤 유지) + 콤보 배너(한자 유지+영문 서브).
- 한자(一騎當千, 無雙, 天下統一)는 양 언어 공통 테마 요소 — 영어 모드는 한자+영문 병기.
- phase3-ui가 1단계(screens.ts/dialogue.ts/shareCard.ts/achievements.ts 사전화) 작업 중이었음 — 재개 시 상태 확인. 2단계는 hud.ts/levelup.ts/데이터 파일(weapons/passives/relics/heroes) 확장.
- 검증: ko/en 타이틀·선택·레벨업·결과 스크린샷, 영어 오버플로 확인.

## 작업 5: QA 잔여 측정 + 확정 수정

- [중] 밸런스: 블라인드 봇이 1:46 전사 / 초반 XP 과다(1:44에 Lv8·383킬) 신호 — 동결 서버에서 setTime/damagePlayer 훅으로 3~6/6~10분 커브, 보스전 소요시간 측정 후 스폰율·XP 커브 조정 판단.
- [하] 모바일 HUD: HP바 우측 끝과 무쌍 버튼 ~19×3px 겹침(390×844) — style.css에서 HP바 max-width 축소 또는 버튼 위치 조정 (phase3-ui 승인됨, 미완).
- 부활→재사망 엣지: 이제 `__GAME_TEST__.damagePlayer(n)` 훅 있음(7fba5f9) — 재검증.

## 작업 6: #17 최종 감사 + 폴리시 + 배포 (오너 명시 최종 게이트)

- **threejs-game-skills 체크리스트 기준 전면 감사** (.claude/skills/):
  - 그래픽: aaa-visual-scorecard(assets/scorecard-anchors 앵커 이미지 3종 대비 채점), aaa-game-quality-gate, material-lighting-quality, technical-art-quality, performance-safe-visual-detail
  - 게임플레이: game-feel, game-design-level-design, new-game-definition-of-done
  - UI: hud-readability, responsive-ui-fit, mobile-input, game-ui-quality
  - QA/릴리스: playtest-qa, bot-playtest, visual-verification, release, performance-profile
- 각 항목 pass/fail 판정(스크린샷·캔버스 검사·봇 플레이 증거 기반) → fail 폴리시 → 재검증 → main 푸시 배포 → 라이브 URL 봇 테스트 마감.
- 감사는 Opus 에이전트에 위임하되 스코어카드 판정 스크린샷은 리드가 직접 검수.

## 파일 소유권 맵 (병렬 재개 시)

| 레인 | 파일 |
|---|---|
| gameplay/gfx | run.ts(단독), effects, particles, projectiles*, enemies, player, sprites, hud, audio, damageText, lightField, decals, musou(#14 배선 후) |
| camera | camera.ts, cinematics.ts, renderer.ts(PiP) |
| map | battlefieldMap.ts, markers.ts, ground.ts, castleZone(신규) |
| UI/i18n | screens.ts, style.css, dialogue.ts, shareCard.ts, achievements.ts, joystick.ts, i18n.ts(신규) |

## 운영 메모

- 봇 테스트는 GPU 필수: `chromium.launch({ args: ['--use-angle=metal'] })` (SwiftShader는 5fps로 오탐).
- 성능 게이트: 데스크톱 적 300+ 60fps, draw calls <120. 현재 여유(347마리 120fps/87콜).
- 커밋은 레인별 선별 커밋(`git add <소유 파일>`)으로 병렬 중간 산출물 섞임 방지.
- 공개 빌드는 __GAME_TEST__ 차단됨 — 훅 검증은 dev 모드에서.
- 오너 방향 원칙(DESIGN.md 0절): 손맛+3D 스펙터클 우선, 플레이 방해 금지, 가독성 게이트(적탄 구분) 유지, 블룸 재폭주 금지.
