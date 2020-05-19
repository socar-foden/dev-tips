✅ hasOwnProperty
* 현재 `객체 자신`이 소유한 프로퍼티를 검사한다.
* (<b>프로토타입의 프로퍼티는 X</b> -> `in` 연산자를 사용한다.)
```javascript
const User = function (name) { this.name = name; }
User.prototype.getName = function () { return this.name; }

const u1 = new User('jack');

u1.hasOwnProperty('name'); // true
u1.hasOwnProperty('getName'); // false
```