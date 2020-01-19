✅ Object.defineProperty
* 객체의 프로퍼티를 추가할 때, 여러가지 속성을 부여해 추가할 수 있게 해준다.
* in... 연산자 사용시 .prototype 객체에 공통적인 함수를 추가하고 싶을때 용이하다.
```javascript
let Cons = function (name, age) {
    this.name = name;
    this.age = age;
}
let obj = new Cons('obj', 15);
Cons.prototype.getAllProps = function () {
    const props = [];
    for (let prop in this) { props.push(prop); }
    return props;
}
obj.getAllProps(); 
// name
// age
// getAllProps(의도하지 않은 getAllProps까지 나온다.)

// 아래와 같이 지정해주면 순회를 방지할 수 있다.
Object.defineProperty(Cons.prototype, 'getAllProps2', {
    value: function () {
        const props = [];
        for (let prop in this) { props.push(prop); }
        return props;
    },
    enumerable: false
})

console.log(obj.getAllProps2());
// name
// age
// getAllProps
// (getAllProps2는 순회하지 않는다.)
```
* 위 경우 뿐만 아니라, 필요에 따라 <b>configurable, enumerable, value, writable, get, set</b>를 필요에 맞게 적절히 활용하면 된다.