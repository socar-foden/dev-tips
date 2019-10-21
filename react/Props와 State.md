✅ Props vs State
* Props
> 받기만 하면 되는 값
> (수정 불가)
* State
> 상호작용(수정작업)이 필요한 값
* TodoList의 Todo 컴포넌트를 예로 들면,
```javascript
// 부모 컴포넌트로 부터 "완료여부", "할일"의 데이터를 받아 뿌려줘야 한다.
static propTypes = {    
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string
};
// 반면 현재 컴포넌트에서 유동적으로 변해야 하는 "수정중인지 여부", "입력된 값"은 
// 부모에게서 받은 값과는 별개로 따로 관리해주어야 한다.
state = {
    isEditing: false,
    todoValue: ""
};
```
