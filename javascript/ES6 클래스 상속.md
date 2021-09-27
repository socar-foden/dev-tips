✅ ES6 클래스 상속

- \*\* <b>[[Prototype]], .prototype, .\_\_proto\_\_</b>의 차이

  - `[[Prototype]]`: 해당 객체의 프로토타입 -표준-
    - `Object.getPrototypeOf`로 접근
  - `.__proto__`: 해당 객체의 프로토타입 \*\* -비표준-
  - `.prototype`: 함수의 생성차 호출로 생성될 인스턴스의 프로토타입

- 상속은 기본적으로 `'복사'`를 수반하지만(???), 자바스크립트에서의 상속은 다른 객체에 링크를 걸어 동작을 상위로 `'위임'`하는 것

  ```javascript
  class Foo {}
  const a = new Foo();

  console.log(Object.getPrototypeOf(a)); // 표준, Foo.prototype
  console.log(a.__proto__); // 비표준, Foo.prototype

  console.log(Foo.prototype === Object.getPrototypeOf(a)); // true
  console.log(Object.getPrototypeOf(a) === a.__proto__); // true
  console.log(a.__proto__ === Foo.prototype); // 비표준, true
  ```

  ![extends](/resources/extends.png)

  <hr />

- 생성된 객체의 .prototype은 없다.
- .**proto**는 비표준
