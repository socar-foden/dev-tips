✅ Object.defineProperty

* 객체의 프로퍼티를 추가할 때, 여러가지 속성을 부여해 추가할 수 있게 해준다.
* `writable`: 쓰기가능 여부, `enumerable`: 열거가능 여부, `configurable`: 설정가능 여부를 기본으로, 다양한 속성을 지정해 줄 수 있다.
* `enumerable`를 false로 하면 콘솔에 출력되지도 않고, `for ~ in`문에도 순회하지 않는다.
* 해당 프로퍼티의 자세한 속성을 확인하려면 `Object.getOwnPropertyDescriptor`를 사용하면 된다.
  ```javascript
  let Cons = function (name, age) {
      this.name = name;
      this.age = age;
  }
  let obj = new Cons('obj', 15);
  Cons.prototype.getAllProps = function () {
      const props = [];
      for (let prop in this) { props.push(prop); }
      return props;
  }
  obj.getAllProps(); 
  // name
  // age
  // getAllProps(의도하지 않은 getAllProps까지 나온다.)

  // 아래와 같이 지정해주면 순회를 방지할 수 있다.
  Object.defineProperty(Cons.prototype, 'getAllProps2', {
      value: function () {
          const props = [];
          for (let prop in this) { props.push(prop); }
          return props;
      },
      enumerable: false
  })

  console.log(obj.getAllProps2());
  // name
  // age
  // getAllProps
  // (getAllProps2는 순회하지 않는다.)
  ```
* 위 경우 뿐만 아니라, 필요에 따라 <b>configurable, enumerable, value, writable, get, set</b>를 필요에 맞게 적절히 활용하면 된다.