✅ LHS, RHS

* 엔진이 `스코프에서 변수를 검색할 때` 2가지 종류의 검색을 수행한다. 
  * `LHS`(Left-Hand Side): `값을 변수에 넣어야 할 때`
    ```js
    const a = 10; // 1. a에 값을 대입하기 위해 a를 LHS 검색
    ```
  * `RHS`(Right-Hand Side): 단순히 변수를 찾을 때(`LHS 대상이 아닌 것`을 검색)
    ```js
    console.log(a);

    // 1. console을 RHS 검색
    // 2. log를 RHS 검색
    // 3. a를 RHS 검색
    ```
* 예시
  ```js
  function foo(a) { // 2. a에 2를 대입하기 위해 a를 LHS 검색
    console.log(a);

    // 3. console을 RHS 검색
    // 4. log를 RHS 검색
    // 5. a를 RHS 검색
  }

  foo(2); // 1. foo를 RHS 검색
  ```

* ** `스코프 체인`
  * 해당 변수를 찾을 때깨지 `상위 스코프로 LHS, RHS 검색을 수행해나가는 것`을 말한다.
  * 전역 스코프에서도 변수를 찾지 못했다면
    * `LHS` 검색 실패: `전역 스코프에 변수 선언후 값 할당`
      * (strict 모드에서는 ReferenceError가 발생한다.)
    * `RHS` 검색 실패: `ReferenceError 에러 발생`