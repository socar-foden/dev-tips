✅ Props vs State
* Props
> 부모 컴포넌트가 자식에게 주는 값
> (실제 데이터와 직접적으로 연관된 값)
* State
> 해당 컴포넌트에서 관리해야 할 값
* TodoList의 Todo 컴포넌트를 예로 들면,
```javascript
// 부모 컴포넌트로 부터 '완료여부', '할일'의 데이터를 받아 뿌려줘야 한다.
static propTypes = {    
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string
};
// 반면 현재 컴포넌트에서 유동적으로 변해야 하는 '수정중인지 여부', '입력된 값'은 
// 부모에게서 받은 값과는 별개로 따로 관리해주어야 한다.
state = {
    isEditing: false,
    todoValue: ''
};
```
