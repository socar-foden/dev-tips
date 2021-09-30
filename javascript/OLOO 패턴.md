✅ OLOO 패턴

- `Objects Linked Other Objects`
- 자바스크립트에서의 `상속`, `클래스`는 결국 흉내일 뿐이며, 이 흉내를 내기위해 너무 쓸데없고 복잡해진(`.prototype`, `constructor`, `class`, `super` 등) 구조, 문법적 설탕이 들어가게 된다고 함
  - (new 키워드를 사용하는 생성자 함수 방식도 마찬가지로 본다.) --> OO 패턴
- 자바스크립트 설계상의 구조와 일반적인 객체지향 언어와의 불일치(구조나 문법 등)를 메꾸기 위해, 너무 많은 비용이 소모됨
- 결국 자바스크립트 상속 패턴에서 중요한 것은 `[[Prototype]] 연쇄`기 때문에 여기에만 집중하자.는 관점

  ```javascript
  const Parent = {
    init: function (name) {
      this.name = name;
    },
    getName: function () {
      return this.name;
    },
  };

  const Child = Object.create(Parent); // [[Prototype]]가 Parent를 가리킴
  Child.setUp = function (name, age) {
    this.init(name); // super(); 와 같은 역할
    this.age = age;
  };
  Child.getAge = function () {
    return this.age;
  };

  // 별도의 인스턴스화 필요 없음
  const c1 = Object.create(Child);
  c1.setUp('Brandon', 15);
  c1.getName(); // Brandon
  c1.getAge(); // 15

  const c2 = Object.create(Child);
  // ...
  ```

- `c1(인스턴스) -> Child -> Parent` 모두 `[[Prototype]]`링크로만 단순하게 연결되어 있다.
- 오버라이드
  - OLOO 패턴의 설계에서는 `오버라이드` 개념은 안티패턴, 참조 파악이 힘들어 명칭을 다르게 하는것이 맞다고 함. ??
- 인스턴스화 할 필요가 없다.