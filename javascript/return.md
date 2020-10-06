✅ return

* 함수 종료 시점을 명확히 하기 위해서는, `반환하는 값이 없더라도` return을 사용해주는 것이 좋다
  ```js
  function func() {
    if (true) {
      return location.push("/"); // 종료를 명확히 알려준다.
    }

    return 1;
  }
  ```
* 모든 함수는 기본적으로 `return이 없을시`, 암묵적으로 void를 반환한다. 