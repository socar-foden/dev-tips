✅ 이벤트 Bubbling과 Capturing

![bubbling&&capturing](/resources/bubbling&&capturing.png)
* 중첩된 요소에서 ** `동일한 이벤트`가 발생했을 때 전파 방향
  * `Bubbling`
    * 자식 -> 부모
  * `Capturing`
    * 부모 -> 자식

* `event.stopPropagation()`
  * <b>Bubbling</b> 방식의 이벤트 전파를 막아준다.
* `EventTarget.addEventListener()`
  * 세번째 인자에 따라 전파 방식이 달라진다.
    * false(기본값): `Bubbling`
    * true: `Capturing`
  * EventTarget.addEventListener()
: (https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)

* ** 활용법
  * 엘리먼트가 `일일이 추가될 때 마다 이벤트를 등록해주지 않아도`, 상위(또는 하위)에서 `위임된 이벤트로 제어가 가능`하다.
    * 아래와 같은 UI 있을때
      ```html
      <ul>
        <li>
          <input type="text" value="1" />
        </li>
        <li>
          <input type="text" value="2" />
        </li>
      </ul>
      ```
    * `Bubbling, Capturing`을 활용하지 않았을 때
      ```js
      const ul = document.querySelector('ul');

      const inputList = document.querySelectorAll('input');
      inputList.forEach(input => {
        input.addEventListener('click', (e) => {
          alert(e.target.value);
        });
      });
      // -- 이 시점에서는 ** 기존에 존재하던 2개의 input에만 이벤트가 등록된다. 

      const newLi = document.createElement('li');
      const newInput = document.createElement('input');
      newInput.type = 'text';
      newInput.value = 3;
      newLi.appendChild(newInput);
      ul.appendChild(newLi);
      ```
    * `Bubbling, Capturing`을 활용했을 때
      * 상위 요소에 이벤트를 걸고, `Capturing을 통해 하위에 이벤트를 위임`한다.
      * `위임된 이벤트` 덕분에 추가된 엘리먼트는 `별도의 이벤트 등록이 필요 없다.`
        ```js
        const ul = document.querySelector('ul');

        ul.addEventListener('click', (e) => {
          alert(e.target?.value);
        });

        const newLi = document.createElement('li');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = 3;
        newLi.appendChild(newInput);
        ul.appendChild(newLi);
        ```