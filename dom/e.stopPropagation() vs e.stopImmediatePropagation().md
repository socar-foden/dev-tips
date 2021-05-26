✅ e.stopPropagation() vs e.stopImmediatePropagation()

- `e.stopPropagation()`
  - `동일한` 이벤트 전파를 차단
- `e.stopImmediatePropagation()`

  - 같은 DOM 에 걸린 `다른 이벤트까지도` 전파를 차단

- 예시

  ```html
  <div id="div_1">
    <div id="div_2">
      <div id="div_3"></div>
    </div>
  </div>
  ```

  ```js
  document.getElementById("div_1").addEventListener("click", (e) => {
    console.log("div_1");
  });
  document.getElementById("div_2").addEventListener("click", (e) => {
    console.log("div_2");
  });
  document.getElementById("div_3").addEventListener("click", (e) => {
    // 1. e.stopPropagation();
    // 2. e.stopImmediatePropagation();
    console.log("div_3_1");
  });
  document.getElementById("div_3").addEventListener("click", (e) => {
    console.log("div_3_2");
  });
  ```

  - div_3 클릭시 결과
    - `기본`
      - div3_1 -> div3_2 -> div_2 -> div_1
    - `e.stopPropagation()`: 상위 요소의 이벤트 전파를 막음
      - div3_1 -> div3_2
    - `e.stopImmediatePropagation()`: 상위 요소 + 동일 요소의 다른 이벤트까지 막음
      - div3_1

- 참고
  - `e.preventDefault()`
    - 현재 이벤트의 `기본 동작을 중단` (ex. a, form..)
