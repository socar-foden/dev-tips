✅ Promise.resolve
* `즉시값`, `Non-Promise`, `Non-Thenable` 값을 인자로 받아, 이 값으로 이루어진 `Promise 객체를 리턴`해 준다.
  ```javascript
  const resolve = Promise.resolve(100);
  console.log(resolve); // Promise { 100 }

  const newPromise = new Promise(resolve => {
    resolve(100);
  });
  console.log(newPromise); // Promise { 100 }
  ```
* `인자로 Promise` 객체가 넘어가면 `그 객체를 그대로` 리턴해준다.
  ```javascript
  const newPromise = new Promise(resolve => {
    resolve(100);
  });
  const resolve = Promise.resolve(newPromise);

  console.log(resolve === newPromise); // true
  ```
* (미심쩍은) `Thenable 객체`를 인자로 받으면, `Non-Thenable` 값이 나올 때 까지 풀어 `Promise 객체`로 만들어 리턴해준다.
  ```javascript
  const thenable = {
    then: (cb) => {
      cb(100);
    }
  };
  const resolve = Promise.resolve(thenable);

  resolve
    .then(val => {
      console.log(val);
    }); // 100
  ```
* 위와 같은 사실 때문에 `Promise의 사용 여부와 관계없이`, 현재 통용되고 있는 여러 비동기 모듈들과 호환이 가능한 것이다.