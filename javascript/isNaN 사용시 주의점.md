✅ isNaN 사용시 주의점
* 지수 형태의 문자열은 숫자로 인식한다.
```javascript
isNaN('abc'); // true;
isNaN('1eeee'); // true;

isNaN('1e23'); // false;
isNaN('1e+23'); // false;
isNaN('1e-23'); // false;
```
