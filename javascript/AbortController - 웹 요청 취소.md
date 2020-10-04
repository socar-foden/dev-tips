✅ AbortController - 웹 요청 취소

* `AbortController` 인터페이스는 `하나 이상의 웹 요청을 취소할 수 있게 해준다.`
* 사용법
  * `AbortController() 생성자`로 인터페이스를 생성 후
  * `AbortSignal 객체`를 참조하고 있는 `AbortController.signal`를 요청에 담아 보낸다.
  * 요청을 취소해야 할 경우, `AbortController.abort()`를 호출한다.
* 호출 예제
  * 빠른 시간내에 연속으로 클릭 시 기존에 완전히 처리되지 못한 요청은 취소된다.
    * html
      ```html
      <body>
        <button id="callButton">
          api 요청
        </button>
      </body>
      ```
    * js
      ```js
      const callButton = document.getElementById('callButton');
      let abortController = new AbortController();
      let abortSignal = abortController.signal;
      let isRequest = false;

      callButton.addEventListener('click', () => {
        if (isRequest) {
          abortController.abort();

          // 이미 aborted된 abortController.signal를 요청에 담아보내면 요청은 무조건 거절된다.
          abortController = new AbortController();
          abortSignal = abortController.signal;
          return;
        }

        isRequest = true;

        fetch('https://httpbin.org/get', { signal: abortSignal })
          .then(response => response.json())
          .then(myJson => {
            console.log(JSON.stringify(myJson));
            isRequest = false;
          })
          .catch(err => {
            console.log('ERROR :::: ', err);
            isRequest = false;
          });
      });
      ```

* `XMLHttpRequest, ajax, axios`등 기타 다른 라이브러리들에서는 자체적으로 간편하게 사용할 수 있는 abort 메서드를 지원한다.