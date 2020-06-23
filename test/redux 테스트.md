✅ redux 테스트
* 예전에 `redux 테스트` 코드들을 보며 의아했던 적이 있다.
* 많은 라이브러리들이 있겠지만 대부분 코드를 보면 아래와 같다.
  ```javascript
  import configureStore from 'redux-mock-store' //ES6 modules
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
* 리덕스의 store를 못 믿겠다는 이유로, mock-store라는 새로운 모듈을 믿으면서 굳이 테스트를 하는 이유가 뭔지 이해를 못했었다. reducer 역시 마찬가지
* 더군다나 실제 앱이 아니라, 테스트 환경에 붙이기는 훨씬 손이 많이 가는 것 처럼 느껴졌다.

<hr />

* 결국에 중요한 건 `사용자 환경에서 redux가 제대로 붙었는지`와 `비동기 처리 관련된 UI`인 것 같아, `통합테스트`나 `E2E`로 하는게 적합하지 않나 생각했는데, 대다수의 블로그에 그런 의견이 없어서 고민하고 있었다.
* 맞는진 모르겠지만 내 생각과 비슷하고, 잘 정리해 둔 블로그가 있어서 링크를 남긴다.
  * 아래는 `구현한 실제 reducer, store로 통합테스트`를 해야 한다는 링크
    * https://medium.com/@TomasRup/avoiding-useless-redux-tests-b08089764458
아래
  * 아래는 `reducer만 단위테스트` 하고, `통합테스트 + E2E`
    * https://huns.me/development/1953