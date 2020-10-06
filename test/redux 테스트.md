✅ redux 테스트

* 예전에 `redux 테스트` 코드들을 보며 의아했던 점.
* 대부분 코드를 보면 아래와 같다.
  ```js
  import configureStore from 'redux-mock-store' // ES6 modules
  const { configureStore } = require('redux-mock-store') //CommonJS
  
  const middlewares = []
  const mockStore = configureStore(middlewares)
  
  // You would import the action from your codebase in a real scenario
  const addTodo = () => ({ type: 'ADD_TODO' })
  
  it('should dispatch action', () => {
  
    // Initialize mockstore with empty state
    const initialState = {}
    const store = mockStore(initialState)
  
    // Dispatch the action
    store.dispatch(addTodo())
  
    // Test if your store dispatched the expected actions
    const actions = store.getActions()
    const expectedPayload = { type: 'ADD_TODO' }
    expect(actions).toEqual([expectedPayload])
  })
  ```
* 리덕스의 store를 테스트한다는 이유로, mock-store라는 `또 다른 새로운 모듈`을 사용하면서 테스트를 하는지가 의문. reducer 역시 마찬가지
* 더군다나 실제 앱이 아니라, 테스트 환경에 붙이기는 훨씬 손이 많이 가는 것 처럼 느껴짐

<hr />

* 아래 참고
  * `구현한 실제 reducer, store로 통합테스트` 하는 예
    * https://medium.com/@TomasRup/avoiding-useless-redux-tests-b08089764458
아래
  * `reducer만 단위테스트` 하고, `통합테스트 + E2E`를 하는 예
    * https://rinae.dev/posts/lessons-learned-testing-react-redux-apps-with-jest-and-enzyme-kr