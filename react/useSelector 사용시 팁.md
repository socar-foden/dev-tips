✅ useSelector 사용시 팁
* 잘게 쪼개서 나눠서 불러오는 게 성능상 좋다.
* (필요한 상태가 바뀔때만 리렌더링)
```javascript
const { name } = useSelector(state => state.user);
const { sex } = useSelector(state => state.user);
const { age } = useSelector(state => state.user);
```
