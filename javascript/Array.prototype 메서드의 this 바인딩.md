✅ Array.prototype 메서드의 this 바인딩
* 화살표 함수를 사용한다면 신경쓰지 않아도 되지만, 익명 함수 표현법으로 콜백함수를 나타낸다면, this에 주의해야 한다.
* Array.prototype의 메서드들은 두번째 매개변수로 콜백함수의 this를 편하게 바인딩 시켜 줄 수 있다.
```javascript
const a = {
    name: 'jack',
    func1: function() {
        [1].forEach(function () {
            console.log(this.name); // 여기서 this는 전역객체
        });
    },
    func2: function() {
        [1].forEach(function () {
            console.log(this.name);
        }, this);
    },
    func3: function() {
        [1].forEach(function () {
            console.log(this.name);
        }.bind(this));
    },
    func4: function() {
        const self = this;
        [1].forEach(function () {
            console.log(self.name);
        });
    },
    func5: function() {
        [1].forEach(() => {
            console.log(this.name);
        });
    }
}
a.func1(); // undefined
a.func2(); // jack
a.func3(); // jack
a.func4(); // jack
a.func5(); // jack
```
* <b>** 콜백함수는 기본적으로 전역객체에 바인딩된다.</b> 
* (<b>화살표 함수는 자신을 감싸는 함수의 this</b>)