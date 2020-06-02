✅ 제너레이터 yield 위임
* 내부의 제너레이터에 `yiled를 위임`할 수도 있다. 
* (제어권이 넘어간다.)
  ```javascript
  function* foo() {
    console.log('=========[foo 시작]=========');
    yield 3;
    yield 4;
    console.log('=========[foo 종료]=========');
  }

  function* bar() {
    yield 1;
    yield 2;
    yield *foo(); // 제너레이터 foo에 yield를 '위임'할수 있다.
    yield 5;
  }

  const iter = bar();

  console.log(iter.next()); // { value: 1, done: false }
  console.log(iter.next()); // { value: 2, done: false }
                            // =========[foo 시작]=========
  console.log(iter.next()); // { value: 3, done: false }
  console.log(iter.next()); // { value: 4, done: false }
                            // =========[foo 종료]=========
  console.log(iter.next()); // { value: 5, done: false }
  ```
* 제너레이터 내부에는 `비동기 관련 세부로직이 드러나지 않는 것이 좋은데(과하게 말고)`, 그럴 경우 위와같이 위임을 활용할 수 있다.