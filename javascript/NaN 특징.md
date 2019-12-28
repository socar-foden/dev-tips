✅ NaN 특징
* <b>NaN은 타입이 아니라 값이다.</b>
* <b>(** '숫자가 아닌 모든 형태'를 뜻하는 것이 아니다.)</b>
* 자바스립트에서 <b>자신을 동등하다고 여기지 않는</b> 유일한 값
```javascript
const x = NaN;
x === NaNc; // false
```
* isNaN()은 값을 검사하기 전에 <b>숫자로 형변환 하여</b> 검사한다.
```javascript
isNaN('1234'); // true
```
* isNaN()은 NaN으로 강제 형변환이 가능한 경우(Number([변수]) => NaN) NaN으로 판단된다.
```javascript
Number('foo'); // NaN
Number(undefined); // NaN
Number({}); // NaN
Number({name: 'happy'}); // NaN
isNaN('foo'); // true
isNaN(undefined); // true
isNaN({}); // true
isNaN({name: 'happy'}); // true
``` 
```javascript
Number(null); // 0
isNaN(null); // false
```

<hr />

* 따라서 NaN인지 판단하는 가장 좋은 방법은 <b>자기 자신과 비교해보는 것</b>이다.
```javascript
const nan = NaN;
nan === nan; // false: NaN
const notNumber = 'foo';
notNumber !== notNumber // true: NaN이 아니다. 
```