✅ webpack-dev-server 중첩 라우팅 관련 오류
* historyApiFallback를 true로 설정해주어도 중첩 라우팅된 컴포넌트에서는 새로고침시 정상작동하지 않는 경우가 있다.
* 위와 같은 경우 index.html에서 최종 번들된 파일을 불러오는 방법이 잘못되었기 때문이다.
* 절대경로 / 상대경로
```html
...
<body>
    <div id='app'></div>
    <script src='bundle.js'></script>
</body>
...
```
> /home or /main (단일 라우트일 경우) - 동일한 경로를 찾게 된다.
* ./bundle.js: HTML tries to load script from http://주소/bundle.js
* /bundle.js: HTML tries to load script from http://주소/bundle.js

> /home/info or /home/friends (중첩 라우트일 경우) - 동일한 경로를 찾게 된다.
* ./bundle.js: HTML tries to load script from http://주소/<b>home</b>/bundle.js - <b>** doesn't exist</b>
* /bundle.js: HTML tries to load script from http://주소/bundle.js - OK

<hr />

* 웹팩 설정에서 output의 publicPath를 '/'로 설정해준다.