✅ isPrototypeOf vs getPrototypeOf
* 이름에서 유추할 수 있긴 한데, 정리해둔다.
* `Object.prototype.isPrototypeOf`
  * Object.prototype에 속한 메서드
  * `같은 프로토타입 체이닝에 속해있는지 여부`를 반환해준다.
  * (직접적으로 연결되어 있지 않아도 true)
* `Object.getPrototypeOf`
  * 각 Object 인스턴스에 속한 메서드
  ```javascript
  // C.__proto__ -> B.__proto__ -> A
  const A = {};
  const B = Object.create(A);
  const C = Object.create(B);

  const c = Object.create(C); // 인스턴스 생성

  console.log(B.isPrototypeOf(C)); // true
  console.log(A.isPrototypeOf(C)); // true: C, A 중간에 B가 존재하지만 같은 체이닝에 속해있기 때문에
  console.log(A.isPrototypeOf(B)); // true

  console.log(Object.getPrototypeOf(C) === B); // true
  console.log(Object.getPrototypeOf(C) === A); // false
  console.log(Object.getPrototypeOf(B) === A); // true
  ```