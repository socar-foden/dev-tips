✅ Promise의 연쇄 흐름
* `then`의 `콜백함수가 '반환한 값'`은 `어떤 값이든` 연쇄된 Promise의 `resolve(이룸)`으로 세팅된다.
* 더 중요한 것은, `연쇄된 Promise의 resolve`도, `Promise.resolve와 마찬가지로 동작하기 때문에`, `비동기성`을 부여해도 순서가 보장된다.
* (cf. Promise.resolve: https://github.com/zxczoxc125/dev-tips/blob/master/javascript/Promise.resolve.md)   
  ```javascript
  const p = Promise.resolve(100);

  p
    .then(value => {
      return new Promise(resolve => {
        setTimeout(() => { // setTimeout: 비동기
          resolve(value * 2);
        }, 100);
      });
    })
    .then(value => {
      console.log(value); // 200: 순서가 보장된다.
    });
  ```