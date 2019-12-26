✅ toString의 매개변수
* numObj.toString([radix])로써, radix는 2~36 사이의 값으로 <b>몇 진수로 해석할 것인지</b>를 말한다.
```javascript
console.log((8).toString(2)); // '1000'
console.log((10).toString(3)); // '101'
// 참고로 typeof (4) = 'number'
```
* <b>단! 위는 Number.prototype.toString([radix])를 말하며, Object의 toString을 상속받는 것이 아니고, 별개다.</b>
<hr />

* 위를 parseInt와 활용해 진수 변환을 쉽게 할 수 있다.
```javascript
console.log(parseInt('101010101', 2)); // 341
console.log((341).toString(2)); // '101010101'
```