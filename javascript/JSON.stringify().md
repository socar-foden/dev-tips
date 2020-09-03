✅ JSON.stringify()

* (참고)
  * `직렬화(Serialization)`: 객체 -> 문자열(데이터)
  * `역직렬화(Deserialization)`: 문자열(데이터) -> 객체
* 자바스크립트 객체를 `JSON 문자열`로 변환시킨다.
* ** `JSON 안전값`으로 판단되는 모든 값들을 변환시킨다.
  * ** `undefined, function`은 공통규격, 목적에 적합하지 않아 변환되지 않음
  ```js
  const obj = {
    name: 'michle',
    func: function () {},           // 변환되지 않음
    undefinedProperty: undefined,   // 변환되지 않음
    nullProperty: null,
  };

  console.log(JSON.stringify(obj)); // {"name":"michle","nullProperty":null}
  ```
* 변환하려는 객체에 `toJSON() 메서드`가 존재한다면, 해당 함수 반환값을 우선적으로 사용한다.
  ```js
  const obj = {
    name: 'michle',
    toJSON: function () {
      return 'toJSON()';
    },
  };

  console.log(JSON.stringify(obj)); // "toJSON()"
  ```
  * ** `toJSON()의 역할`은 값을 `JSON 안전값으로 바꾸는 것`이지, JSON 문자열로 바꾸는 것이 아니다.
    ```js
    const obj = {
      name: 'michle',
      toJSON: function () {
        return `{name: ${this.name}}`; // 잘못된 사용
      },
    };

    console.log(JSON.stringify(obj)); // "{name: michle}" ---> 잘못된 JSON 문자열 형식
    ```