✅ IntersectionObserver API

* 타킷이 되는 요소의 뷰포트 영역을 감지한다.
  ```javascript
  var intersectionObserver = new IntersectionObserver(function(entries) {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    if (entries[0].intersectionRatio <= 0) return;

    loadItems(10);
    console.log('Loaded new items');
  }, {'threshold': 0.1});
  // start observing
  intersectionObserver.observe(document.querySelector('.scrollerFooter'));
  ```
* 기존 `scroll 이벤트` + `Element.getBoundingClientRect()` 방법의 문제
  1. `단기간에 수없이 많이 호출`될 수 있다.
  2. `동기적`으로 실행되어서 메인 스레드에 영향을 준다.
  3. 영역을 감지하는데 필요한 `Element.getBoundingClientRect()`메서드는 `항상 Reflow를 발생시킨다.`
* 위와는 다르게 IntersectionObserver API는,
  * `비동기적`으로 실행되어, 1, 2번 이슈를 해결할 수 있다.
    * `디바운싱`, `쓰로틀링` 이슈를 신경쓰지 않아도 된다.
  * `reflow를 발생시키지 않는다.`