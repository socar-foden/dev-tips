✅ arguments 관련
```javascript
function func() {
    const args = Array.prototype.slice.call(arguments);
    ...
}
```
* arguments가 배열이 아니라는 이유만으로 위와 같이 관습적으로 사용하는 것이 아니다.
* arguments객체는 수정이 가능한데, 인자값을 정확학 별명으로 저장하지 않아 혼란을 줄 여지가 다분하기 때문.