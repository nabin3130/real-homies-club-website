# SPEC — Place Your Logo / Phase 1

상태: Phase 1 결제 UI 데모 및 개발/Vercel Preview 전용 확인 페이지 미리보기 명세. 실제 결제·메일 연동은 활성화하지 않는다.
기준일: 2026-10-08
저장소: `nabin3130/real-homies-club-website`
대상 브랜치: `feature/place-your-logo`

## 1. 근거와 작업 범위

- 기존 `SPEC.md`와 `FLOW.md`를 기준으로 기존 화면 구조와 보호 규칙을 유지한다.
- 원본 `Untitled presentation.pptx`의 와이어프레임은 배치 참고 자료다. 최신 사용자 요구사항이 이전 문서·원본 이미지보다 우선한다.
- 이전 ChatGPT 대화의 답변 본문은 참조 표식으로만 반환되어 확인할 수 없었다. 이번 사용자 요청에 명시된 확정 내용을 적용한다.
- 이번 산출물은 두 명세 파일이다. UI 구현은 별도 요청이 있을 때만 진행하며, 구현과 문서 변경 모두 `feature/place-your-logo`에서만 수행한다. main 병합 및 production 배포는 하지 않는다.
- Phase 1은 결제 UI 데모다. Stripe, Link, Crypto의 실제 결제·송금·검증·메일 발송을 활성화하지 않는다. 데모 pending을 실제 거래로 취급하지 않는다.
- 향후 실제 결제 요구사항은 아래 별도 절에 보존한다. 미정 정책이나 미연동 기능을 가짜 성공으로 채우지 않는다.

## 2. 원본 이미지와 화면 대응

기존 문서에 기록된 원본은 5개 슬라이드이며, 1번은 빈 슬라이드다. 아래 이미지는 기존 추출물을 그대로 참고한다. 손그림의 숫자·화살표는 주석이며 UI 요소로 복제하지 않는다.

| 슬라이드 | 화면 | 기존 PNG |
| --- | --- | --- |
| 2 | Home | [02-home.png](wireframes/02-home.png) |
| 3 | PlaceYourLogo 기본 화면 | [03-place-your-logo.png](wireframes/03-place-your-logo.png) |
| 4 | Payment Shared Panel | [04-payment-panel.png](wireframes/04-payment-panel.png) |
| 5 | AfterConfirmation | [05-after-confirmation.png](wireframes/05-after-confirmation.png) |

Q&A 전용 원본 와이어프레임은 없다. Google Slides 및 원본 PPTX는 수정하지 않는다.

## 3. 확정 변경과 이전 요구사항의 대체

| 항목 | Phase 1 확정 요구사항 |
| --- | --- |
| Preview | 9:16 샘플 이미지 배경. 왼쪽 위에 정사각형 1:1 로고 영역, 로고는 contain |
| 상품 | $10 USD 일회성. 로고 1개를 영상 1개에 배치하고 동일 영상을 TikTok / YouTube / Instagram에 교차 게시 |
| 가격 위치 | 입력 화면의 결제 옵션 위에 가격 표시, Payment 패널에도 합계 표시 |
| Step 1 CTA | 이전 `Confirmed`를 `Continue to Payment`로 교체. 결제 완료를 뜻하지 않음 |
| Q&A | 아래 7개 FAQ를 확정 콘텐츠로 사용 |
| Crypto | 데모 10 USDT, TRON / TRC-20, 주소 placeholder `T...f4a1`, `Payment Pending` |
| 결제 경계 | 실결제 없음. 주소 복사 기능 없음. 데모 성공 전환 없음 |
| 주요 feature CTA | 배경 #7C3AED, hover #171717, 흰색 글자, 200ms transition |
| 화면 구조 | Payment / Q&A는 동일 Shared Panel, AfterConfirmation은 별도 보호 페이지 |

## 4. 화면 요구사항

### Home

- 기존 헤더 왼쪽 로고와 내비게이션을 유지한다.
- 헤더 오른쪽 끝의 `Place Your Logo` 버튼으로 `/PlaceYourLogo`에 진입한다.
- 해당 feature CTA에는 아래 확정 색상 규칙을 적용한다. 기존 폰트, 버튼 높이·패딩·둥근 모서리 스타일은 재사용한다.
- Home의 다른 콘텐츠와 기능에는 불필요한 변경을 하지 않는다.

### PlaceYourLogo — Step 1

- 왼쪽 Preview는 가로:세로 9:16 비율의 샘플 **이미지**다. Phase 1에서 영상 재생이나 영상 생성은 요구하지 않는다.
- 업로드 로고는 Preview 왼쪽 위의 고정된 정사각형 1:1 영역에 즉시 표시한다.
- 로고는 `object-fit: contain` 또는 동등한 방식으로 원래 비율을 유지한다. 늘리거나 자르지 않는다. 로고 자체가 정사각형일 필요는 없다.
- 정확한 샘플 이미지, 정사각형 크기와 상단·왼쪽 여백은 U03에 남긴다. 드래그·크기 조절·위치 선택 기능을 추가하지 않는다.
- 오른쪽 입력 순서: `Type your email` → `Insert Your Logo` → 가격 안내 → `Choose your payment option` → `Continue to Payment`.
- 허용 로고 형식은 PNG / JPEG / SVG. 업로드 제한과 SVG 안전 처리의 세부 정책은 U02다.
- 가격 안내: `$10 USD — one-time payment`. 로고 1개 / 영상 1개 / TikTok·YouTube·Instagram 동일 영상 교차 게시라는 상품 범위를 함께 표시한다. 플랫폼별 $10이나 반복 구독으로 표현하지 않는다.
- 결제 옵션은 Stripe / Link / Crypto 라디오 버튼. 기본 선택값은 U02다.
- 이메일, 사용 가능한 로고, 결제 옵션의 필수값을 검증한 뒤 `Continue to Payment` 클릭 시 Payment 패널을 연다. 오류가 있으면 현재 화면에 남고 오류를 안내한다.
- 이 버튼은 데모 패널 진입이다. 결제 세션 생성·청구·송금·결제 완료 처리를 하지 않는다.
- 입력 영역 상단 오른쪽 `?` 버튼으로 Q&A 패널을 연다. FAQ 확인에는 폼 유효성 검사가 필요하지 않다.

### Feature CTA 스타일

- `Place Your Logo`, `Continue to Payment` 및 이 feature에 속한 주요 CTA의 기본 배경은 `#7C3AED`다.
- hover 배경은 `#171717`, 글자색은 기본과 hover 모두 흰색 `#FFFFFF`다.
- 배경·글자색 전환 시간은 `200ms`다.
- 기존 버튼의 크기·폰트·형태를 재사용하고 키보드 focus 표시를 유지한다. hover 스타일 때문에 focus 표시를 제거하지 않는다.
- Close(X), `?`, 라디오 버튼 등 보조 컨트롤이나 사이트의 모든 버튼까지 일괄 변경하는 요구사항은 아니다.

### Shared Panel

- 표시 상태는 `closed | payment | qa`. 초기값은 `closed`, 한 번에 한 콘텐츠만 표시한다.
- Payment와 Q&A는 `/PlaceYourLogo` 내부의 같은 오른쪽 확장 영역을 사용한다. 별도 Payment/Q&A 페이지나 새 탭을 만들지 않는다.
- 패널이 열려도 기본 Preview와 입력 화면을 볼 수 있도록 레이아웃을 조정한다.
- 다른 패널을 열면 같은 영역의 콘텐츠를 교체한다. 상단 Close(X)로 닫는다.
- 닫기·교체 후 이메일, 업로드 로고, 결제 선택값을 유지한다.
- 패널 표시 상태와 결제 상태는 분리한다. 패널 전환·닫기를 결제 취소·완료·초기화로 취급하지 않는다.
- Q&A에서 기본 폼의 `Continue to Payment`로 Payment를 다시 열 수 있다. 새 복귀 버튼은 확정하지 않았다(U12).
- 모바일에서도 겹침·잘림을 방지한다. 구체적인 배치·breakpoint는 U10이며 별도 전체 화면 페이지로 바꾸지 않는다.

### Payment — Step 2, Phase 1 데모

- 선택한 Stripe / Link / Crypto의 데모 UI를 같은 패널에 표시한다. 데모임을 명확히 알리고 실제 결제를 진행하지 않는다.
- 패널에 상품 요약과 `Total: $10 USD`를 표시한다. 입력 화면의 가격과 일치해야 한다.
- Stripe / Link: live checkout, 실제 결제 세션 생성, 결제 제공자 리다이렉트, 청구를 실행하지 않는다.
- Crypto: 금액 `10 USDT`, 네트워크 `TRON`, 토큰 표준 `TRC-20`, 주소 placeholder `T...f4a1`, 상태 `Payment Pending`을 표시한다.
- `T...f4a1`은 실제 송금에 사용할 수 없는 미정 주소다. 실주소로 바꾸거나 송금을 유도하지 않는다.
- 주소 Copy 버튼, clipboard 동작, 실제 송금을 위한 QR, wallet 연결·송금 실행 기능을 제공하지 않는다.
- 데모 안내는 실제 거래 검증 중이라는 오해나 영수증 발송 약속을 만들지 않는다. 예: `Demo only. No live payments. The address is a placeholder.`
- 10 USDT는 확정된 데모 표시값이며 실결제 환율·수수료·정산 정책을 확정한 것이 아니다.
- pending은 데모 표시 상태다. 타이머, 클릭, 패널 재진입, 송금 주장으로 `Payment Confirmed`나 AfterConfirmation으로 전환하지 않는다.

### Q&A — 확정 FAQ 7개

다음 영문 질문·답변을 Q&A 패널에 아래 순서로 제공한다. 내용은 사용자 지정 상품 설명이며, 검증된 시청자 통계나 성과 보장으로 확장하지 않는다.

1. **Where will my logo appear?**
   Your logo will appear in the upper-left corner of the video, inside a square placement area. Your logo's original proportions will be preserved.
2. **Who watches your videos?**
   Our TikTok audience is primarily in Southeast Asia, with viewers also in Australia and Nigeria. Our YouTube audience is primarily in South Korea.
3. **How much does it cost?**
   It costs $10 USD as a one-time payment for one logo in one video. The same video will be cross-posted to TikTok, YouTube, and Instagram.
4. **When will my logo be placed?**
   Your logo will be assigned to the next video after your payment is confirmed. The exact posting date and time are not guaranteed in advance.
5. **Can I choose the video?**
   No. Your logo will be assigned to the next video; you cannot choose a specific video.
6. **Which logo file formats are accepted?**
   PNG, JPEG, and SVG are accepted.
7. **Can I get a refund?**
   No refunds are offered, except where required by law.

FAQ 4는 실제 결제 활성화 이후의 서비스 규칙이다. Phase 1 데모의 pending은 영상 배정·게시 예약을 발생시키지 않는다. 법률 예외를 삭제하거나 절대적인 환불 불가로 바꾸지 않는다. Instagram 시청자 지역, 조회수 보장, 노출 기간 등의 추가 약속은 없다.

### AfterConfirmation — 별도 보호 페이지

- 경로는 `/AfterConfirmation`. Payment/Q&A 패널과 분리된 전체 화면이다.
- 기존 홈페이지 헤더, 폰트, 디자인을 유지하며 중앙 메시지 레이아웃을 사용한다.
- Preview, 입력 폼, Payment/Q&A 패널을 표시하지 않는다. 불필요한 버튼·카드·애니메이션을 추가하지 않는다.
- 유효한 결제 완료 기록을 서버에서 확인한 경우에만 완료 안내를 표시한다. 진입·새로고침 모두 재확인한다.
- 직접 URL 접근, 클라이언트 상태, URL 파라미터, 데모 pending만으로 완료 페이지를 승인하지 않는다.
- Phase 1 데모에는 실제 완료 승인 경로가 없다. 개발/Vercel Preview 전용 미리보기는 아래 별도 데모 규칙을 따른다. 유효한 실제 완료 기록이 없으면 실제 완료 메시지를 숨기고 접근 차단 규칙을 유지한다. 무효 접근·조회 실패 UX는 U11이다.
- 실제 일정이 확정되면 `Your logo will be placed on [Date] at [Time].`에 실제 날짜·시간·시간대를 표시한다.
- 일정이 미정이면 임의의 날짜·시간을 생성하지 않는다. 기존 문구 `Payment confirmed! We'll email you once your logo placement date is scheduled.`는 실제 결제 확인과 일정 알림 메일 연동이 있을 때만 사용한다(U08).
- 결제 정보, 이메일, 업로드 로고, 결제 완료 상태는 유효한 완료 기록과 연결해 유지한다. 저장·접근 방식은 U11이다.

## 5. 향후 실제 결제 요구사항 — Phase 1에서 활성화 금지

기존 결제·영수증·완료 보호 규칙을 보존한다. 아래 기능은 별도 구현 요청과 미정 사항 결정 후에만 활성화한다.

- Stripe / Link는 기존 연동 구조를 확인해 재사용하고 서버가 제공자의 실제 성공을 검증한다.
- Crypto는 실제 정상 온체인 거래가 검증될 때까지 pending이다. 정상 거래 확인 후에만 confirmed로 판단한다. 거래 해시 입력이나 송금 주장만으로 승인하지 않는다(U06).
- pending 또는 confirmed인 동일 결제에 중복 결제를 생성하지 않는다. 실패·취소·만료·과소 송금·복구 정책은 U07이다.
- 패널을 닫거나 Q&A로 바꿔도 실제 거래 상태를 보존한다. 결과가 도착하면 현재 패널 표시와 독립적으로 처리한다(U12).
- 검증된 성공 후 Shared Panel을 종료하고 독립 AfterConfirmation으로 이동한다. 패널 내 추가 Confirmed 클릭이나 영수증 발송 완료를 이동 조건으로 추가하지 않는다.
- Crypto 영수증에는 실제 금액, 통화, 거래 해시, 결제 일시를 포함하고 입력 이메일로 발송한다. 결제 상태와 메일 발송 상태는 별개이며 실제 발송 근거 없이 발송 완료를 표시하지 않는다(U08).
- 기존 pending 문구 `Your crypto payment is being verified. Once confirmed, we'll send a receipt to your email.` 및 confirmed 문구 `Payment confirmed! Your receipt will be sent to your email.`는 실제 검증·메일 연동 이후에만 사용한다. Phase 1 데모에서는 사용하지 않는다.

## 6. 상태와 데이터 경계

아래는 개념이며 새 DB 필드명·API·스키마를 확정하는 내용은 아니다.

- 폼: 이메일, 업로드 로고 참조, 선택 결제 수단.
- 패널 표시: closed / payment / qa.
- Phase 1: 데모이며 Crypto pending 표시만 존재한다. 실제 결제·영상 배정·메일 발송 기록을 만들지 않는다.
- 향후 결제: 미시작, 처리 중, 확인 대기, 서버 검증 완료, 실패 등. 상세 정책은 U07.
- 영수증: 결제 성공과 독립적인 발송 상태.
- 게시 일정: 실제 확정 여부, 날짜·시간·시간대. next-video 배정과 일정 확정은 다른 상태다.
- 클라이언트 폼 상태와 서버의 유효한 완료 기록을 혼동하지 않는다.

## 7. 미정 사항 및 해결된 항목

| ID | 현재 상태 / 남은 결정 | 구현 경계 |
| --- | --- | --- |
| U01 | 대상 저장소와 브랜치 확정. 구현 시 기존 라우팅·컴포넌트 확인 | 새 스택·라우팅 체계 도입 금지 |
| U02 | 형식 PNG/JPEG/SVG 확정. 용량·해상도 제한, 파일 검사·SVG 안전 처리, 이메일 검증, 오류 문구, 기본 결제 선택 미정 | 세부 정책을 사용자 확정값으로 제시하지 않음 |
| U03 | 9:16 샘플 이미지, 왼쪽 위 1:1 영역, contain 확정. 샘플 asset, 영역 크기·여백 미정 | 위치 이동·크기 조절·영상 생성 기능 추가 금지 |
| U04 | FAQ 7개 해결됨 | 확정 콘텐츠와 순서 사용 |
| U05 | $10 USD 일회성, 로고 1개/영상 1개, 3개 플랫폼 교차 게시 해결됨. 실제 Stripe/Link 상품·세션·결제 식별 설정 미정 | 실결제 활성화 금지, 수량 선택·구독 추가 금지 |
| U06 | 데모 10 USDT / TRON / TRC-20 / T...f4a1 / pending 확정. 실제 주소·검증 주체·확정 기준·환율·수수료 미정 | 실제 송금·Copy·QR·wallet 연결 금지 |
| U07 | 법률상 필수 예외 외 환불 없음 확정. 실패·취소·만료·오송금·중복·재시도·pending 복구 미정 | 임의 자동 환불·재결제·타임아웃 성공 금지 |
| U08 | 영수증/일정 알림 메일, 발신자, 실패 처리, 실제 일정 데이터·시간대 미정 | 가짜 메일 발송·발송 약속·일정 금지 |
| U09 | 기존 완료 안내의 최종 위치 및 ! 아이콘 존치·설명 미정 | Phase 1 데모에 완료 UI 추가 금지 |
| U10 | 모바일 패널 배치·breakpoint·폭 미정. CTA 색·hover·글자·200ms 확정 | Shared Panel 유지, 구체 레이아웃 수치를 확정 요구로 지어내지 않음 |
| U11 | 완료 기록 인증·식별·조회, 무효 접근·조회 실패·뒤로가기 UX 미정 | 보호 유지. URL이나 데모 상태로 완료 승인 금지 |
| U12 | 향후 진행 중 입력 변경·거래 연결·잠금·Q&A 재진입 정책 미정 | 데모에서 거래 생성 금지, 실제 연동 시 중복 결제 방지 |

## 8. 완료 기준

문서 완료: 기존 구조와 보호 규칙, 확정 Phase 1 요구사항, 7개 FAQ, 남은 결정이 SPEC/FLOW 사이에 일치해야 한다.

향후 별도 UI 요청 시 검증할 항목:

- Home feature CTA로 기존 `/PlaceYourLogo`에 진입하며 기존 헤더를 유지한다.
- Preview가 9:16 샘플 이미지이고 로고 영역은 왼쪽 위 1:1이다. 가로·세로 로고 모두 contain으로 비율을 유지한다.
- 가격이 결제 옵션 위에 있고 패널에 $10 USD 합계가 있다. 1개 로고/1개 영상/3개 플랫폼 교차 게시 조건이 일치한다.
- Step 1에 `Continue to Payment`를 사용하고 필수값 오류 시 패널을 열지 않는다.
- Q&A는 확정 FAQ 7개를 표시한다. Payment와 동시에 표시되지 않는다.
- 패널 닫기·교체·재진입 시 입력값을 유지한다.
- Crypto는 10 USDT / TRON / TRC-20 / T...f4a1 / Payment Pending을 표시하며 데모임을 안내한다.
- live 결제 호출·청구·송금·주소 복사·실제 송금 QR·wallet 연결이 없다. 데모에서 완료 전환·영상 배정·메일 발송이 없다.
- 주요 feature CTA가 #7C3AED / hover #171717 / 흰색 글자 / 200ms를 적용하며 키보드 focus가 보인다.
- AfterConfirmation 직접 접근·새로고침·데모 pending에서 실제 완료 메시지가 노출되지 않는다. 개발/Vercel Preview 전용 미리보기는 데모로 명시하며 production에서는 차단한다. 실제 완료를 확인할 수 없으면 승인하지 않는다.
- desktop/mobile에서 Preview·입력·패널이 겹치거나 잘리지 않는다.
- 향후 실제 결제 검증·메일·일정 요구는 Phase 1 데모 테스트 통과와 구분하여 보류로 기록한다.

## Development / Vercel Preview confirmation demo

- Payment 패널에 `Preview Confirmation Page` 링크를 개발 환경 및 Vercel Preview에서만 표시한다. `Continue to Payment`는 계속 Payment 패널을 연다.
- `/AfterConfirmation?preview=1`은 서버 환경 검사를 통과한 경우에만 `Preview / Demo Mode` 화면을 표시한다. production에서는 같은 URL도 기존 접근 차단 화면을 표시한다.
- 이 별도 데모 경로는 결제 확인이나 실제 완료 승인이 아니다. 결제 기록 생성, 메일 발송, 로고 배정, 결제 활성화를 수행하지 않는다. 날짜·시간을 만들지 않는다.
- 일반 `/AfterConfirmation` 접근과 새로고침의 기존 verified-payment 보호 규칙을 유지한다. 실제 서버 결제 확인 연동은 아직 구현되지 않았으며 계속 fail closed 상태다.
