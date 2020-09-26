✅ innerHTML vs createTextNode()

* `innerHTML`
  * 실제 HTML 파서를 호출한다.
  * 따라서 무겁고 비싸다.
    ```html
    <body>
      <div id="a1"></div>
      <div id="a2"></div>
      <script src="./index.js">
        const a1 = document.getElementById('a1');
        const a2 = document.getElementById('a2');

        a1.innerHTML = '<h1>a1</h1>'; // 실제 HTML 파서 호출
        a2.innerHTML = 'a2'; // 마찬가지
      </script>
    </body>
    ```
    * 스크립트 적용 후
      ```html
      <div id="a1">
        <h1>a1</h1>
      </div>
      <div id="a2">a2</div>
      ```
* `createTextNode()`
  * 단순히 텍스트 노드를 생성한다.
    ```html
    <body>
      <div id="b"></div>
      <script src="./index.js">
        const b = document.getElementById('b');

        b.appendChild(document.createTextNode('<h1>b</h1>')); // 단순 텍스트 노드
      </script>
    </body>
    ```
  * 스크립트 적용 후
    ```html
    <div id="a1">
      <h1>a1</h1>
    </div>
    <div id="a2">a2</div>
    ```
* 따라서 `createTextNode()가 권장된다.`