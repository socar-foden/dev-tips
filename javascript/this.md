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
      function bar() {
        var a = 2;
        console.log(this.a); // bar의 스코프의 a는 2, 하지만 undefined 출력
      }

      bar();
    }

    foo(); // undefined
    ```

    - 책 예시(p.35)
      - 실행결과가 다름
      - 브라우저, 노드 환경에서 다름

<hr />

- \*\* this는 `렉시컬(선언 당시) 환경과 아무런 관련이 없다.`
  - (= 선언부와 관련이 없다. `변수와 다름`)
  - this는 `실행 컨텍스트`가 `'생성'될 때 결정`된다.
    - (참고. 실행 컨텍스트의 구성)
      - \*\* `렉시컬(선언적) 환경 정보`
      - `변수 정보`
      - `this 정보`
  - 그런데 실행 컨텍스트는 `함수가 '호출'될 때` 생성된다.
  - 따라서 this는 함수가 호출될 때 결정된다.
- --> 호출될 당시, `누가 자신을 호출했는지만` 보면 된다. [1]

  - .(dot)만 보면 된다.
  - 호출 주체가 없으면 `전역 객체`(or `undefined` at strict mode) [2]
  - `명시적 바인딩`(call, apply, bind) [3]
  - `new`로 호출 [4]
  
  - ** 실제 우선순위는 [4], [3], [1], [2]

<hr />

- this는 호출될 때 결정되기 때문에, `콜백함수`로 쓰이는 경우 추적이 어려운 경우가 많다.

  - <s>명시적 바인딩(call, apply, bind), that, self 편법</s>
  - \*\* `화살표 함수`의 경우 `상위 스코프`의 this와 같다.

    - = 화살표 함수는 `렉시컬 스코프를 따른다.`

      ```javascript
      const obj = {
        val: 100,
        test() {  // 호출부를 보면 test의 this === obj
          setTimeout(() => {
            console.log(this.val); // 콜백의 this === test의 this === obj
          });
        },
      };

      obj.test(); // 100

      // 만약 콜백함수가 function 키워드로 선언되었다면, 결과는 undefined
      // setTimeout의 콜백은 호출주체없이 호출되므로
      ```

<hr>

- 노드와 브라우저에서 전연변수 선언의 차이
  - (https://stackoverflow.com/questions/28375998/javascript-global-variables-and-properties-in-nodejs-global-properties-sometim)
  - 노드 환경에서의 변수 접근은 `동일 파일에서만 가능해야하므로`, 특정파일의 가장 바깥에서 전역변수를 선언한다고 해도, 글로벌 객체의 프로퍼티에 할당되지 않는다.
