<<<<<<< HEAD

# ✨ Fandom-K

> **"Fandom-K는 좋아하는 아이돌 후원, 투표, 차트 불러오기 기능을 제공하는 팬덤 플랫폼입니다."**

---

## 🧑‍💻 Developers

<table>
  <tr>
    <th><a href="https://github.com/tansxx">@강희정</a></th>
    <th><a href="https://github.com/KingsMinn">@김승민</a></th>
    <th><a href="https://github.com/huiseong29">@김희성</a></th>
    <th><a href="https://github.com/LeeJiEuns">@이지은</a></th>
  </tr>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/159680008?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/134246428?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/175691313?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/87702194?v=4" width="100"></td>
  </tr>
</table>

---

## 🔗 배포 주소
[팬덤케이 바로가기](https://fandom-k-eight.vercel.app/)

## 📅 프로젝트 기간
2025년 3월 6일 ~ 2025년 3월 20일

---

## 📌 주요 기능
### 랜딩페이지
![랜딩페이지](https://github.com/user-attachments/assets/3ea4b6b1-f70b-452a-b922-834303ea3f9b)

### 후원을 기다리는 조공 및 이달의 차트 페이지
![후원을 기다리는 조공 및 이달의 차트](https://github.com/user-attachments/assets/7e148704-d8c8-41b8-90a7-b0759b241f3c)

### 크레딧 충전 모달
![크레딧 충전](https://github.com/user-attachments/assets/3cf51830-841d-4ccb-85c6-79c48bbc7896)

### 후원하기 상세 페이지
![후원하기 상세 페이지](https://github.com/user-attachments/assets/98b8b0ff-51da-4155-92c7-24ed3fdcabb6)

### 이달의 여자/남자 아이돌 투표 모달창
![이달의 여자,남자 아이돌 투표 모달창](https://github.com/user-attachments/assets/6b3c6b0c-3297-487d-9d0f-2fa49d8fde64)

### 마이페이지
![마이페이지](https://github.com/user-attachments/assets/b28e0e33-ffa6-4242-9004-f9eeaccc93d7)


---

## 🛠️ 기술 스택 (Tech Stack)

| 역할 | 사용 기술 |
|--|--|
| Language | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white) ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| Build Tool | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| Router | ![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) |
| Styling | ![StyledComponents](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white) |
| API | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square) |

<br />

## 📂 폴더 구조 (Folder Structure)

```bash
codeit-FE14-Fandom-K
│
├── .github          # Github 설정
│
├── public/          # 정적 파일들을 저장
│    └── vite.svg			
│
├── src/             # 소스 코드를 저장하는 디렉터리
│    ├── apis/       # API 요청
│    │
│    ├── assets/     # 이미지, 폰트 등 저장
│    │    ├── icons/
│    │    └── images/
│    │
│    ├── components/ # 재사용 가능한 UI 컴포넌트
│    │    ├── custom_button/
│    │    ├── error/
│    │    ├── footer/
│    │    ├── header/
│    │    ├── idol/
│    │    ├── layout/
│    │    └── modal/
│    │
│    ├── costants/   # 상수 값 관리
│    │
│    ├── contexts/   # React Context API 관련 파일
│    │
│    ├── hooks/      # 커스텀 훅
│    │
│    ├── pages/      # 라우트 단위 페이지 컴포넌트
│    │    ├── landing_page/
│    │    ├── list/
│    │    ├── mypage/
│    │    └── not_found_page/
│    │
│    ├── styles/     # 공통 GlolbalStyle & Theme 관리
│    │
│    └── utils/      # 유틸리티 함수 모음
│
├── package-lock.json
│
├── package.json
│
└── README.md
```

---

## 📂 폴더/파일명 네이밍 컨벤션

| 대상 | 규칙 | 예시 |
|--|--|--|
| 폴더명 | 케밥케이스 (kebab-case) | components, user-profile |
| 컴포넌트 파일명 | 파스칼케이스 (PascalCase) | UserProfile.jsx |
| 스타일 파일명 | 케밥케이스 + .styles.js | user-profile.styles.js |
| 이미지/아이콘 파일명 | 케밥케이스 | logo-icon.png, profile-default.png |
| 함수명/변수명 | 카멜케이스 (camelCase) | fetchUserData, userList |
| 환경변수 | 대문자+스네이크케이스 | REACT_APP_API_URL |

---

## 🌿 브랜치 네이밍 컨벤션

| 브랜치 종류 | 네이밍 규칙 | 예시 |
|--|--|--|
| 기능 개발 | feature/{작업-설명} | feature/login-ui |
| 버그 수정 | fix/{버그-설명} | fix/login-button-bug |
| 핫픽스 | hotfix/{긴급수정-설명} | hotfix/main-build-error |
| 문서 수정 | docs/{문서-설명} | docs/readme-update |

---

## 💻 Commit Convention

### 🔗 기본 구조
```
[타입] 제목

본문

꼬리말
```

### 📑 Commit Type
| 태그 | 의미 |
|--|--|
| Feat | ✨ 새로운 기능 추가 |
| Fix | 🐛 버그 수정 |
| Docs | 📚 문서 수정 |
| Style | 💄 포맷팅, 세미콜론 누락 등 |
| Refactor | 🔨 리팩토링 |
| Test | ✅ 테스트 코드 추가 |
| Chore | 🔧 설정, 빌드 변경 등 |

### ✍️ 제목 규칙
- 50자 이하
- 마침표❌ 특수기호❌
- 명확하고 간결하게

### 📝 본문 규칙
- 72자 이하 줄바꿈
- 변경 이유, 목적을 자세히 기록

### 📎 꼬리말 규칙
- 이슈번호 연결: `Resolves: #이슈번호`
- 참고 이슈는 `Ref: #이슈번호`

### 📖 Commit 예시
```
✨ Feat: 회원가입 화면 및 로직 추가

- 회원가입 화면 UI 구현
- 사용자 입력 검증 로직 추가
- API 통신 연결

Resolves: #12
Related to: #8
```

### 🌈 이모지 가이드
| 이모지 | 의미 |
|--|--|
| 🎨 | 코드 형식/구조 개선 |
| 📰 | 새 파일 추가 |
| ✨ | 새로운 기능 |
| 📝 | 사소한 변경 |
| 💄 | UI / 스타일 수정 |
| 🐎 | 성능 개선 |
| 📚 | 문서 수정 |
| 🐛 | 버그 수정 |
| 🚑 | 핫픽스 |
| 🔥 | 코드 삭제 |
| 🚜 | 구조 변경 |
| 🔨 | 리팩토링 |
| 💎 | 새 릴리즈 |
| 🔖 | 버전 태그 |
| 🚀 | 배포 |

---

## 🍳 PR Convention (Pull Request 규칙)

| 항목 | 설명 |
|--|--|
| Summary | 간단 변경 요약 |
| Changes | 주요 변경 요약 |
| Checklist | ✔️ 컨벤션 준수 ✔️ 테스트 ✔️ 설명 ✔️ 브랜치 확인 |
| Test Plan | 테스트 방법 및 결과 |
| Screenshots | UI 변경 시 캡처 필수 |
| Additional | 리뷰어 참고 사항 |

---

## 📲 Issue Convention

| 항목 | 설명 |
|--|--|
| Summary | 작업 요약 |
| Branch Name | `feature/{작업설명}`, `fix/{버그설명}` |
| Due Date | YYYY/MM/DD |
| References | 관련 자료 링크 |
| Checklist | 할 일 리스트 |

---

## 🖊️ Git Flow

| 브랜치명 | 설명 |
|--|--|
| main | 배포 브랜치 |
| develop | 통합 개발 브랜치 |
| feature/* | 기능 개발 브랜치 |

### 💡 작업 흐름
1. 이슈 생성
2. `develop` 최신화
3. `develop`에서 새 `feature` 브랜치 생성
4. 해당 브랜치에서 작업 진행
5. 기능별 커밋 나눠서 작성
6. 작업 완료 후 에러 체크 & push
7. PR 작성하고 코드 리뷰 요청
8. 리뷰 완료 후 develop에 머지

---
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> dadb482 (Feature/project)
