✅ typeof의 안전 가드

* 선언되지 않은 변수의 타입을 체크해도 `ReferenceError: ~~`가 발생하지 않는다.
  ```js
  console.log(typeof undefinedVar); // 'undefined'
  ```
* 위 특징을 이용해서, 스코프가 모호한 변수의 사용 여부를 `에러 없이` 판단할 수 있다.
  ```js
  // 아래와 같은 실수를 많이 함.
  if (globalVal) { // 만일 globalVal이 존재하지 않는다면, ReferenceError 발생
    console.log(globalVal);
  }

  // typeof로 버그없이 안전하게 체크할 수 있다.
  if (typeof globalVal) {
    console.log(globalVal);
  }
  ```
* (참고) `객체의 프로퍼티를 접근할 때`는 `참조 에러가 발생하지 않는 것`과 더불어 전역 객체에서 접근하는 방법이 있으나, 실행 환경마다 전역 객체가 다를 여지가 크므로 `권장되는 방법은 아니다.`
  ```js
  // 실행 환경에따라 window가 전역객체가 아닐 수 있다.
  if (window.globalVal) { // globalVal이 없어도, ReferenceError가 발생하지 않는다.
    console.log(window.globalVal);
  }
  ```