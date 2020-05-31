✅ 제너레이터 return, throw 메서드
* 제너레이터로 생성된 `이터레이터`를 종료시킨다.
* `자원(DB 등)`을 정리할때 유용하다.
* `return`
  * `매개변수 값이 바로 value`로, `done은 false` 세팅된 후 반환된다.
    ```javascript
    function* gen() {
      try {
        let i = 0;
        while (true) {
          yield i;
          i++;
        }
      } finally {
        console.log('제너레이터 return() 실행!');
      }
    }

    const iter = gen();

    for (val of iter) {
      if (val === 5) {
        const { value, done } = iter.return(1000);
        console.log({ value, done });
      }
    }

    // 제너레이터 return() 실행!
    // { value: 1000, done: true }
    ```
  * `throw`
    * `catch (e) { ... }`로 다룰 수 있고, `매개변수가 catch의 error로 넘어간다.`
    * catch 블록 내에서 `yield로 반환할 시, done은 false다.` `return`과는 다르게 `무조건 종료시키지 않는다.`
      ```javascript
      function* gen() {
        try {
          let i = 0;
          while (true) {
            yield i;
            i++;
          }
        } catch (e) {
          console.error('제너레이터 throw() 실행 ::::::::::::::: ', e);
          // yield e;
        } finally {
          console.log('제너레이터 return() 실행!');
        }
      }

      const iter = gen();

      for (val of iter) {
        if (val === 5) {
          const { value, done } = iter.throw(1000);
          console.log({ value, done });
        }
      }

      // 제너레이터 throw() 실행 ::::::::::::::: 1000
      //  제너레이터 return() 실행!
      //  { value: undefined, done: true }
      ```