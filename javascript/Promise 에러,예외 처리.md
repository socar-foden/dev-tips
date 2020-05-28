✅ Promise 에러,예외 처리
* ** `자신의 연쇄`에서는 `reject`를 잡을 수 없다.
  ```javascript
  const p = Promise.resolve(100);

  p
    .then(val => {
      throw new Error();
      console.log(val);
    }, e => {
      console.error('ERROR :::::: ', e); // 실행되지 않는다.
    });

  // UnhandledPromiseRejectionWarning: ReferenceError: a is not defined
  ```
  * 따라서 아래 두 코드는 `동일한 것이 아니다!`
    ```javascript
    p1
      .then(sf, ef);
    
    p2
      .then(sf)
      .catch(ef);
    ```
* `error는 연쇄를 타고 계속 넘어가기 때문에`, onReject에서도 `(모든) 이전 단계의 error`는 잡을 수 있다. 그리고 error가 `catch` 까지 넘어가진 않지만, 정상적인 `이룸(resolve)`는 계속 연쇄된다.
  ```javascript
  const p = Promise.resolve();

  p
    .then(value => {
      foo();
      return value;
    })
    .then(value => {
      return value;
    }, (err) => {
      console.error('[onReject] :: ', err); // [onReject] ::  ReferenceError: foo is not defined
      return 42;
    })
    .then(vlaue => {
      console.log(vlaue); // 42
    })
    .catch(err => {
      console.error('[catch] :: ', err);
    });
    
  // [onReject] ::  ReferenceError: foo is not defined
  //     at c:\Users\FAS00133\VSCodeProjects\js-test\index.js:5:5
  // 42
  ```
* 사실, `catch`는 아래와 같이 `then`에 `null`, `error-callback`을 주는 것과 같다. 그래서 `이전 연쇄에서 잡힌 reject`는 catch에서 잡히지 않는 것
  ```javascript
  Promise
    .resolve()
    .then(null, e => { // 두개가 같다고 생각하면 편하다.

    })
    .catch(e => { // 두개가 같다고 생각하면 편하다.

    });
  ```
<!-- 아래 내용 잘못된 듯, 확인 요망

* `then의 두번째 매개변수`(A)보다는 `catch`가 더 권장된다. (A는 reject시에만 발생)
  ```javascript
  function test() {
    return new Promise(resolve => {
      resolve();
    });
  }

  test()
    .then(() => {
      a(); // ReferenceError
      console.log('success');
    }, (onRejectValue) => {
      console.error('--A.에러 캐치: ', onRejectValue); // reject가 일어난 것이 아니라 무시된다.
    })
    .catch((e) => {
      console.error('--B.(catch)에러 캐치: ', e);
    });
  
  // '--B.(catch)에러 캐치: ReferenceError: a is not defined.'
  ``` -->

<hr />

* ** (Promise의) `catch`에서 에러가 났을 경우, `try-catch의 catch`에서는 해당 에러를 다룰 수 없다. (이 경우, `예외`를 던지기 때문에 쉽게 알 수 있긴 하다.)