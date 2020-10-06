✅ 웹 워커 API

* 브라우저에는 ** `멀티 스레드`를 지원하는 `웹 워커 API`가 존재한다.
* 일반적으로 접하는 비동기 처리(이벤트 루프.. Promise 등)는 작업의 우선순위를 뒤로 보내서 단일 스레드로 처리할 뿐이다.
* 워커에서 `메인 프로그램으로의 접근은 불가능`하다.

<hr />

* 웹 워커 미사용
  ```html
  <body>
      <button id="button">click</button>
      <input type="text">
      <script type="text/javascript">
          const button = document.getElementById('button');
          button.onclick = () => {
              for (let i = 0; i < 300000; i++) {
                  console.log('***')
              }
          }
      </script>
  </body>
  ```
* 웹 워커 사용: UI가 멈추지 않는다.
  ```html
  <body>
      <button id="button">click</button>
      <input type="text">
      <script type="text/javascript">
          const myWorker = new Worker('./worker.js');
          const button = document.getElementById('button');
          button.onclick = () => {
              myWorker.postMessage('eeeeeeeeeeeeeeeeee');
              console.log('Message posted to worker');
              for (let i = 0; i < 300000; i++) {
                  console.log('***')
              }
          }
          myWorker.onmessage = function(e) {
              console.log('Message received from worker, -- ', e.data);
          }
      </script>
  </body>
  ```
  ```javascript
  onmessage = function(e) {
      console.log('Message received from main script');
      var workerResult = 'Result: ' + (e.data);
      for (let i = 0; i < 300000; i++) {
          console.log('***')
      }
      console.log('Posting message back to main script :: ', e.data);
      postMessage(workerResult);
  }
  ```