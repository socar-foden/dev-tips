✅ this

1. ** 기본적으로 해당 함수를 `호출한 객체`를 가리킨다. (환경에 따라 다르지만)
    * 함수 `자기 자신이 아니다.`
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
    * 자기 `자신의 스코프도 아니다.`
      ```js
      function foo() {
        var a = 1;
        this.bar(); // 글로벌 스코프에 bar는 프로퍼티로 설정되어있지 않다.
      }

      function bar() {
        console.log(this.a); // undefined ----> TypeError에서 막혔지만, 애초에 여기서도 this는 글로벌 스코프를 가리킨다.

        // this가 foo의 스코프를 가리키고 있다면, 1이 찍혀야 한다.
      }

      foo(); // TypeError: this.bar is not a function (실행 환경에 따라 bar가 실행되기도 한다.)
      ```
2. `new` 함수로 생성된 객체의 경우, `생성된 인스턴스`가 this
    * (명시적, `암시적` 바인딩 모두 `new`를 사용하면 `오버라이딩`된다.)
3. 호출 객체가 체이닝되어있을 경우, ** 최종적으로 `직접 호출한` 객체를 가리킨다.
    * `렉시컬 스코핑`을 잘 생각해본다.
      * 예시 1
        ```js
        const obj = {
          name: 'obj',
          getName: function () {
            return this.name;
          },
        };

        const newGetName = obj.getName;
        console.log(newGetName()); // undefined ---> 호출한 객체가 없다.

        // 새로운 객체에 바인딩
        const newObj = {
          name: 'newObj',
          getName: obj.getName
        };

        console.log(newObj.getName()); // 'newObj'
        ```
      * 예시 2
        ```js
        function printThisValue() { console.log(this.value); }

        const obj1 = {
          value: 100,
          printThisValue: printThisValue
        };

        const obj2 = {
          value: 200,
          obj1: obj1,
          printThisValue: obj1.printThisValue // ** obj1.printThisValue라는 함수 내용을 할당한 것이지, obj1이 호출한 것은 아니다!!
        };

        obj2.obj1.printThisValue(); // 100 ---> 최종적으로 obj1이 호출했다.
        obj2.printThisValue(); // 200 ---> 최종적으로 obj2가 호출했다.
        ```
* (명시적, 암시적) `바인딩`, `new`로 호출을 제외한 나머지 경우는 `전역객체`('`strict`' 모드일 경우는 `undefined`)를 가리킨다.

<hr />

* ** `화살표 함수`의 경우 `상위 스코프`의 this와 같다.
  ```javascript
  function test() {
    this.a = 1;
    return () => {
      console.log(this.a);
    }
  }

  test()(); // 1

  function test2() {
    this.a = 1;
    setTimeout(() => {
      console.log(this.a);
    });
  }

  test2(); // 1
  ```

* (참고) `굳이 정리하자면` 우선순위는 아래와 같다.
  1. `new 호출`: 생성된 인스턴스
  2. `call, apply, bind`: 주어진 객체
  3. `일반적`: 최종적으로 호출한 객체
  4. `그 외`: 전역 객체(스코프)
    * (`엄격모드`: undfined)