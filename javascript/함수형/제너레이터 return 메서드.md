✅ 제너레이터 return 메서드
* 제너레이터로 생성된 `이터레이터`를 즉시 종료시킨다.
* `자원(DB 등)`을 정리할때 유용하다.
  ```javascript
  function* gen() {
    try {
      let i = 0;
      while (true) {
        yield i;
        i++;
      }
    } finally {
      console.log('제너레이터 return() 실행!');
    }
  }

  const iter = gen(); // [Symber.iterator] 프로퍼티를 가지고 있어, for... of로 순회가능하다.

  for (val of iter) {
    if (val === 5) {
      const { value, done } = iter.return(1000);
      console.log({ value, done });
    }
  }

  // 제너레이터 return() 실행!
  // { value: 1000, done: true }
  ```