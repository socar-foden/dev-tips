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

* 스크롤 이벤트와 다르게 `디바운싱`, `쓰로틀링` 이슈를 신경쓰지 않아도 된다.
* `offsetTop`, `getBoundingClientRect` 등 기존의 뷰포트 영역 감지 속성들은 `reflow`를 발생시키는데, IntersectionObserver API는 reflow를 발생시키지 않는다.