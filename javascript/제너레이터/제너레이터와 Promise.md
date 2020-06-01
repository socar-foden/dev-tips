✅ 제너레이터와 Promise
* ** 생성된 `이터레이터`는 Promise의 `귀결`(이룸(`resolve`), 버림(`reject`))을 기다리고, `각 결과에 따라 재개를 하거나, ERROR를 던진다.`
  ```javascript
  function asyncFunc(isReolve) {
    return new Promise((resolve, reject) => {
      if (isReolve) {
        resolve(1000);
      } else {
        reject('ASYNC ERROR');
      }
    });
  }

  function* gen(isReolve) {
    yield asyncFunc(isReolve); // next 호출시 value로 할당된다.
  }

  const iter1 = gen(true);
  const p1 = iter1.next().value;

  p1
    .then(val => {
      console.log('async result: ', val); // async result:  1000
    });

  const iter2 = gen(true);
  const p2 = iter2.next().value;

  p2
    .then(val => {
      console.log('async result: ', val);
    })
    .catch(e => {
      console.error('ERROR :::: ', e); // ERROR ::::  ASYNC ERROR
    });
  ```
* 보통 `귀결 결과에 상관없이` 나머지 부분이 실행되도록 아래와 같은 식으로 처리해둔다.
  ```javascript
  function asyncFunc() {
    return new Promise((resolve, reject) => {
      resolve(1000);
    });
  }

  function* gen() {
    yield asyncFunc();
  }

  const iter = gen();
  const p = iter.next().value;

  p
    .then(val => {
      iter.next(val); // 남은 반복자를 계속 수행한다.
    })
    .catch(e => {
      iter.throw(e); // 제너레이터로 ERROR를 다시 던져준다.
    });
  ```

<hr />

* 참고) 위 개념으로 작성된 `Promise 인식형 제너레이터`, 모든 비동기 요청이 끝날때까지 실행시켜준다.
* `await/async`의 원형과 비슷하다. 아래와 같은 패턴을 명세로 하자는 요구가 많아 `await/async`가 채택되었다.
* ** `yield`, `await` 키워드 뒤의 Promise결과 값이 좌측 변수에 할당되는 것은, 아래와 같은 패턴이 적용되기 때문이지, `키워드 자체의 기능은 아니다.`
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