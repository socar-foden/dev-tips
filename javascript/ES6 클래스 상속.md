✅ ES6 클래스 상속

- \*\* <b>[[Prototype]], .prototype, .\_proto\_\_</b>의 차이

  - `[[Prototype]]`: 해당 객체의 프로토타입 -표준-
    - `Object.getPrototypeOf`로 접근
  - `.__proto__`: 해당 객체의 프로토타입 \*\* -비표준-
  - `.prototype`: 해당 함수로 생성될 객체의 프로토타입 객체

- 자바스크립트에서 상속은 `'인스턴스 복사'`보다는 다른 객체에 링크를 걸어 동작을 `'위임'`하는 것

  ```javascript
  const Foo = function (name, age) {
    this.name = name;
    this.age = age;
  };
  Foo.prototype.getName = function () {
    return name;
  };

  const a = new Foo('jason', 15);

  Foo.prototype; // Foo.prototype
  Object.getPrototypeOf(u); // 표준, Foo.prototype
  a.__proto__; // 비표준, Foo.prototype

  Foo.prototype === Object.getPrototypeOf(u); // true
  Object.getPrototypeOf(u) === u.__proto__; // true
  a.__proto__ === Foo.prototype; // 비표준, true
  ```

  ![extends](/resources/extends.png)

  <hr />

- 생성된 객체의 .prototype은 없다.
- .**proto**는 비표준
