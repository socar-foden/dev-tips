✅ 제너레이터와 Promise

* ** 핵심은 `Promise를 yield`한 다음, `이 Promise로` 제너레이터의 `이터레이터를 제어`하는 것
  ```js
  function* gen() {
    try {
      yield apiCall(); // Promise를 yield
    } catch (e) {
      console.error(e);
    }
  }

  function apiCall() {
    return Axios.get('http://ip.jsontest.com/');
  }

  const iter = gen();
  const p = iter.next().value;

  p // yield로 반환된 Promise
    .then(res => {
      iter.next(res); // 제너레이터의 이터레이터를 제어
    })
    .catch(err => {
      iter.throw(err); // 제너레이터의 이터레이터를 제어
    });
  ```

* 아래는 `Promise 인식형 제너레이터`, `모든 비동기 요청이 끝날때까지` 실행시켜준다.
* `await/async`의 원형과 비슷하다. 아래와 같은 패턴을 명세로 하자는 요구가 많아 `await/async`가 채택되었다.
  * ** `1. 제너레이터` + `2. Promise` + `3. 끝까지 실행`
* `yield`, `await` 키워드 뒤의 Promise결과 값이 좌측 변수에 할당되는 것은, 아래와 같은 패턴이 적용되기 때문이지, `키워드 자체의 기능은 아니다.`
  ```javascript
  function run(gen) {
    var args = [].slice.call(arguments, 1);
    var iter = gen.apply(this, args);

    return Promise
      .resolve()
      .then(function handleNext(value) {
        var next = iter.next(value); // gen의 yield로 value가 넘어간다.

        return (function handleResult(nextIter) {
          if (nextIter.done) {
            return nextIter.value;
          } else {
            return Promise
              .resolve(nextIter.value)
              .then(handleNext)
              .catch(e => {
                return Promise
                  .resolve(
                    iter.throw(e) // 제너레이터가 ERROR를 처리하도록 다시 던져준다.
                  )
                  .then(handleResult);
              });
          }
        })(next);
      });
  }

  function* gen() {
    try {
      console.log(1);
      yield 1;
      console.log(2);
      yield 2;
      console.log(3);
      yield 3;
      foo();
      console.log(4);
      yield 4;
    } catch (e) {
      console.error('ERROR :: ', e); // ERROR ::  ReferenceError: foo is not defined
    }
  }

  run(gen);

  // 1
  // 2
  // 3
  // ERROR ::  ReferenceError: foo is not defined
  ```