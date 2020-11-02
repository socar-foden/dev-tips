✅ 지연 평가(lazy evaluation)

* <b>함수형 프로그래밍</b>에서 주로 사용
* <b>제너레이터</b>와 관련(** 엄밀히 말하면, <b>이터러블 객체</b>와 관련되어 있음)
<hr />

* 컬렉션 객체가 있을때, 일반적으로 아래와 같이 <b>엄격한 평가</b>를 거치게 된다.
  ```javascript
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  array
      .map(n => n + 1)
      .filter(n => n % 2 === 0)
      .slice(0, 3); // [2, 4, 6]
  ```
* 위 경우, 과정을 거칠때 마다, 모든 요소에 대한 검사를 한 후, 다음 과정을 거치게 된다.
* 가령, 10,000개의 데이터중 3개를 뽑아야 할 경우, 쓸데없는 연산을 많이 하게 된다.

![strict](/resources/strict.png)

* 지연 평가의 경우 아래와 같은 과정을 거친다.
* 각 요소에 대해 모든 과정을 거친 후, 하나씩 결과에 대입한다.

![lazy](/resources/lazy.png)

* 모든 데이터를 이터러블 객체로 받는다는 가정을 하면, 아래와 같이 구현이 가능하다.
  ```javascript
  const map = function* (f, iter) {
      for (let i of iter) { 
          yield f(i);
      }
  }
  const filter = function* (pred, iter) {
      for (let i of iter) {
          if (pred(i)) yield i;
      }
  }
  const take = function* (num, iter) {
      let count = 0;
      for (let i of iter) {
          // take를 실행하여 result를 할당해도 아래 console.log는 실행되지 않는다.
          // 최종적으로, Array.from을 실행했을때, 각 요소별로 연산이 역순으로 실행된다.
          console.log(i);
          yield i;
          count++;
          if (count >= num) return;
      }
  }

  const array = [1, 2, 3, 4, 5, 6];
  const result = take(3, 
      filter(n => n % 2 === 0, 
          map(n => n + 1, array)));

  // console.log(Array.from(result)); // [2, 4, 6]
  ```

* 제너레이터를 하나의 함수로 생각하기보다는, <b>`이터러블 객체 생성자`</b>로 생각하면 이해하기 조금 더 수월
* ** 위 과정이 [요소 하나별 -> 전 과정 : 모든 요소 반복]이라는 것을 이해하기 위해서는, 이터러블 객체에 대한 제대로 된 이해가 필요하다.
* ** 매 단계마다, `실제로 모든 요소를 도는 것이 아니라`, ** <b>`'모든 요소를 돌 수도 있는'`</b> 객체를 계속 뒤로 던져주고,
  * ** 최종 연산시 `'이터러블-이터레이터 프로토콜'을 사용해` `하나의 요소씩` `모든 과정을 돌게하는` 게 지연 평가의 원리
    * (`yield`, `제너레이터`는 단지 편의성을 위한 것, `지연 평가`의 핵심은 `'이터러블-이터레이터 프로토콜'`)
    ```js
    // 1. 평범한 순회 함수들
    const Normal = {
      range(num) {
        const res = [];
        for (let i = 0; i < num; i++) {
          res.push(i);
        }
        return res;
      },
      filter(predicate, arr) {
        const res = [];
        for (const value of arr) {
          if (predicate(value)) { res.push(value); }
        }
        return res;
      },
      take(num, arr) {
        const res = [];
        let cnt = 0;
        for (const value of arr) {
          cnt++;
          res.push(value);
          if (cnt >= num) { break; }
        }
        return res;
      }
    };

    // 2. Lazy 평가 함수들 --> ** 모든 함수가 제너레이터로 구성
    const Lazy = {
      *range(num) {
        for (let i = 0; i < num; i++) {
          console.log('range')
          yield i;
        }
      },
      *filter(predicate, iterable) {
        for (const value of iterable) {
          console.log('filter')

          if (predicate(value)) { yield value; }
        }
      },
      *take(num, iterable) {
        let cnt = 0;

        for (const value of iterable) {
        console.log('take')
          
          cnt++;
          yield value;
          if (cnt >= num) { break; }
        }
      }
    };

    // console.time('Normal');
    // Normal.take(3, Normal.filter(num => num % 2 === 0, Normal.range(100000)));
    // console.timeEnd('Normal');
    // Normal: 8.869ms

    console.time('Lazy');
    Array.from(Lazy.take(3, Lazy.filter(num => num % 2 === 0, Lazy.range(100000))));
    console.timeEnd('Lazy');
    // Lazy: 0.124ms
    ```