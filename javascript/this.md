✅ this

- 가장 흔한 오해

  - this는 `자기 자신을 가리킨다.` X

    ```js
    function test() {
      this.count++;
    }

    test.count = 0;

    test();
    test();
    test();

    console.log(test.count); // 0
    ```

  - this는 `자신의 스코프를 가리킨다.` X

    ```js
    function foo() {
      var a = 2;

      function bar() {
        // var a = 2;
        // 자신의 스코프가 뭘 말하는지는 모르겠지만, 여기에 a 식별자가 존재해도 결과는 마찬가지
        console.log(this.a); // bar의 스코프의 a는 2, 하지만 undefined 출력
      }

      bar();
    }

    foo(); // undefined
    ```

    - 책 예시(p.35)
      - 브라우저, 노드 환경에서 다름

<hr />

- \*\* this는 `렉시컬(선언 당시) 환경과 아무런 관련이 없다.`
  - (= 서술되어있는 코드상의 위치와 관련이 없다. `변수와 다름`)
  - this는 `실행 컨텍스트`가 `'생성'될 때 결정`된다.
    - (참고. 실행 컨텍스트의 구성)
      - \*\* `렉시컬(선언적) 환경 정보`
      - `변수 정보`
      - `this 정보`
  - 그런데 실행 컨텍스트는 `함수가 '호출'될 때` 생성된다.
  - 따라서 this는 함수가 호출될 때 결정된다.
- --> 호출될 당시, `누가 자신을 호출했는지만` 보면 된다.

  - .(dot)만 보면 된다.
  - 호출 주체가 없으면 `전역 객체`(or `undefined` at strict mode)
  - (명시적 바인딩, new로 호출한 경우 제외)

<hr />

- \*\* `화살표 함수`의 경우 `상위 스코프`의 this와 같다.

  - = 화살표 함수는 `렉시컬 스코프를 따른다.`

  ```javascript
  function test() {
    this.a = 1; // 호출부를 보면, test의 this = 전역 객체

    return () => {
      console.log(this.a); // 여기의 this = test의 this = 전역객체
    };
  }

  test()(); // 1

  function test2() {
    this.a = 1; // 호출부를 보면, test2의 this = 전역 객체

    setTimeout(() => {
      console.log(this.a); // 여기의 this = test2의 this = 전역객체
    });
  }

  test2(); // 1
  ```

- 정리하면 아래와 같다.
  1. \*\* `일반적`: 최종적으로 호출한 객체
  2. `new 호출`: 생성된 인스턴스
  3. `call, apply, bind`: 주어진 객체
  4. `그 외`: 전역 객체(스코프)
  - (`strict 모드`: undefined)
- 실제 우선순위는 2, 3, 1, 4

<hr>

- 노드와 브라우저에서 전역스코프에서의 전연변수 선언의 차이(var, 함수선언문)
  - (https://stackoverflow.com/questions/28375998/javascript-global-variables-and-properties-in-nodejs-global-properties-sometim)
  - 노드 환경에서의 변수 접근은 `동일 파일에서만 가능해야하므로`, 특정파일의 가장 바깥에서 전역변수를 선언한다고 해도, 글로벌 객체의 프로퍼티에 할당되지 않는다.
