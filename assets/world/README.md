# Retro battlefield world kit

`world-kit-atlas.png`은 2026-07-13에 생성한 12종의 원화를 게임 런타임용으로 가공한 아틀라스다.
`world-kit-atlas-retro.png`은 같은 12종과 셀 순서를 유지하면서 32–48px 캐릭터와 맞도록
큰 픽셀 클러스터·공유 제한 팔레트·굵은 외곽선으로 다시 생성한 실제 런타임 아틀라스다.
`hulao-fortress.png`은 성을 소품 셀에서 분리해 만든 1024×512 대형 호로관 랜드마크다.
`fortress-modules.png`은 같은 화풍의 직선 성벽·사선 측벽·망루·문루·균열·붕괴 모듈 6종이다.

| 셀 | 에셋 |
|---:|---|
| 0–3 | 성벽, 성문, 망루, 목책 |
| 4–7 | 공성 잔해, 군영, 전고, 무너진 성벽 |
| 8–11 | 화약 수레, 만두 수레, 군신 사당, 봉화대 |

생성 방향은 “삼국시대 야간 전장, 2.5D 정면 사선 시점, 투명 배경용 단일 오브젝트,
1990년대 전략 RPG식 제한 팔레트 픽셀 아트, 검은 외곽선, 현대 UI/문자 없음”으로 통일했다.
각 원화의 배경을 알파로 정리한 뒤 `scripts/process_world_sprites.py`로 128px 셀에 맞추고,
56색 양자화와 nearest 리샘플을 거쳐 4×4 / 512×512 PNG로 묶었다.

런타임 셀 순서는 `src/gfx/worldKit.ts`의 `WORLD_ASSETS`가 소스 오브 트루스다.
호로관 원화는 `scripts/process_landmark_sprite.py`로 크로마키 제거·96색 양자화·투명 여백 정리를 거쳤다.
모듈 시트는 `scripts/process_fortress_modules.py`로 4×2 / 1024×512 런타임 아틀라스로 가공한다.
