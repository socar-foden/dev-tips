✅ Array 생성자

* 매개변수로 여러개의 인자를 줄 때
  ```javascript
  const array = new Array(1, 2, 100, 3, [20, 30]);
  // [1, 2, 100, 3, [20, 30]]
  ```
* <b>하나의 인자를 줄 때</b>
* (특히 유용하다. fill과의 조합 용이) ----> `권장하지 않음.`
  ```javascript
  const array = new Array(3);
  // [empty * 3]
  ```
* `(수정)`위와 같이 `[empty * 3]`는 의도하지 않은 결과를 나타내기 쉬우므로 권장하지 않는다고 한다. 아래와 같이 `[undefined, undefined, undefined]`와 같은 형태로 초기화하는 것이 권장된다.
  ```javascript
  /** [empty * 3] 꼴 배열을 map으로 순회해보자 */
  const array = new Array(3) // [empty * 3]
  array.map(item => 100)
  array // [empty * 3]: 순회할 원소가 없어서, 이상한 결과가 나온다.
  ```
  ```javascript
  const array = Array.apply(null, {length: 3})
  // [undefined, undefined, undefined]
  ```