✅ Pub-Sub 패턴

* `Observer패턴에서` 관찰이 대상이 되는 객체와 관찰자의 결합도를 낮추기 위해, `중간에 객체를 하나 더 둔` 패턴
* 대상 객체간의 `결합도가 많이 낮아지고`, `유연해진다.`
* 예시
  * PubSub.js
    ```js
    class PubSub {
      constructor() {
        this.eventMap = {};

        if (PubSub._instance) {
          return PubSub._instance;
        }
        PubSub._instance = this;
      }

      static getInstance() {
        if (!PubSub._instance) {
          new PubSub();
        }
        return PubSub._instance;
      }

      subscribe(event, handler) {
        if (!this.eventMap[event]) {
          this.eventMap[event] = [];
        }
        this.eventMap[event].push(handler);
      }

      unSubscribe(event, handler) {
        this.eventMap[event] = this.eventMap[event]?.filter(oldHandler !== handler);
      }

      publish(event, data) {
        this.eventMap[event]?.forEach(handler => {
          handler(data);
        });
      }
    }
    ```
  * Store.js
    ```js
    class Store {
      constructor() {
        this.pubSub = PubSub.getInstance();
        this.value = 0;
      }

      setValue(value) {
        this.value = value;
        // Store의 value가 바뀌면 change-value라는 토픽을 가직 이벤트가 발생한다.
        this.pubSub.publish('change-value', { value: this.value });
      }
    }
    ```
  * View.js
    ```js
    class View {
      constructor(store) {
        // 초기 store와의 의존성이 존재하기는 하지만, 그 후부터는 pubSub 객체에 의존해 메세지를 주고받는다.
        this.store = store;
        this.pubSub = PubSub.getInstance();

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.store = store;

        this.pubsub.subscribe('change-value', this.render.bind(this));
      }

      reRender(data) {
        this.input.value = data.value;
      }

      changeValue(value) {
        this.store.setValue(value);
      }
    }
    ```
  * index.js
    ```js
    const store = new Store();

    const view_1 = new View(store);
    const view_2 = new View(store);

    // 아래 변화동안 view_1, view_2는 같은 value를 통보받는다.
    view_1.changeValue(1000);
    view_2.changeValue(10);
    view_1.changeValue(10000);
    view_2.changeValue(100000);
    ```