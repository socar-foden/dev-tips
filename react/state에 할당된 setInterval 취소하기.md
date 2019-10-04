✅ state에 할당된 setInterval 취소하기
* ex) 시작/중지 타이머 앱
```javascript
if (isPlay) {// 시작
    const interval = setInterval(addSecond, 1000);
    this.setState({
        interval
    });
} else if (!isPlay) {// 정지
    // 아래와 같이 this.state로 접근해서 clear 시켜준다.
    clearInterval(this.state.interval);
}
```
* 무조건 <b>state로 직접 접근</b>해야 한다. redux로 props에 연결시켜 props로 접근하는 것도 불가능.
