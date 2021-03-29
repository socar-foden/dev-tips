✅ isNaN 사용시 주의점

* `Number.isNaN()`(ES6) 과 `isNaN()`은 다르다. 
* ES6를 지원하지 않는 환경이라면, 실제로 그 값이 NaN인지는 `자기 자신과 비교해보는 것이 제일 간단하다.`
  * `isNaN()`
    * 메서드 이름은 보면 `NaN인지를 판단하는 것처럼 보이나`, 실제 판별하는 내용은 아래와 같다.
      * ** `숫자로 형변환이 불가능한가?`
      * (따라서 `정말 NaN이라는 값인지` 판단하는데 사용하기는 부적절하다.)
    * `'sadfsfsfsaf23'`와 같은, NaN은 아니지만, 숫자로 형변환이 불가능한 문자열을 true로 반환한다.
      ```js
      isNaN(null) // false: ---> null은 숫자는 아니지만, isNaN(연산결과가 숫자가 아닌)은 아니기 때문 (OK)
      isNaN('asdfasfs'); // true: ---> 'asdfasfs'는 숫자로 형변환은 불가능하지만, NaN은 아니다. 하지만 true가 나왔다. (NO......)
      isNaN(NaN) // true: ---> (OK)
      ```
  * ** `ES6 Number.isNaN()`: 값이 실제로 NaN인가?
    ```javascript
    Number.isNaN(null) // false: ---> (OK)
    Number.isNaN('asdfasfs'); // false: ---> (OK)
    Number.isNaN(NaN) // true: ---> (OK)
    ```

* `isNaN`의 결과는 `Number 형변환의 결과`와 나란하다.
  ```js
  isNaN(null) // false
  isNaN('asdfasfs'); // true
  isNaN(NaN) // true

  Number(null) // 0
  Number('asdfasfs'); // NaN
  Number(NaN) // NaN
  ```

* 최종적으로,
  * `형변환의 가능여부`를 판단하고 싶을 때
    * isNaN
    * Number.isNaN
  * `실제로 NaN이라는 값인지` 판단하고 싶을 때
    * 자신 === 자신
    * Number.isNaN