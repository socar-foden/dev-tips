✅ Array 생성자
* 매개변수로 여러개의 인자를 줄 때
```javascript
const array = new Array(1, 2, 100, 3, [20, 30]);
// [1, 2, 100, 3, [20, 30]]
```
* <b>하나의 인자를 줄 때</b>
* (특히 유용하다. fill과의 조합 용이)
```javascript
const array = new Array(3);
// [empty * 3]
```
