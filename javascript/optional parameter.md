✅ optional parameter
* 아래와 같은 형태는 ES6+ 문법이 아니라 타입스크립트 문법이다.
```typescript
function func(p1: number, p2?: string) {
  ...
};
```
* 자바스크립트 ES6+ 문법은 아래와 같다.
```javascript
function func(p1, p2 = 'default') {
  ...
};
```
