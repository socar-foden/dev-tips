✅ import된 모듈 역시 객체이다
```javascript
import module from 'module';
...
```
* 각각의 파일에서 import된 모듈 역시 객체, <b>따라서 같은 주소를 가리키고 있다.</b>
* 위 사실을 깜빡하기 쉬운데, 모듈화에 어려움을 겪을 수도 있다. 