✅ react 데이터 흐름
* 위 -> 아래의 방향을 지향
* 역방향으로 설계시, 일시적인 성능 향상을 가져올 수 있지만 점점 흐름을 파악하기 어려워 진다.
* (아래와 같은 설계는 지양)
```jsx
const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App" style={{border: '1px solid black', height: 200}}>
            <Child func={() => { setCount(count + 1) }} />
            {count}
        </div>
    );
}
```
```jsx
const Child = ({func}) => {
    return (
        <div style={{border: '1px solid red', height: 100, margin: 20}}>
            <button onClick={func}>click</button>
        </div>
    );
}
```
![react-reverse](/resources/react-reverse.png)

