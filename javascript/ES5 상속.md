✅ ES5 상속

- 부모, 자식의 `.prototype 객체간 [[Prototype]] 링크를 수동으로 연결`해 줌
  - `자식.prototype`의 생성자 함수는 달라야 하니 자식걸로 교체해 줌
- super() 역할을 하도록, 자식 객체 내에서 `부모 생성자 함수를 명시적 바인딩으로 호출`

    ```javascript
    const Animal = function (name) {
      this.name = name;
    };
    Animal.prototype.animalFunc = function () {
      console.log('animalFunc');
    };

    const SmallAnimal = function (name) {
      Animal.call(this, name); // 부모 생성자 함수를 호출해 준다. (단순히 함수 자체의 역할을 수행한다. 생성자 개념 X)
      this.size = 10;
    };
    // SmallAnimal의 prototype의 [[Prototype]]이 Animal.prototype을 가리키도록
    SmallAnimal.prototype = Object.create(Animal.prototype);
    // 생성자 함수는 부모와 달라야 하니 자식걸로 교체
    SmallAnimal.prototype.constructor = SmallAnimal;

    SmallAnimal.prototype.smallAnimalFunc = function () {
      console.log('smallAnimalFunc');
    };

    const cat = new SmallAnimal('cat');
    ```

    > 결과를 보면

    ```javascript
    console.log(cat instanceof Animal); // true
    console.log(cat instanceof SmallAnimal); // true

    console.log(Animal.prototype); // {animalFunc: , constructor: }
    console.log(SmallAnimal.prototype); // {smallAnimalFunc: , constructor: }

    cat.animalFunc(); // animalFunc 함수를 사용가능하다.
    cat.smallAnimalFunc();
    ```

