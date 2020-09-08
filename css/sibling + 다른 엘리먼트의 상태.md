✅ sibling + 다른 엘리먼트의 상태

* sibling과 상태를 활용해 간단한 애니메이션을 넣을 수가 있다.
* 가령, 어떤 엘리먼틀르 선택했을때 주변(사실은 순서상 '다음') 엘리먼트에 변화를 주고 싶을 때
  ```html
  <input type="text" class="input">
  <span class="comment-wrapper">
    <i class="fas fa-comment">
  </span>
  ```
  ```css
  /* focus된 input ~ .comment-wrapper 까지라는 의미이므로 */
  .input:focus ~ .comment-wrapper {
    opacity: 0;
  }
  .comment-wrapper {
    transition: 0.5s linear;
  }
  ```

* 자바스크립트로 할 영역을 css가 대신 해 줄 수 있다.