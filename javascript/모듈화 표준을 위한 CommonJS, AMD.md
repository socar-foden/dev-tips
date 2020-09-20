✅ 모듈화 표준을 위한 CommonJS, AMD

* ** Javascript에서는 다른 언어와는 다르게 `모듈 사용의 표준이 존재하지 않는다.` (ES 5 기준)
* 서버 사이드에서의 Javascript가 떠오르면서, `표준화된 모듈 방식`에 대한 정의가 화두가 됨.
* 서버 사이드 Javascript 모듈의 핵심
  1. 자신만의 `독자적인 실행 영역`
  2. 따라서, `전역변수`와 `지역변수`의 분리가 매우 중요
  3. 파일마다 독립적인 `'파일 스코프'`가 존재한다.

<hr />

1. `CommonJS`
  * JavaScript를 `브라우저에서뿐만 아니라`, `서버사이드` 애플리케이션이나 `데스크톱` 애플리케이션에서도 사용하려고 조직한 자발적 워킹 그룹.
  * CommonJS의 `'Common'`은 JavaScript를 브라우저에서만 사용하는 언어가 아닌 일반적인 `범용 언어로 사용할 수 있도록 하겠다`는 의지를 나타내고 있는 것이라고 이해할 수 있다.
  * ** CommonJS의 모듈 명세는 `모든 파일이 로컬 디스크에 있어` 필요할 때 바로 불러올 수 있는 상황을 전제로 한다.
  * 사용법
    * `exports`라는 전역 객체를 이용한다.
    * module_a.js
      ```js
      module.exports = {
        sum: function (a, b) {
          return a + b;
        }
      };
      ```
    * module_b.js
      ```js
      exports.sum = function (a, b) {
        return a + b;
      };
      ```
    * index.js
      ```js
      const module_a = require('./module_a.js');
      const module_b = require('./module_b.js');

      console.log(module_a.sum(1, 2));  // 3
      console.log(module_b.sum(1, 2));  // 3
      ```
  * ** 하지만 브라우저에서 사용하게 될 시, `모듈을 받을 동안 아무것도 할 수 없게 된다`는 단점이 존재하는데, `<script>` 태그를 동적으로 삽입해 해결했었다.
  * ** 하지만 또 `<script>` 태그의 사용은 파일 단위의 스코프를 지원하지 않기 때문에, 전역변수가 오염되는 등의 문제가 존재해, CommonJS에서는 아래와 같은 방식 `비동기적인 로드`를 지원하기도 한다.
    ```js
    // myPlus-two 정의
    require.define({"myPlus-two": function (require, exports) {
      var sum = require("./module_b.js").sum;  
      exports.plusTwo = function (a) {
        return sum(a, 2);  
      };
    }}, ["async-module"]); // 비동기적으로 로딩되어야 하는 모듈
    ```

2. `AMD(Asynchronous Module Definition)`