✅ eval
* 문자열로 들어온 자바스크립트 코드를 실행해주는 함수.
* 코드가 런타임중에 동적으로 바뀌는 경우 사용한다.
* 직접적인 eval 호출은 무조건적으로 피해야 한다.

![eval](../resources/eval.png)
(참고 MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)

```javascript
/** 직접적인 eval 호출 */
let a = '11';
function eval_func1() {
    let a = '22';
    return eval('a');
}
eval_func1(); // 22: 지역 스코프에서 eval을 평가한다.

function eval_func2() {
    let a = '22';
    let evalFunc = eval;
    return evalFunc('a');
}
eval_func2(); // 11: 전역 스코프에서 eval을 평가한다.

function eval_func3() {
    let b = 'bb';
    let evalFunc = eval;
    return evalFunc('b');
}
eval_func3(); // ReferenceError
```

* 아래와 같이 매개변수로 실행 문자열을 받고 직접적으로 호출할 경우, 극히 위험하다
```javascript
function eval_func(command) {
    ...
    eval(command);
}
eval_func(`
    const os = require('os');
    console.log(os.homedir());
`); // 서버의 home 디렉토리가 노출된다.
```