✅ setState는 비동기
* A. <b>현재 상태에 의존</b>하는 변경이 필요한 경우
* B. <b>props에 의존</b>하는 상태 변경의 경우
* -------> 기본적으로 setState는 비동기로 처리되기 때문에 아래와 같이 사용해야 한다.
```javascript
this.setState((prevState, props) => {
    // change state
});

// 위 setState가 끝난 후, 동기적으로 실행된다.
...
```
> 혹은 아래와 같이 사용할 수도 있다.
```javascript
this.setState({
    // changeState
}, () => {
    ...
    // callback 함수
});
```
