✅ let, const가 var와 다른점
* 연관 키워드: `스코프`, `호이스팅`, `TDZ(Temporal Dead Zone)`, `반복문`, `클로저`
* `블록 레벨 스코프`를 지원한다. (`if`, `for`, `단순 블록` 등)
  ```javascript
  if (true) {
    var varVal = 1;
    let letVal = 2; // letVal은 if 블록 스코프에만 존재한다.
  }
  console.log(varVal); // 1
  console.log(letVal); // ReferenceError

  for (var varI = 0; valI < 5; valI++) {  }
  console.log(valI); // 6
  for (let letI = 0; letI < 5; letI++) {  }
  console.log(letI); // ReferenceError
  ```
* `선언` 전 접근할 수 없다.
* ** `호이스팅이 되지 않는 것은 아니고,` `TDZ`에 추가 제약을 받게 되어있는 것 뿐이다.
  ```javascript
  console.log(valA);
  var valA = 1;

  console.log(letA); // ReferenceError
  let letA = 1;
  ```
* for문의 () 안의 `let`은 블록 안에서 `매번 재선언, 재할당`된다.
  ```javascript
  for (var varI = 0; varI < 5; varI++) {
    setTimeout(() => {
      console.log(varI);
    });
  }
  // 5
  // 5
  // 5
  // 5
  // 5
  // 전역변수로 선언된 (var는 블록레벨 스코프를 지원하지 않으므로)
  // 동일한 varI를 참조하기 때문에

  for (let letI = 0; letI < 5; letI++) {
    // I = xx; 선언이 매 반복마다 실행된다.

    setTimeout(() => {
      console.log(letI);
    });
  }
  // 0
  // 1
  // 2
  // 3
  // 4
  // 매번 블록안에 할당된 새로운 letI를 참조하므로
  ```
* 위 특징으로, `var`를 사용할 경우 `즉시실행함수`로 일일이 감싸주어야 하는 부분을 `let`, `const`로 간단히 해결할 수 있다. 