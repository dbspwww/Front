# Study-Blog

![이미지 오류](image.png)

### 프로젝트 소개

---

- 플랫폼: Web / 웹
- 제작인원: 3 인 ( 팀 구성: Frontend 1명, Backend 2명 )
- 제작 기간: 30 일 (2024.10.01 ~ 2024.10.30)
- 사용 기술: React, Express, mySQL

'Study-Blog'는 공부에 대한 지식을 필요로 하는 사람들의 대한 웹입니다.
기존에 공부자료가 흩어져 있어 찾기 불편했다면 접근성이 용이한 웹으로 언제 어디서든 접속하여 필요한 공부자료를 찾아볼 수 있습니다.

### 미리보기

![alt text](image-1.png)
메인화면
![alt text](image-7.png)
admin 데이터 화면
![alt text](image-2.png)
전체 글 목록 화면
![alt text](image-3.png)
글 상세보기 페이지
![alt text](image-8.png)
댓글기능 구현
![alt text](image-9.png)
페이지네이션 구현
![alt text](image-11.png)
로그인 페이지
![alt text](image-10.png)
이메일 찾기
![alt text](image-5.png)
비밀번호 찾기
![alt text](image-4.png)
회원가입 페이지
![alt text](image-6.png)
글쓰기 페이지
![alt text](image-12.png)
마이페이지

### 구현기능

---

- 회원가입
  - 아이디 중복체크
  - 비밀번호 더블체크
  - 보안 질문
  - 관리자 추가
- 로그인
  - 일반유저로 로그인
  - 관리자로 로그인
- 이메일 찾기
- 비밀번호 찾기
- 메인
  - 총회원 수 보기
  - 총 포스팅 수 보기
  - 블로그 운영날짜 보기
- 전체글 보기
  - 자세히 보기
- 글 쓰기 기능
- 글 수정 기능
- 글 삭제 기능
- 댓글
  - 댓글 조회
  - 댓글 쓰기
  - 댓글삭제
- 관리자 권한 분기처리

- 회원정보 조회
- 회원정보 수정
- 회원정보 삭제
- 페이지네이션 구현

---

### 배운 것

react-paginate(React의 pagination 라이브러리)
3way Architecture
API 관리
권한 분기처리 로직
Styled-Components ()

- 사용이유
  - CSS 파일을 갯수를 최소화 할 수 있음.
  - ClassName 중복등으로 인한 버그를 생기지 않도록 할 수 있음.
  - 다른 styled-component 스타일을 상속 받아서 코드의 재사용성을 높일 수 있음.
  - style component는 화면에 컴포넌트가 렌더링 되었는지 추적해 컴포넌트에 대한 스타일을 자동 삽입한다. 코드를 적절히 분배해 놓으면 최소한의 코드만으로 화면이 띄워질 수 있음.
    - 단점
      - JS 파일이 매우 복잡해짐
      - JS 파일 간 중복 디자인이 많이 필요한 경우

---

### 아쉬운 점

타입 선언이 제대로 잘 이루어져 있어 아쉽다.
