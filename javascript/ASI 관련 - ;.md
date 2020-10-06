✅ ASI 관련 - ;

* `ASI`(Automatic Semicolon Insertion)
* 자바스크립트 엔진은, 최종적으로 실행되는 코드에 ;이 있어야 할 위치에 누락된 ;이 `하나라도` 있다면 프로그램은 돌아가지 않도록 설계되어 있다.
* 그렇기 때문에 실행 전 `ASI`라는 과정을 거치게 되는데, 이를 `믿어야 할지`, 혹은 `얼마나 믿어야 할지`에 따라 의견이 엇갈리게 된다.
  * `';를 붙여야 한다.'`: ASI는 완전하지 않기 때문에 명시적으로 붙여주어야 한다.
  * `';를 붙이지 않아도 된다.'`: 실제로 ;를 붙이는지 여부는 중요하지 않고, `코드 실행단위`(`개행`)를 잘 파악하면 되기 때문에, 그냥 안붙이는 것이 낫다.

<hr />

* `붙이는 게 조금 더 권장됨`
  * `';를 붙여야 한다.'`의 예(ASI는 `괄호`에는 동작하지 않는다.)
    ```javascript
      console.log('test')
      ([]).forEach(function(i) {}) // console.log(...) is not a function

      /** 아래와 같이 한줄로 실행하기 때문 */
      console.log('test')([]).forEach(function(i) {})
    ```
  * `';를 붙이지 않아도 된다.'`의 예
    ```javascript
    function test1() {
      return {
        value: 10
      };
    }

    function test2() {
      return {
        value: 10
      }
    }

    function test3() {
      return 
        {
          value: 10
        };
    }

    function test4() {
      return 
        {
          value: 10
        }
    }

    test1() // { value: 10 }
    test2() // { value: 10 }
    test3() // undefined
    test4() // undefined
    ```