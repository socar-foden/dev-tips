✅ Container-Present 패턴(HOC: Higher-order Component)
* 하나의 컴포넌트를 역할별로 2개로 나눠 <b>계층화시켜주는(감싸주는)</b> 구조
* 앱의 규모가 커질 경우, 하나의 파일이 너무 커지고 복잡해지는 것을 막기 위함
<hr>

* Container 컴포넌트
> - 데이터를 담당
> - class 컴포넌트
* Present 컴포넌트
> - 뷰를 담당
> - function 컴포넌트
* 아래와 같이 Container가 Present를 감싸주고, 데이터를 처리한 후 내보내준다.
```javascript
class ContainerComponent extends Component {
    state = {
        ...
    };
    
    render() {
        const {...} = this.state;
        const {...} = this.props;
        
        return (
            <PresentComponent
                ...
            >
            </PresentComponent>
        );
    }
}

export default ContainerComponent;
```
