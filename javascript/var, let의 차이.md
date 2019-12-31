✅ var, let의 차이
* 아래를 이해하는 것은 스코프, 클로저, 호이스팅을 모두 이해한 것이다.
* 따라서 var와 let의 차이를 이해하였다고 볼 수 있다.
```javascript
function varTest(array) {
    var results = [];
    for (i = 0; i < 5; i++) {
        results[i] = function() {return array[i];}
    }
    return results;
}

function letTest1(array) {
    var results = [];
    for (let i = 0; i < 5; i++) {
        results[i] = function() {return array[i];}
    }
    return results;
}

function letTest2(array) {
    var results = [];
    let i;
    for (i = 0; i < 5; i++) {
        results[i] = function() {return array[i];}
    }
    return results;
}

varTest([10, 20, 30, 40, 50])[0](); // undefined
letTest1([10, 20, 30, 40, 50])[0](); // 10
letTest2([10, 20, 30, 40, 50])[0](); // undefined
```