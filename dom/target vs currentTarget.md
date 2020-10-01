✅ target vs currentTarget

* `target`: `이벤트가 발생한` 요소
* `currentTarget`: `이벤트가 바인딩된` 요소
* 아래를 보자
  ![target](/resources/target.PNG)
  * `html`
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        .outer {
          width: 300px;
          height: 200px;
          border: 1px solid black;
        }

        .inner {
          width: 200px;
          height: 150px;
          border: 1px solid red;
        }
      </style>
      <title>Document</title>
    </head>
    <body>
      <div class="outer">
        <div class="red-inner">
        </div>
      </div>
    </body>
    </html>
    ```
  * `script`
    ```js
    const outerDiv = document.querySelector('.outer');

    outerDiv.addEventListener('click', e => {
      console.log('e.target 클래스 ::: ', e.target.getAttribute('class'));
      console.log('e.currentTarget 클래스 ::: ', e.currentTarget.getAttribute('class'));
    });
    ```
  * 결과
    * [바깥 영역 클릭 시]
      ```js
      // e.target 클래스 :::  outer
      // index.html:32 e.currentTarget 클래스 :::  outer
      ```
    * [안쪽 영역 클릭 시]
      ```js
      // e.target 클래스 :::  red-inner
      // index.html:32 e.currentTarget 클래스 :::  outer
      ```