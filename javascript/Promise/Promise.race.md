✅ Promise.race
* 매개변수로 들어오는 Promise중 `가장 먼저 응답`(`성공/실패 모두`)하는 Promise에 반응한다.
  ```javascript
  function test() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }

  function timeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject();
      }, delay);
    });
  }

  Promise.race([
    test(),
    timeoutPromise(300) // 0.3초동안 반응이 없으면 reject를 수행한다.
  ]).then(() => {
    console.log('성공')
  }).catch(() => {
    console.log('error!!');
  });

  // 'error!!'
  ```