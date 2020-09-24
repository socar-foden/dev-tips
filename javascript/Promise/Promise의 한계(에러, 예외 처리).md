✅ Promise의 한계(에러, 예외 처리)

* Promoise는 본질적으로 `에러, 예외 처리`에 대해 아래와 같은 `한계`가 존재한다.
  1. `then 연쇄`에서의 묻힘
    * `외부 라이브러리`를 사용할 경우, 아래와 같이 감지하지 못할 수 있다.
      ```js
      const p = new Promise(resolve => { resolve(100); });

      // 임의의 라이브러리
      const someLibrary = (value) => {
        try {
          // ...
          throw Error('!!!!!!!!!!');
          // ...
        } catch (e) {
          console.error('[someLibrary] catch --- ', e); // [someLibrary] catch ---  Error: !!!!!!!!!!
        }
      }

      p
        .then(value => {
          someLibrary(value);
          return 100;
        })
        .then(value => {
          console.log(value); // 100
        })
        .catch(e => {
          console.log('[Promise] catch ::: ', e); // Error를 잡지 못한다.
        });
      ```
  2. `catch`에서의 에러, 예외 발생
    1. catch는 `자신의 에러`를 잡지 못한다.
      ```js
      const p = new Promise(resolve => { resolve(100); });

      p
        .then(value => {
          return value;
        })
        .catch(e => {
          throw Error('!!!!!!!!!!');
          console.log('[Promise] catch ::: ', e); // Error를 잡지 못한다.
        });
      
      // 조용히 묻힌다.
      ```
    2. 외부의 try... catch에서도 잡지 못한다.
      ```js
      const p = new Promise(resolve => { resolve(100); });

      try {
        p
        .then(value => {
          return value;
        })
        .catch(e => {
          throw Error('!!!!!!!!!!');
          console.log('[Promise] catch ::: ', e); // Error를 잡지 못한다.
        });
      } catch (e) {
        console.log('[외부] catch --- ', e); // 외부 try... catch에서도 마찬가지
      }

      // 조용히 묻힌다.
      ```