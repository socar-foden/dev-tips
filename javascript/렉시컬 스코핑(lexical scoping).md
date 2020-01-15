✅ 렉시컬 스코핑(lexical scoping)
* 렉시컬 : 선언
* <b>'함수의 스코프는 선언할때 결정된다.'</b> 만 기억하면 된다.
```javascript
let a = 1;
function innerA() { console.log(a); } // 선언시 inner는 전역변수 a를 바라본다.
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
<hr />

> * var: 함수 스코프
> * let, const: 함수 스코프, 블록 스코프, TDZ(Temporal Dead Zone)