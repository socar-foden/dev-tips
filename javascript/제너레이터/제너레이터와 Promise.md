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