✅ undefined 체크시 주의사항

* `undefined`를 확인하기 위해 삼항연산자를 사용할 경우, 주의한다.
  ```javascript
  function Element(w, h) {
    this.w = w || 200
    this.h = h || 300
  }

  const e = new Element(0, 0);
  e.w // 200
  e.h // 300
  // w, h
  ```

* 위와같은 경우를 주의한다. (`0`, `NaN`, `''`을 받는 경우)
* 체크를 엄격히 하거나, 아래와 같이 ES6의 `기본 매개변수` 사용을 권장
  ```javascript
  function Element(w = 200, h = 300) {
    this.w = w
    this.h = h
  }
  ```