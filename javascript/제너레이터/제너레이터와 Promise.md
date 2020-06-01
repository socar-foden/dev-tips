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