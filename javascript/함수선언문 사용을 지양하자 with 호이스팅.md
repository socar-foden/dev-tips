✅ 함수선언문 사용을 지양하자 with 호이스팅
* 함수선언문에 대한 블록 스코프(지역)에 대한 정확한 명세가 존재하지 않는다.
* (환경마다 다르다.)
  ```javascript
  const f = function () { return 'global'; }
  function test(x) {
    var result = [];
    // 실제 실행시, 아래 if 분기와 상관없이
    // 이 위치(test 함수 스코프)에 함수 f가 선언될 것이다.
    // 그리고 f는 할당이 되지 않았으므로 undefined

    if (x) {
      function f() { return 'local'; }
      result.push(f());
    }
    result.push(f());
    return result;
  }
  test(true); // ['local', 'local'] or ??
  test(false); // TypeError or ??
  ```
* 사용 자체를 지양하고, 만약 사용해야 한다면
    * 이를 포함하는 함수의 가장 바깥쪽에서 사용하던지,
    * 명시적으로 외부에서 선언 후, 지역 블록에서 할당해 준다.
* 결론, <b>(익명) 함수 표현식을 사용하는 것이 더 낫다.</b>
* `let`, `const는` 블록스코프르 지원하므로 아래와 같이 해결할 수도 있다.
  ```javascript
  const f = function () { return 'global'; }
  function test(x) {
    var result = [];
    // 아래 f는 여기에 선언되지 않을 것이다.

    if (x) {
      // 여기에 선언될 것이다.
      const f = function () { return 'local'; }
      result.push(f()); // local을 리턴하는 f
    }
    result.push(f()); // global을 리턴하는 f
    return result;
  }
  test(true); // ['local', 'global']
  test(false); // [ 'global' ]
  ```
* `변수`와 비교해서, `함수선언문`이 더 `먼저` 끌어올려진다.
  ```javascript
  console.log(test1); // [Function: test]
  function test1() {}

  console.log(test2); // undefined
  var test2 = function () {}

  testFunc(); // 'test Func': 함수선언문이 먼저 끌어올려졌으므로

  var testFunc;
  function testFunc() { console.log('test Func'); }
  testFunc = function () { console.log('--var-- test Func'); }

  testFunc(); // '--var-- test Func'
  ```