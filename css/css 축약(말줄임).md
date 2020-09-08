✅ css 축약(말줄임)

* 특정 영역을 넘어갔을때 ...으로 표시하는 법
  ```css
  .text {
    text-overflow: ellipsis; /* 단일 줄 말줄임 표시 */
    overflow: hidden; /* 영역 숨기기 */
    white-space: nowrap; /* 멀티라인으로 갈라지지 않게 */
  }
  ```
* 자바스크립트에서 특정 글자수 기준으로 자르려고 하지 않아도 된다.