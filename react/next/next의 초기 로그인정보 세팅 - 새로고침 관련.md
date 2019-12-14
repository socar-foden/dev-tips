✅ next의 초기 로그인정보 세팅 - 새로고침 관련
* 커스텀 서버를 따로 두지 않았을 때, getInitialProps를 이용한 초기 정보 세팅시 미 로그인 상태의 화면이 잠깐 보이는 이슈가 생긴다.
* getInitialProps는 상황에 따라 client / server에서 각각 다르게 실행되기 때문
    > 필요한건 <b>새로고침 시</b> <b>사용자의 로그인 정보</b>인데 
    <br /> --> 새로고침 시 getInitialProps는 server에서만 실행되고,
    <br /> --> 사용자의 로그인 정보(cookie, webStorage ...) 는 client에 있기 때문

* 찰나의 잘못 보이는 그 부분을 위해사는, next를 돌릴 커스텀 서버를 둘 수 밖에 없다.
* (로딩 이미지로 전체를 가려주지 않는 한)