✅ ES5 상속

- `부모.prototype`을 `자식.prototype`의 [[Prototype]] 링크에 수동으로 연결해 줌
  - `자식.prototype`의 생성자 함수는 달라야 하니 자식걸로 교체해 줌
- super() 역할을 하도록, 자식 객체 내에서 `부모 생성자 함수호출`
  - new 키워드 말고 `일반 호출`
  - 명시적으로 `자식의 this를 바인딩`

    ```javascript
    const Parent = function (name) {
      this.name = name;
    };
    Parent.prototype.getName = function () {
      return this.name;
    };

    const Child = function (name, age) {
      Parent.call(this, name); // 부모 생성자 함수를 호출해 준다. (단순히 함수 자체의 역할을 수행한다. 생성자 개념 X)
      this.age = age;
    };
    // Child의 prototype의 [[Prototype]]이 Parent.prototype을 가리키도록
    Child.prototype = Object.create(Parent.prototype);
    // 생성자 함수는 부모와 달라야 하니 자식걸로 교체
    Child.prototype.constructor = Child;

    Child.prototype.getAge = function () {
      return this.age;
    };

    const c = new Child('Brandon', 10);
    ```

    > 결과를 보면

    ```javascript
    console.log(c instanceof Child); // true

    console.log(Parent.prototype); // {getName: , constructor: }
    console.log(Child.prototype); // {getAge: , constructor: }

    c.getName(); // Brandon --> getAge 함수를 사용할 수 있다.
    ```

- 객체(좌) `instanceof` 함수(우)

  - `함수(우)`의 `.prototype`이 `객체(좌)`의 [[Prototype]] 체인에 포함되는지를 판단한다.

    - 키워드 자체에서 느낄 수 있는 의미와는 조금 다르다.

      ```js
      // 위 예제 결과에서도 c instanceof Parent ---> true
      
      const Parent = function () {};

      const Child = Object.create(Parent.prototype);
      const Baby = Object.create(Child);

      console.log(Child instanceof Parent); // true
      console.log(Baby instanceof Parent); // true

      // 객체(좌)의 [[Prototype]] 연쇄에
      // 함수(우)의 .prototype 객체에 포함되어있다면 true를 반환
      ```
