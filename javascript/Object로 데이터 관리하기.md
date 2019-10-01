✅ 다수의 데이터 관리 Array vs Object
> * 자바스크립트에서 다수의 데이터를 다룰 때 일반적으로 Array를 사용하나 <b>Object</b>로도 가능하다.
```javascript
const Man = function (id, name) {
    this.id = id;
    this.name = name;
};
/**
* 핵심은
* {
*   [id]: {...},
*   [id]: {...},
*   [id]: {...},
*   [id]: {...}
*   ...
*   
*   꼴로 관리하는 것이다.
* }
*/

// 아래가 일반적인 Array로 관리하는 방식이라면
let list = [
    new Man('adf-asd2312', 'Jack'),
    new Man('53a-1a3123s', 'Camila'),
    new Man('sd1-sf3431s', 'Pogba')
];
// 아래와 같이 key: Object 형식으로 관리할 수 있다.
let listObj = {
    'adf-asd2312': new Man('adf-asd2312', 'Jack'),
    '53a-1a3123s': new Man('53a-1a3123s', 'Camila'),
    'sd1-sf3431s': new Man('sd1-sf3431s', 'Pogba')
};

/** 추가, 삭제할 경우 아래와 같이 접근하면 되고 */
listObj['sd1-sf3431s']
/** 삭제할 경우 delete를 사용한다. */
delete listObj['sd1-sf3431s'];
```
> * cf) 배열에서는 index로 delete 메서드로 객체를 지울시, 그냥 해당 자리가 공석(empty)이 되어버린다.
