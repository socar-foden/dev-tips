✅ localeCompare
* 문자열 비교시 사용한다.
```javascript
'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'b'.localeCompare('b'); // 0
```
* string 배열을 sort로 정렬시, 문자열을 단순 <, >, <=, >=, ===로 비교하면 안된다.
* (한 문자라도 <b>localeCompare</b>를 사용하는 것이 권장된다.)
