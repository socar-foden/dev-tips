✅ JSX
* 어트리뷰트에는 ''와 {}중 하나만 사용해야 한다.
```jsx
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;

// 아래와 같이 가능은 하나 X
const element = <img src={'aa' + user.avatarUrl}></img>;
```
* 바벨은 JSX를 최종적으로 React.createElement()를 호출해 컴파일한다.
* (아래 두 코드는 동일하다.)
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
* 위 결과는 최종적으로 아래와 같은 '객체'를 생성한다.
```jsx
// 주의: 아래 구조는 단순화 된 것.
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
``` 