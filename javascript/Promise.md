✅ Promise
* 기존 `콜백함수 방식`의 비동기 처리의 문제점을 해결. `ES6`
* 콜백함수 방식의 문제점
  ```javascript
  ajaxUtil('http://~~~~.~~~.~~~', function () {
   // 콜백함수
  });
  ```
  * 코드의 `제어권`이 개발자가 통제할 수 없는 `써드파티 함수`(위에서는 ajaxUtil)로 넘어가고, 그저 개발자 의도대로 잘 실행되기를 바랄 수 밖에 없다.
    * 상세
      * 너무 일찍 호출
      * 너무 늦게 호출(혹은 호출 X)
      * 너무 적게, 혹은 많이 호출
      * 필요한 환경/인자를 정상적으로 콜백에 전달하지 못함
      * 발생 가능한 에러/예외를 무시
  * `다른 비동기 함수들과의 상호작용`에서도 공통적으로 접근하는 변수에 대해 `시점문제`를 겪게 된다.
  * 이를 통제하기 위해서, 여기저기 임시 로직을 넣을 수 있지만, `코드가 너저분해져서 유지보수하기 힘들어진다.`
  * 코드 자체로만 보았을 때도, `비 순차적`이므로 사람이 생각했을때 직관적이지 않게 느껴진다.
* Promise의 특징
  * 상태를 외부로부터 `캡슐화`한다: `시간 독립적`
  * 귀결된 후에는 `상태가 그대로 유지`(`불변성`)되며, 몇번이고 `재사용 가능`하다.
  * (Promise의 불변성도 중요하다. 기억해두자.)
  * `덕 타이핑`으로 구현되어 있다. `then`이라는 함수만 구현되어 있으면 Promise 객체로 인식하기 때문에 주의
* 에러/예외 처리시, `then의 두번째 매개변수`(A)보다는 `catch`가 더 권장된다. (A는 reject시에만 발생)
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
  ```
* Promise 스케쥴링
  ```javascript
  function test() {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  const t = test();

  t.then(() => {
    t.then(() => {
      console.log('C');
    });

    console.log('A');
  });

  t.then(() => {
    console.log('B');
  });

  // A
  // B
  // C
  // 위 순서가 보장된다. 콜백함수로 위 로직을 구현했을 경우, 순서를 보장받을 수 없다.
  ```