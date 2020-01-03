✅ 지연 평가(lazy evaluation)
* <b>함수형 프로그래밍</b>에서 주로 사용
* <b>제너레이터</b>와 관련(엄밀히 말하면 이터러블 객체와 관련되어 있음)


```javascript
const _ = {}

_.take = function(limit, iter) {
    const result = []
    for (let item of iter) {
        result.push(item)
        if (result.length >= limit) return result
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



const filter = function* (pred, iter) {
    for (let item of iter) {
        if (pred(item)) {console.log(item); yield item};
    }
}

const map = function* (f, iter) {
    for (let item of iter) {
        console.log('map: ', item)
        yield f(item);
    }
}


const re = filter(item => item % 2 == 0,
    map(n => n + 10, arr)
);

const result = _.take(2, re);
console.log(result)
```
????????????? 아래 참고
https://armadillo-dev.github.io/javascript/whit-is-lazy-evaluation/