✅ for... in... 연산자 사용시 주의점
* 해당 객체의 `[[Prototype]]`의 프로퍼티까지 모두 순회하므로 주의한다.
  ```javascript
  const ArrayObj = function () {  }
  ArrayObj.prototype.addObj = function(key, value) { this[key] = value; }

  const aObj = new ArrayObj();
  aObj.addObj('name', 'lee');
  aObj.addObj('sex', 'man');
  aObj.addObj('age', 15);

  for (let key in aObj) { console.log(key); }

  // name
  // sex
  // age
  // addObj : (원하지 않을 수도 있는) prototype의 프로퍼티까지 순회한다.
  ```
* 순서 역시 보장되지 않는다. (실행 환경마다 내부적으로 순서가 다르다.)
  ```javascript
  let a = {
      aa: 11,
      bb: 22,
      cc: 13,
      100: 100 // 내부적으로 인덱스로 인식되어 먼저 순회하게 된다.
  }

  for (let i in a) { console.log(i); }
  // 100 **
  // aa
  // bb
  // cc
  ```
* 추가로, 키를 순회할때는 문자열로 인식한다.
  ```javascript
  const arr = [100, 222, 333];
  let sum = 0;

  for (let key in arr) { sum += key; }
  key; // 0012('0' + '0' + '1' + '2')
  ```
