✅ Promise의 연쇄 흐름

* ** then의 인자인 `콜백함수에서 반환한 값`이 
  * `Promise 객체라면 그대로 뱉어내고`, 
  * 그게 아니라면 `값이 나올때까지 then을 풀어서` '해당 값을 가진' `Promise '이룸(resolve)' 객체로 만들어 뱉어낸다.`
    ```js
    const start = new Promise(resolve => { resolve(1000); });

    start
      .then(value => {
        console.log(value); // 1000
        const p = Promise.resolve(value);
        return p;
      })
      .then(value => {
        console.log(value); // 1000
        const p = new Promise(resolve => { resolve(value); });
        return p;
      })
      .then(value => {
        console.log(value); // 1000
        return value;
      })
      .then(value => {
        console.log(value); // 1000
        const thenable = {
          then: function (callback) {
            callback(value);
          }
        }
        return thenable;
      })
      .then(value => {
        console.log(value); // 1000
      });
    ```
* ** 더 중요한 것은, `연쇄된 Promise의 resolve`도, `Promise.resolve와 마찬가지로 동작하기 때문에`, `비동기성`을 부여해도 순서가 보장된다.
* (cf. Promise.resolve: https://github.com/zxczoxc125/dev-tips/blob/master/javascript/Promise.resolve.md)
  ```js
  const p = Promise.resolve();

  p
    .then(value => {
      console.log(1);

      // [A]
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('setTimeout');
          resolve();
        }, 1000);
      });
    })
    // ** 여기서 then은 무조건 Promise 객체([A])가 resolve 되어야 실행된다!!
    .then(value => {
      console.log(2);
    });
  
  // 1
  // 'setTimeout' ----> 약 1초 후
  // 2
  ```