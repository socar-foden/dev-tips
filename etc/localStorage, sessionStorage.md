✅ localStorage, sessionStorage
* HTML5에 추가된 저장소로 key, value의 형태로 저장
* 브라우저별, 기기별 다르지만 2.5mb ~ 10mb (!! <b>쿠키는 4kb</b>)
* (중요한 정보를 제외한) 로그인 정보를 저장해 사용할 수 있다.
* 쿠키와는 다르게 불필요한 API 호출을 막아 서버의 부하를 줄일 수 있다.
* (다시 말하면, 필요할때마다 의도적으로 보내야 하는 점이 단점이 될 수도 있다.)
<hr />

* localStorage
    * 사용자가 제거하지 않는 이상, <b>영구적</b>
    * 따라서.. 자동 로그인
* sessionStorage
    * <b>세션과 같은 생명주기</b>(브라우저에 종속)
    * 따라서.. 일시적인 로그인 유지

<hr />

* 추가로, 쿠키와 아래와 같은 중요한 차이점도 존재한다.
> * localStorage, sessionStorage: <b>https, http 동기화 X</b>
> * 쿠키: https, http 동기화 O