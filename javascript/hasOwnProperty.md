✅ hasOwnProperty

* 현재 `객체 자신`이 소유한 프로퍼티를 검사한다.
* ** `in` 연산자는 [[Prorotype]] 연쇄까지 모두 확인한다!
  ```javascript
  const User = function (name) { this.name = name; }
  User.prototype.getName = function () { return this.name; }

  const u1 = new User('jack');

  u1.hasOwnProperty('name'); // true
  u1.hasOwnProperty('getName'); // false
  ```
* `함수명`에서 쉽게 유추가 가능하다.