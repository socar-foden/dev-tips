✅ false로 처리되는 7가지 값

* 아래 7가지를 `제외한 모든 값은 truthy`한 값이다.
  ```js
  console.log(Boolean(false)); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(-0)); // false
  console.log(Boolean(NaN)); // false
  console.log(Boolean(null)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean('')); // false
  ```
* ** `음수조차도!`
  ```js
  console.log(Boolean(-100)); // ** true
  ```

* (참고) `Falsy 객체`
  * `현재는 비표준이 되었지만, 사용되고 있는 레거시 객체`를 뜻한다.
  * ** `Boolean 타입으로 래핑시 false`로 변환된다.
    ```js
    if (document.all) {
      console.log('exist'); // 'exist'
    }

    console.log(Boolean(document.all)); // false
    ```