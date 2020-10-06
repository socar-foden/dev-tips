✅ 매개변수, arguments 사이의 불일치

* `매개변수`, `arguments`를 `동시에 사용`하는 것은 권장되지 않는다.
* 엔진 자체의 불완전한 설계 때문.(`arguments`는 이제 비 권장 요소이다.)
  ```javascript
  /** ES5 */
  function test1(a) {
    a = 100;
    console.log(a, arguments[0]);
  }

  test1(10); // 100 100
  test1(); // 100 undefined
  test1(undefined); // 100 100

  /** ES6도 마찬가지 */
  function test2(a = 100) {
    console.log(a, arguments[0]);
  }

  test2(10); // 100 100
  test2(); // 100 undefined
  test2(undefined); // 100 100
  ```