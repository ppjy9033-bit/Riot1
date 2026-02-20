# Riot UI 구현 및 정보 구조(IA) 명세서
###### 본 문서는 프로젝트의 디렉토리 구조가 실제 서비스의 정보 구조와 어떻게 매핑되는지를 정의한 명세서입니다.
## 1. 프로젝트 디렉토리 구조 (Directory Tree)

```
RIOT
├─ css
│  ├─ community.css
│  ├─ index.css
│  ├─ login.css
│  ├─ option.css
│  ├─ order.css
│  ├─ pay.css
│  ├─ reset.css
│  └─ signup.css
├─ images
│  ├─ agree.png
│  ├─ apellios.png
│  ├─ Apple.png
│  ├─ backimage1.jpg
│  ├─ backimage1.png
│  ├─ backimage2.png
│  ├─ backimage3.jpg
│  ├─ barus.png
│  ├─ bg.jpg
│  ├─ blz.png
│  ├─ FackBook.png
│  ├─ favicon.ico
│  ├─ galio.png
│  ├─ Google.png
│  ├─ gwen.png
│  ├─ icn01.png
│  ├─ icn02.png
│  ├─ icn03.png
│  ├─ icn04.png
│  ├─ icn05.png
│  ├─ icn06.png
│  ├─ icn1.png
│  ├─ icn10.png
│  ├─ icn2.png
│  ├─ icn3.png
│  ├─ icn4.png
│  ├─ icn5.png
│  ├─ icn6.png
│  ├─ icn7.png
│  ├─ icn8.png
│  ├─ icn9.png
│  ├─ item1.jpg
│  ├─ item10.png
│  ├─ item11.png
│  ├─ item12.png
│  ├─ item13.png
│  ├─ item14.png
│  ├─ item15.png
│  ├─ item16.png
│  ├─ item17.png
│  ├─ item18.png
│  ├─ item2.png
│  ├─ item3.png
│  ├─ item4.png
│  ├─ item5.png
│  ├─ item6.png
│  ├─ item7.png
│  ├─ item8.png
│  ├─ item9.png
│  ├─ kaisa.png
│  ├─ keit.png
│  ├─ Maokai.jpg
│  ├─ maokai.png
│  ├─ Orianna.jpg
│  ├─ pay1.png
│  ├─ pay2.png
│  ├─ pay3.png
│  ├─ pay4.png
│  ├─ payToss.png
│  ├─ piz.jpg
│  ├─ piz.png
│  ├─ position1.png
│  ├─ position2.png
│  ├─ position3.png
│  ├─ position4.png
│  ├─ pro1.png
│  ├─ pro2.png
│  ├─ pro3.png
│  ├─ pro4.png
│  ├─ pro5.png
│  ├─ pro6.png
│  ├─ pro7.png
│  ├─ profile1.jpg
│  ├─ profile1.jpg.png
│  ├─ Ps4.png
│  ├─ renga.png
│  ├─ Riot-16x16.png
│  ├─ Riot-192x192.png
│  ├─ Riot-32x32.png
│  ├─ Riot-touch-icon.png
│  ├─ riotlogo1.png
│  ├─ riotlogo2.png
│  ├─ riotlogo3.png
│  ├─ spel1.png
│  ├─ spel2.png
│  ├─ spel3.png
│  ├─ spel4.png
│  ├─ talon.png
│  ├─ teemo.png
│  ├─ thresh.png
│  ├─ tier.png
│  ├─ Untitled-1.png
│  ├─ XBox.png
│  ├─ yone.png
│  └─ zed.png
├─ js
│  └─ jquery-3.1.1.min.js
│  └─ script.js
├─ index.html
├─ community.html
├─ login.html
├─ option.html
├─ order.html
├─ pay.html
└─ signup.html
```
## 2. 정보 구조(IA) 및 기능 매핑
| 구분 | 정보 구조상 역할 | 주요 구현 기능 |
|:-------|:--------|:--------|
| index.html | 메인 페이지 | 전적 검색 기능 및 유저 검색 기능 배치 |
| login.html | 로그인 | 로그인 및 소셜 로그인, 회원가입 및 계정 찾기 구현 |
| community.html | 커뮤니티 | 친구 간 온라인 상태 유무 및 메신저 활용 기능 UI구현 |
| signup.html | 회원가입 | 약관 동의 및 계정 생성 기능 구현 |
## 3. 구조 설계 원칙
- **폴더 분리:** html, css 등 각 폴더 별로 분리하여 유지 확보 및 보관 용이.
- **명확한 네이밍:** 폴더 및 파일 명을 명확히 하여 해당 자원에 대해 빠르게 파악하고 활용할 수 있도록 함.
## 4. 기술적 특징
- **reset.css** 파일과 해당 html 관련 **layout.css**를 분리하여 효울성있는 **style 작업 관리**
- images/ 폴더 내 리소스를 다양하게 수집하여 세분화를 통한 변경 및 관리에 용이함