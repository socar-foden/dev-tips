✅ 가변인자 함수를 만들때는 apply를 활용하라
* 현재 가지고 있는 데이터가 <b>배열</b>이고, 가변인자를 매개변수로 받는 함수로 호출해야 할때 apply를 활용한다.
```javascript
/** Math.max를 활용하고 싶은데 가지고 있는 데이터는 배열이다 */
const array = [1, 2, 3, 4, 5, 6, 7, 8];
Math.max(array); // NaN: Math.max는 가변인자를 매개변수로 받기 때문
Math.max.call(null, array); // NaN: call 역시 마찬가지 
Math.max.apply(null, array); // 8
```