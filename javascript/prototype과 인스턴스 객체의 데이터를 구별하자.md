✅ prototype과 인스턴스 객체의 데이터를 구별하자
* 생성자 함수의 prototype 객체는 <b>'공유 목적이 있는'<b/> 데이터를 가져야 한다.
```javascript
/** Tree1의 경우, 모든 인스턴스 객체들이 하나의 dataSet을 공유한다. */
const Tree1 = function () {}
Tree1.prototype.dataSet = [];
Tree1.prototype.addData = function (data) { this.data.push(data); }

/** Tree2의 경우, 각각의 인스턴스가 자신들만의 dataSet을 가진다. */
const Tree2 = function () { this.dataSet = []; }
Tree2.prototype.addData = function (data) { this.data.push(data); }
```