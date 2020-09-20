✅ module.exports와 exports

* `CommonJS`에서 채택한 모듈 export 방식
* 전역객체 exports는 `module.exports를 참조`한다.
  ```js
  module.exports = {  };
  const exports = module.exports;
  ```
* 따라서 보통 아래와 같이 사용한다.
  * `module.exports`
    ```js
    module.exports = {
      sum1: function (a, b) {
        return a + b;
      },
      sum2: function (a, b) {
        return a + b;
      },
      sum3: function (a, b) {
        return a + b;
      },
    };

    // module.exports.sum4 = function (a, b) { return a + b }
    // 도 당연히 가능하다.
    ```
  * `exports`
    ```js
    exports.sum = function (a, b) {
      return a + b;
    };

    exports.sum2 = function (a, b) {
      return a + b;
    };

    exports.sum3 = function (a, b) {
      return a + b;
    };
    ```
    * ** 아래와 같이 `exports에 다른 값을 대입`하면 참조관계가 깨지게 되므로 `모듈 시스템을 사용할 수 없다.`
      ```js
      exports = {}; // module.exports의 참조를 잃어버림
      ```