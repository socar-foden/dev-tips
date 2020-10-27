✅ 커링(currying)

* 다변수(다항) 함수가 `인자를 전부 받을 때까지` 실행을 `'보류'`, 또는 `'지연'`시켜 '단계별로 나뉜' `단항 함수의 순차열로 전환`하는 기법
  * ** [`다항 함수` -> `단항 함수의 나열`]
* 장점
  * `항수(인자 수)를 추상화`
  * `모듈성`, `재사용성`을 높임
* 사용
  * `함수 팩토리`
  * 재사용 가능한 모듈적 `함수 템플릿`
    * 
    ```js
    const R = require('ramda');

    // 최종적으로 message 인자까지 받게되면 logger가 실행
    const logger = (prefix, suffix, message) => {
      const prefixes = {
        equal: '===',
        notEqual: '!==',
      };

      const suffixes = {
        smile: '😊',
        angry: '😔',
      };

      console.log(`${prefixes[prefix]} ${message} ${suffixes[suffix]}`);
    };

    const logFactory = R.curry(logger);

    logFactory('equal', 'smile', '[message.]');     // === [message.] 😊
    logFactory('notEqual', 'angry', '[message.]');  // !== [message.] 😔

    const equalLog = logFactory('equal');
    equalLog('smile', '[message.]');  // === [message.] 😊
    equalLog('angry', '[message.]');  // === [message.] 😔

    const equalSmaileLog = equalLog('smile');
    equalSmaileLog('[message.]'); // === [message.] 😊
    ```