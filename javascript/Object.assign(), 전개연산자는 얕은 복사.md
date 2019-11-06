✅ Object.assign(), 전개연산자는 얕은 복사
```javascript
const inner = {
    name: 'inner-name'
};

const objA = {
    type: 'parent',
    inner
};
const objB = {
    ...objA
};
objA.inner === objB.inner // true
```
```javascript
const objC = Object.assign({}, inner);
objA.inner === objC.inner // true
```

> Object.assign(), 전개연산자는 =로 할당한 것과 다른 것이지.. 절대 깊은 복사가 아니다!!
```javascript
const a = {};
const b = a;
// a와 b는 자체가 같다.(참조가 같다.)

const c = Object.assign({}, a); // or const c = {...a};
// a와 c는 자체는 다르나, 내부 프로퍼티들의 참조는 같다.
```
