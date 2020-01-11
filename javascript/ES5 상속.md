✅ ES5 상속
* 인스턴스 객체, prototype 객체의 상속을 각각 지정해주어야 한다.
* (각 인스턴스가 가져야 할 부분인지, 공유해야 할 영역인지 잘 생각해보면 된다.)  
```javascript
const Animal = function (name) { this.name = name; }
Animal.prototype.animalFunc = function () { console.log('animalFunc'); }

const SmallAnimal = function (name) { 
    Animal.call(this, name); // 부모 생성자 함수를 호출해 준다.
    this.size = 10;
}
// 하지만 아직 SmallAnimal의 prototype 객체는 Animal이 아니다.
SmallAnimal.prototype = Object.create(Animal.prototype);
// 변경된 SmallAnimal.prototype의 constructor는 지정되지 않아, 지정해주어야 한다.
SmallAnimal.prototype.constructor = SmallAnimal;

SmallAnimal.prototype.smallAnimalFunc = function () { console.log('smallAnimalFunc'); }

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
* SmallAnimal의 prototype을 지정해주는 부분 중요. (<b>Object.create</b>)