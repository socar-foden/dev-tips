✅ return null
* null을 리턴해도 컴포넌트의 생명주기에는 영향을 주지 않는다.
```jsx
const Comp = () => {
    if (isShow) {
        return null;
    }

    // ...
    return (
        <div>show</div>
    );
}
```