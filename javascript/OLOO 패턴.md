✅ OLOO 패턴
* `Objects Linked Other Objects`
* 자바스크립트에서의 `상속`, `클래스`는 결국 흉내일 뿐이며, 이 흉내를 내기위해 너무 쓸데없고 복잡해진(`new`, .`.prototype`, `constructor`... 등, 심지어 `class`도) 상속 패턴에 반해 고안된 것
* 결국 자바스크립트 상속 패턴에서 중요한 것은 `[[Prototype]] 상위 연쇄`기 때문에 여기에만 집중한다.
  ```javascript
  const Parent = {
    init: function (name) {
      this.name = name;
    },
    getName: function () {
      return this.name;
    }
  };

  const Child = Object.create(Parent); // [[Prototype]]이 Parent인 새로운 객체가 Child다.
  Child.setAge = function (age) {
    this.age = age;
  }
  Child.getDetailInfo = function () {
    return this.name + '/' + this.age;
  }

  const c1 = Object.create(Child);
  c1.init('c1');
  const c2 = Object.create(Child);
  c2.init('c2');
  c2.setAge(15);

  console.log(c2.getName()); // c2: [[Prototype]] 연쇄로 최종적으로 Parent의 getName을 호출한다.
  console.log(c2.getDetailInfo()); // c2/15
  ```
* 인스턴스를 확인하기 위해서 `instanceof`가 아니라 `Object.isPrototypeOf`, `Object.getPrototypeOf`를 사용한다.
  ```javascript
  // 위 스크립트에 이어서

  /** Parent, Child 비교 */
  console.log(Parent.isPrototypeOf(Child)); // true
  console.log(Object.getPrototypeOf(Child) === Parent); // true

  /** c1 */
  console.log(Parent.isPrototypeOf(c1)); // true
  console.log(Child.isPrototypeOf(c1)); // true

  console.log(Object.getPrototypeOf(c1) === Parent); // flase
  console.log(Object.getPrototypeOf(c1) === Child); // true: 가장 가까운 상위 [[Prototype]]
  ```
* `c -> Child -> Parent` 모두 `[[Prototype]]`링크로만 단순하게 연결되어 있다. (잡다한 부가적인 것들이 없다.)
* 개인적으로 일반적인 상속 패턴보다, 이게 훨씬 나은 것 같다.