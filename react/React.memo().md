✅ React.memo()
* 상위 컴포넌트의 렌터링이 일어나도, 해당 컴포넌트의 props에 변화가 일어나지 않는다면, 재 렌더링을 방지한다.
* 기본적으로 얕은 비교를 하지만, 객체 비교를 하기 위한 비교 함수를 매개변수로 정해 줄 수 있다.
```jsx
const Child = ({value}) => {
    // ..
}

export default React.memo(Child); // value가 변경되지 않는다면 재 렌더링 되지 않는다.
```
```jsx
const Child = ({obj}) => {
    // ..
}

const compareFunc = (prev, next) => {
    return prev.obj.id == = next.obj.id;
}

export default React.memo(Child, compareFunc); // obj의 id가 변경되지 않는다면 재 렌더링 되지 않는다.
```