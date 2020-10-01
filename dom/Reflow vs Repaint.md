✅ Reflow vs Repaint

* ** 정의
  * `Reflow`
    * 생성된 `DOM 노드`의 `레이아웃 수치(너비, 높이, 위치 등) 변경 시` `영향 받은 모든 노드`(자신, 자식, 부모, 조상(** `결국 모든 노드`))의 수치를 다시 계산하여(`Recalculate`), <b>`렌더 트리를 '재생성'하는 과정`</b>
    * ** `Repaint보다 더 많은 비용`이 든다.
  * `Repaint`
    * Reflow 과정이 끝난 후 <b>`재생성된 렌더 트리를 '다시 그리는' 과정`</b>
    * ** 하지만 `Repaint`가 일어났다고 해서, `그 전에 반드시 Reflow가 일어났던 것은 아니다!`

* `Reflow`가 일어나는 상황
  * 페이지 초기 렌더링 시(최초 Layout 과정)
  * 윈도우 리사이징 시 (Viewport 크기 변경시)
  * 노드 추가 또는 제거
  * 요소의 위치, 크기 변경 (left, top, margin, padding, border, width, height, 등..)
  * 폰트 변경 과(텍스트 내용) 이미지 크기 변경(크기가 다른 이미지로 변경 시)
* `Repaint`'만' 일어나는 상황
  * background-color, visibility와 같이 `레이아웃에는 영향을 주지 않는 스타일 속성이 변경`되었을 때

* Reflow, Repaint 줄이기
  1. `cssText`또는 `class` 활용
      * `한 번의 수행`으로 css 변경 
        ```js
        const div = document.getElementById('div'); 
        
        // 1. cssText 활용
        div.style.cssText = 'background:red;width:200px;height:200px;';
        // 2. class 활용
        div.style.className = 'new-div'l
        ```
  2. `인라인 스타일` 지양
      * 인라인 스타일은 HTML이 파싱 될 때, `레이아웃에 영향을 미쳐` 추가 Reflow를 발생시킨다.
      * (추가로, `'관심사의 분리'`가 되지 않아 유지보수 관점에서도 좋지 못하다.)
  3. visibilty: invisible 보다 `display: none`을 활용
      * visibilty: invisible와 다르게, `display: none`는 `렌더 트리에 포함되지 않아 Reflow 대상이 아니다.`
      * 둘의 차이점은 `'레이아웃 공간을 차지하느냐'`이다.
  4. `Repaint'만' 발생하는 속성` 사용하기
  5. 영향을 주는 노드 줄이기(`absolite, fixed` 사용)
      * 애니메이션이 많거나, 레이아웃 변화가 많은 요소의 경우, position을 absolute 또는 fixed로 설정해, 영향을 받는 
  6. 애니메이션 `프레임` 줄이기
      * 예를들어, 1초마다 -> 3초마다, 1px씩 -> 3px씩
  7. 클래스 변화에 따른 스타일 변경 시, 최대한 `DOM 구조 상 끝단에 위치한 노드에 적용`
      * Reflow 수행 반경을 `일부로 제한시킬 수 있다.`
  8. `table` 레이아웃 피하기
      * table은 `점진적 페이지렌더링을 수행하지 않으며`, 모드 로드되고 계산된 후에야 보여진다.
      * 사용할 일이 있다면, `position: fixed`로 하는 것이 성능상 좋다고 한다.
  9. CSS `하위 선택자를 최소화`
      * ** Reflow `'횟수'를 줄이는 방법은 아니다.`
      * ** 렌더 트리 = `DOM 트리` + `CSSOM 트리`인데, 하위 선택자가 깊어지면 `CSSOM 트리가 깊어지고`, 최종적으로 렌더 트리를 만드는데 시간이 늘어난다.
        ```css
        /* 잘못된 예 */
        .a .b div .btn{
          display:block;
        }
        /* 올바른 예 */
        .a .btn {
          display:block;
        }
        ```
<hr />

* (참고) React, Vue 등 `Virtual DOM` 개념을 사용하는 것은 DOM의 변경 사항을 `묶어서 한꺼번에 처리`하기 때문에, 성능상의 이점이 있다.