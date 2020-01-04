✅ bind
* 수신자 객체(this로 사용할 객체)를 정해서 새로운 함수를 리턴해준다.
* 아래와 같이 특히나 고차함수를 사용할때, this에 대해 예측, 대응하기 쉽지않은데, 이때 bind를 사용한다.
```javascript
const buffer = {
    data: [],
    addData: function(item) {
      this.data.push(item);
    }
}
[].forEach(buffer.addData); // buffer.addData가 바로 호출 되는 것이 아니고, 전역객체에서 호출시킨다.

/** 처리 1. */
[].forEach((item) => {
    buffer.addData(item);
});
/** 처리 2. */
[].forEach(buffer.bind(buffer));
```
* 처리 2와 같이 bind를 사용해, 명시적으로 수신자 객체를 buffer로 할 것을 명시한다.
<hr />

* ** 단순 참조가 아닌 새로운 함수 객체를 리턴한다. 따라서 안정성을 보장받는다.
```javascript
buffer.add === buffer.add.bind(buffer); // false
```