✅ isPrototypeOf vs getPrototypeOf
* 이름에서 유추할 수 있긴 한데, 정리해둔다.
* (아래 예는 `C.__proto__ -> B.__proto__ -> A`를 가정)
* `Object.prototype.isPrototypeOf`
  * Object.prototype에 속한 메서드
  * `같은 프로토타입 체이닝에 속해있는지 여부`를 반환해준다.
  * (직접적으로 연결되어 있지 않아도 true)  
  ```javascript
  C.isPrototypeOf(B); // true
  C.isPrototypeOf(A); // true: C, A 중간에 B가 존재하지만 같은 체이닝에 속해있기 때문에
  B.isPrototypeOf(A); // true
  ```
* `Object.getPrototypeOf`
  * 각 Object 인스턴스에 속한 메서드
  ```javascript
  Object.getPrototypeOf(C) === A; // true
  Object.getPrototypeOf(C) === B; // false
  Object.getPrototypeOf(B) === A; // true
  ```