✅ await, async와 Promise.all()

* await, async는 Promise를 반환하는 함수를 <b>병렬적으로 처리 할 수 없다.</b>
* 아래와 같은 경우가 존재할 때,
```javascript
const asyncGetId = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 4 + 1));
        }, 500);
    });
}

const asyncGetNameById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const list = ['Lee', 'Kim', 'Park', 'Choi', 'Hwang'];
            resolve(list[id]);
        }, 1000);
    });
}
```
* 무조건 순차적으로 진행할 수 밖에 없다. 따라서 동시에 많은 요청을 해야 할 때, 시간상 손해를 볼 수 있다.
```javascript
const waitFunc = async () => {
    console.log('start time :: ', new Date().getMilliseconds());
    await asyncGetId();
    await asyncGetNameById(2);
    console.log('end time :: ', new Date().getMilliseconds());
};
waitFunc(); // 약 1.5초가 걸린다.
```
* 해결책: Promise의 all 메서드와 섞어서 사용한다.
* 단, 이 경우 <b>단 하나라도 거부시 다른 모든 처리도 같이 거부된다.</b>
```javascript
const waitFunc2 = async () => {
    console.log('start time :: ', new Date().getMilliseconds());
    await Promise.all([asyncGetId(), asyncGetNameById(2)]);
    console.log('end time :: ', new Date().getMilliseconds());
};
waitFunc2(); // 약 1초가 걸린다.
```