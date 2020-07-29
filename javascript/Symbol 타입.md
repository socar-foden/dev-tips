✅ Symbol 타입

* 자기 자신(`인스턴스`)을 제외한 `그 어떤 값과도 다른` 타입
  ```javascript
  // Symbol의 첫번째 매개변수는 설명
  console.log(Symbol() == Symbol()); // false
  console.log(Symbol() === Symbol()); // false
  console.log(Symbol('func') == Symbol('func')); // false
  console.log(Symbol('func') === Symbol('func')); // false
  ```