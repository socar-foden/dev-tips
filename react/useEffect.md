✅ useEffect
* 클래스형 컴포넌트의 componentDidMount와 유사한 기능을 하는 hook(완전히 대체가능 하지는 않다.)

```jsx
import React, { useSelector, useEffect } from 'react';

const Com = () => {
    const status = useSelector(state => state.reducer && state.reducer.status);

    // Com 컴포넌트를 return 하기 전, 전 처리를 하고 싶을때 
    // 단순히 하래와 같이 분기를 두면 render 오류가 발생한다.
    if (status) {
        ...
    }
    // react는 함수형 프로그래밍을 지향하기 때문에, 외부 요인에 return이 영향을 받게 되면 오류를 던진다.


    // 아래와 같이 useEffect를 사용해야 한다.
    useEffect(() => {
        if (status) {
            ...
        }
    });

    return (
        <div>hello</div>
    );
}
```

* componentWillUpdate 대체하기
```jsx
const value = 0;
useEffect(() => {
    ...
}, [value]); // -> 재호출 기준이 될 변수를 배열 안에 넣어준다.
```
* componentWillUnmount 대체하기
```jsx
const value = 0;
useEffect(() => {
    ...
    return () => {
        ...
    }; // 필요한 내용이 담긴 callback 함수를 return 해준다.
});