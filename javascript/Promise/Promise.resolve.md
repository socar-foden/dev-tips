✅ Promise.resolve

* ** `즉시값`, `Non-Promise`, `Non-Thenable` 값을 인자로 받아, '이 값으로 이루어진' `Promise 객체를 리턴`해 준다.
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
* ** (미심쩍은) `Thenable 객체`를 인자로 받으면, `Non-Thenable` 값이 나올 때 까지 풀어 `Promise 객체`로 만들어 리턴해준다.
  ```javascript
  const thenable = {
    then: (cb) => {
      cb(100);
    }
  };
  const resolve = Promise.resolve(thenable);
  console.log(resolve); // Promise { 100 }

  resolve
    .then(val => {
      console.log(val);
    }); // 100
  ```

<hr />

* ** 최종적으로 `Promise.resolve()`에 어떤 값을 주게 되면, `'그 값을 가진' Promise 객체`를 반환하게 된다.
* 위와 같은 사실 때문에 `Promise의 사용 여부(반환 여부)와 관계없이`, 현재 통용되고 있는 여러 비동기 모듈들과 호환이 가능한 것이다.
  ```js
  // non-thenable
  function getValue() {
    return 10;
  }
  const p1 = Promise.resolve(getValue());
  p1.then(value => { console.log(value); });  // 10

  // thenable
  function getThenable() {
    return {
      then: function (callback) {
        callback(100);
      }
    };
  }
  const p2 = Promise.resolve(getThenable());
  p2.then(value => { console.log(value); });  // 100

  // Promise
  const p = new Promise(resolve => { resolve(1000); });
  const p3 = Promise.resolve(p);
  p3.then(value => { console.log(value); });  // 1000
  ```