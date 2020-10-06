✅ isNaN 사용시 주의점

* 지수 형태의 문자열은 숫자로 인식한다.
  ```javascript
  isNaN('abc'); // true;
  isNaN('1eeee'); // true;

  isNaN('1e23'); // false;
  isNaN('1e+23'); // false;
  isNaN('1e-23'); // false;
  ```

* `Number.isNaN()`(ES6) 과 `isNaN()`은 다르다. ES6를 지원하지 않는 환경이라면, 그냥 자기 자신과 비교한 결과를 보는게 간단해 보인다.
  * `isNaN()`: 숫자로 형변환이 가능한가?
    * (`값이 NaN인지` 판단하는데 사용하기는 부적절하다.)
  * `ES6 Number.isNaN()`: 값이 실제로 NaN인가?
    ```javascript
    const str = 'aaa'
    /**
    * 'aaa'는 Number 타입은 아니지만 NaN이라는 값도 아니다.
    * (NaN: 실패한 수학 연산 값)
    * 
    * --> 'aaa'는 NaN이 아니다.
    */

    console.log(isNaN(str)) // true: 맞지 않다. --> 차라리 str 자신과 직접 비교하는 것이 맞다.
    console.log(Number.isNaN(str)) // false: ok
    ```