✅ 렉시컬 스코핑(lexical scoping)

* 렉시컬: 선언
* `'함수의 스코프는 선언될 때 결정된다.'`
  ```javascript
  let a = 1;
  function innerA() { console.log(a); } // 선언시 inner는 전역변수 a를 바라본다.
  
  // ** 선언당시의 '값(1)'을 바라보는게 아니라 '변수(a)'를 바라본다

  function outerA() {
    a = 100; // outer가 수정하는 것은 전역변수 a
    innerA();
  }
  outerA(); // 100

  let b = 1;
  function innerB() { console.log(a); } // 마찬가지로, 선언시 전역변수 b를 바라본다.
  function outerB() {
    let b = 100; // 새로운 지역변수 b를 만들었으므로, [전역변수 b와는 아무런 관련이 없다.]
    innerB();
  }
  outerB();
  ```
* `var`: 함수 스코프
* `let, const`: 함수 스코프, 블록 스코프, TDZ(Temporal Dead Zone)
* (참고) `런타임 시 렉시컬 스코프를 수정`하는 방법으로는 `eval`, `with이` 있는데, 예측이 어렵고, 속도면에서도 느리기 때문에 `무조건적으로 지양하자.`