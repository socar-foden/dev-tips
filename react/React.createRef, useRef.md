✅ React.createRef, useRef
* 리액트스럽진 않지만, 특정 DOM을 직접 선택해서 조작해야 할때가 존재한다.
    * 포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
    * 애니메이션을 직접적으로 실행시킬 때.
    * 서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

```jsx
function App() {
    const textInput = useRef(); // or React.createRef();
    useEffect(() => {
        textInput.current.focus(); // 컴포넌트가 렌더링 된 직후, Input에 포커스가 맞춰진다.
    });

    return (
        <div className="App">
            <input ref={textInput}></input>
        </div>
    );
}
```

* useRef의 경우, 컴포넌트의 <b>리 렌더링과 무관한</b> 변수를 만드는데 사용 될 수도 있다.
* (동일한 객체를 가지고 있기 때문)
```jsx
function App() {
    const refObj = useRef(0); // 0: .current의 초기값
    useEffect(() => {
        setInterval(() => {
            console.log(refObj);
            refObj.current++;
        }, 500);
    });

    return (
        <div className="App" style={{border: '1px solid black', height: 200, margin: 20}}>
            {refObj.current}
        </div>
    );
}
```
> refObj.current값이 계속 증가하지만, 화면이 렌더링되지 않는다.

![useRef](../resources/useRef.png)
