✅ Observer 패턴

* `어떤 객체의 상태가 변할때` 그와 관련된 객체들에게 `그 변화를 알려주는` 패턴
* ** `Pub-Sub` 패턴과의 차이점
  * `중간 매개체(브로커)`
    * 연결되어야 하는 두 객체간의 `결합도`
    
      ![observer vs pub-sub](/resources/observer&pub-sub.png)

    * `Observer` 패턴: `동기`, `Pub/Sub` 패턴은 `비동기`
      * 중간 매개체로 대부분 MessageQueue를 많이 사용하기 때문
    * `Observer` 패턴: `단일 도메인`, `Pub/Sub` 패턴은 `크로스 도메인`
      * 이 역시 중간 매개체가 존재하기 때문, 중간 매개체에 접근만 가능하면 된다.

* 예시
  * `Subject.js`
    ```js
    // ex) Store 객체 - Store를 바라보는 모든 View에게 통보한다.
    class Subject {
      constructor() {
        // 필요한 작업에 따라 다양항 observer가 있을 수 있다.
        this.observers = [];
      }
      
      registerObserver(observer) {
        this.observers.push(observer);
      }
      
      unregisterObserver(observer) {
        this.observers = this.observers.filter(registedObserver => registedObserver !== observer);
      }
      
      notifyObservers(data) {
        // observer는 notify함수를 가지고 있다.
        this.observers.forEach(observer => observer.notify(data));
      }
    }
    ```
  * `Observer.js`
    ```js
    // ex) View 객체
    class Observer {
      notify(data) {
        //  구체적인 작업내용
      }
    }
    ```
  
* (참고) `Redux`나 기타 프론트엔드에서의 `상태관리`