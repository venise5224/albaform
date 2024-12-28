# albaform

![대표](https://github.com/user-attachments/assets/6b62a4cb-a645-430a-ac82-3d117d53fe17)

# 배포 사이트: https://albaform-five.vercel.app/

# 서비스 소개

- 제작기간: 2024. 11. 21 ~ 2024. 12. 28
- 제작 인원: 4명
- 역할
    - 정준영 : 팀장, 랜딩페이지, 알바폼 상세페이지, 내 지원 상세페이지, react-calender 작업, 간편로그인 구현
    - 전상민 : 알바토크 페이지, 지원하기 페이지, 마이페이지, 공통 모달 작업
    - 문창기 : 로그인 및 회원가입, 알바폼만들기 페이지, 알바폼수정하기 페이지, 공통 드롭다운 작업, 미들웨어 및 인스턴스 작업
    - 정우영 : 알바 목록 페이지, 알바토크 글쓰기 페이지, 알바토크 상세 보기 페이지, 내 알바폼 페이지, 공통 버튼 및 공통 토스트 작업

# 팀원 소개

| 문창기 | 정준영 | 전상민 | 정우영 | 
| :---: | :---: | :---: | :---: |
|<img src="https://avatars.githubusercontent.com/u/126491953?v=4" width="100" height="100">|<img src="https://avatars.githubusercontent.com/u/81373171?v=4" width="100" height="100">|<img src="https://avatars.githubusercontent.com/u/174448906?v=4" width="100" height="100">|<img src="https://avatars.githubusercontent.com/u/79072510?v=4" width="100" height="100">|
|byeolee1221|junjeong|venise5224|wooy0|

# 주요 기능 및 기술 스택

## 주요기능

### 지원자와 사장님으로 구분된 회원가입

- 구직자와 구인자별로 서로 다른 전용페이지 접근, 서비스 분기처리를 위해 지원자와 사장님으로 구분하여 회원가입을 할 수 있습니다.
- 카카오 간편로그인을 통해 카카오의 정보를 사용하여 편리하게 회원가입을 할 수도 있습니다.

### 알바폼 만들고 구직자 지원받기

- 알바정보를 담은 알바폼을 작성하여 알바 구직자에게 노출시켜 지원받을 수 있습니다.
- 지원자가 생기면 알바폼에서 지원내역을 확인하여 이력서를 받아 확인할 수 있습니다.
- 지원자에게 진행결과를 모달을 통해 손쉽게 통지할 수 있습니다.

### 알바폼 지원하기

- 구직자는 무한스크롤로 구현된 알바목록에서 원하는 알바를 찾아서 쉽게 지원할 수 있습니다.
- 지원하지 않고 관심있는 알바를 스크랩하여 모아두고 원할 때 지원할 수 있습니다.

### 알바토크

- 회원들끼리 알바와 관련하여 여러가지 정보를 공유할 수 있는 서비스입니다.
- 무한스크롤로 구현되어 있어 여러 게시글들을 편하게 볼 수 있으며, 심플한 UI로 회원들과 손쉽게 정보 공유를 할 수 있습니다.

### 카카오맵 API를 연동한 가게위치 표출

- 가게위치를 단순히 글자로만 위치를 검색하는 것보다, 카카오맵을 통해 시각적으로 위치를 확인하여 정확한 위치를 알릴 수 있도록 하여 사용자 경험을 향상시키려고 했습니다.
- 구직자도 시각적인 위치 확인을 통해 보다 정확하고 신속하게 가게를 찾아갈 수 있습니다.```

## 기술스택

<img src="https://github.com/user-attachments/assets/bc73becf-117b-473c-ac99-25e7076f54f6" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/6d770581-15e8-405e-81d3-7e0e7451a2f2" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/c35c92b2-2070-4196-8964-c84864fae752" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/91820898-62f6-4965-9a84-047bbcae7598" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/00d84e07-3e18-4a82-b147-bd0d4330f350" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/467d8a77-1e28-4c6d-9bc6-b7e520b8551c" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/f38e0e0e-78e7-4602-bbea-03f277f9497f" width="15%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/3d567d52-2883-450b-ac3f-d124bbc79689" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/4eeacf3f-e690-43b3-aa52-18c8646497a5" width="10%" height="10%"> &nbsp;&nbsp;
<img src="https://github.com/user-attachments/assets/6266651b-3fe4-4dcb-ae77-1c05da773eac" width="12%" height="10%">

# 시연 영상

랜딩페이지

![랜딩페이지.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/1714a3bb-715d-4ff7-ba2a-d1bf7eec6664/%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80.gif)

로그인

![로그인 - 지원자.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/a913892a-f593-40a2-878f-335ca11d4918/%EB%A1%9C%EA%B7%B8%EC%9D%B8_-_%EC%A7%80%EC%9B%90%EC%9E%90.gif)

회원가입

![회원가입-지원자-동영상.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/ea7fbe1f-d388-4bf1-bae9-17334edce36e/%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%A7%80%EC%9B%90%EC%9E%90-%EB%8F%99%EC%98%81%EC%83%81.gif)

알바 목록페이지

![알바목록 페이지.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/018052fe-5127-424f-b948-8a6abe5154e9/%EC%95%8C%EB%B0%94%EB%AA%A9%EB%A1%9D_%ED%8E%98%EC%9D%B4%EC%A7%80.gif)

알바 목록 상세 페이지

![알바 상세 페이지.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/178e8632-c453-482c-9402-7948506dc970/%EC%95%8C%EB%B0%94_%EC%83%81%EC%84%B8_%ED%8E%98%EC%9D%B4%EC%A7%80.gif)

알바 토크 페이지

![알바 토크 페이지.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/528df183-e353-4c57-9d64-d5e60a272e6b/%EC%95%8C%EB%B0%94_%ED%86%A0%ED%81%AC_%ED%8E%98%EC%9D%B4%EC%A7%80.gif)

알바 토크 상세 페이지

[]()

알바 토크 글쓰기

내 알바폼

마이 페이지

알바폼 만들기 페이지

지원하기 페이지

![지원하기.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/7d9a1105-43f0-4706-8d4d-219c231d3a47/c2ccd13c-ec72-44fa-9a49-987112744664/%EC%A7%80%EC%9B%90%ED%95%98%EA%B8%B0.gif)

지원하기 상세 페이지
