✅ 제너레이터 yield 위임
* 내부의 제너레이터에 `yiled를 위임`할 수도 있다. 
* `제어권`이 넘어가는 것이라, 일반 제너레이터 사용과 동일하게 `메세지도 전할수 있다.`
  ```javascript
  function* foo() {
    console.log('=========[foo 시작]=========');
    yield 3;
    console.log('bar -> foo :::::::::::::: ', yield 4);
    yield 5;
    console.log('=========[foo 종료]=========');
    return -1000;
  }

  function* bar() {
    yield 1;
    yield 2;
    console.log('foo -> bar :::::::::::::: ', yield *foo()); // 제너레이터 foo에 yield를 '위임'할수 있다.
    yield 6;
    return 7;
  }

  const iter = bar();

  console.log(iter.next());     // { value: 1, done: false }
  console.log(iter.next());     // { value: 2, done: false }
                                // =========[foo 시작]=========
  console.log(iter.next());     // { value: 3, done: false }
  console.log(iter.next());     // { value: 4, done: false }
                                // bar -> foo ::::::::::::::  1000
                                // { value: 5, done: false }
  console.log(iter.next(1000)); // =========[foo 종료]=========
                                // foo -> bar ::::::::::::::  -100
  console.log(iter.next());     // { value: 6, done: false }
  console.log(iter.next());     // { value: 7, done: true }
  ```
* 제너레이터 내부에는 `비동기 관련 세부로직이 드러나지 않는 것이 좋은데`, 그럴 경우 위와같이 위임을 활용할 수 있다.