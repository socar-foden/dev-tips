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