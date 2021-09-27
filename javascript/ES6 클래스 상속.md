✅ ES6 클래스와 상속

- 클래스와 프로토타입

  - \*\* <b>[[Prototype]], .prototype, .\_\_proto\_\_</b>의 구별

    - `[[Prototype]]`: 해당 객체의 프로토타입 -표준-
      - `Object.getPrototypeOf`로 접근
    - `.__proto__`: 해당 객체의 프로토타입 \*\* -비표준-
    - `.prototype`: 함수의 생성차 호출로 생성될 인스턴스의 프로토타입

  - 관계도

    ```javascript
    class Foo {}
    const a = new Foo();

    console.log(Object.getPrototypeOf(a)); // 표준, Foo.prototype
    console.log(a.__proto__); // 비표준, Foo.prototype

    console.log(Foo.prototype === Object.getPrototypeOf(a)); // true
    console.log(Object.getPrototypeOf(a) === a.__proto__); // true
    console.log(a.__proto__ === Foo.prototype); // true
    ```

    ![extends](/resources/extends.png)

<hr />

- 상속

  ```js
  class Parent {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  class Child extends Parent {
    constructor(name, age) {
      super(name);
      this.age = age;
    }

    getAge() {
      return this.age;
    }
  }

  const c = new Child('Brandon', 15);

  console.log(Object.getPrototypeOf(c) === Child.prototype); // c --> Child.prototype
  console.log(Object.getPrototypeOf(Child.prototype) === Parent.prototype); // Child.prototype --> Parent.prototype
  // c --> Child.prototype --> Parent.prototype 와 같은  [[Prototype]] 연쇄를 가짐

  // 따라서 아래와 같은 호출이 가능
  console.log(c.getName()); // Brandon
  ```

  - 자바스크립트에서의 상속
    - 상속은 기본적으로 `'복사'`를 수반하지만(???), 자바스크립트에서의 상속은 다른 객체에 링크를 걸어 동작을 상위로 `'위임'`하는 것
