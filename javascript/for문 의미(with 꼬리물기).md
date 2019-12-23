✅ for문 의미
* 아래 의미로 생각하면, 단순히 배열의 요소들을 순차적으로 도는 것 이상의 로직이 가능
```javascript
for (/** 1.무엇을 **/; /** 2. 해당 조건동안 **/ ; /** 3. 이렇게 변화시킬 것(반복자 이외의 것도 가능) **/) {
    ...
}
```
* 가령, 이전 지점의 정보를 가진 배열이 있을때, 아래와 같이 간단하게 모든 경로를 구할 수 있다.
```javascript
const dots = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const preds = [
    A: undefined, B: 'A',
    C: 'A',       D: 'A',
    E: 'B',       F: 'D',
    G: 'C',       H: 'B',
    I: 'E'
]; // 실제로 위와 같이 선언은 불가능하나, 이해를 돕기 위함.

// 시작점: 'A'
const start = dots[0];
for (let i = 0; i < dots.length; i++) {
    const root = [];
    for (let to = dots[i]; to !== start; to = preds[to]) {
        /** 시작지점('A')을 만날때까지 이전지점을 찾아나간다. **/
        path.push(to);
    }
    path.push(start);
    console.log(path.reverse().join(' -> '));
}
```