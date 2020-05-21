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
* 개인적으로 일반적인 상속 패턴보다, 이게 훨씬 나은 것 같다.