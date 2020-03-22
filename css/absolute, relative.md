✅ absolute, relative
* 뱃지모양 레이아웃을 잡을 때 사용된다.
* absolute 포지션을 가진 자식 엘리먼트는 relative 포지션을 가진 부모 엘리먼트를 기준으로 위치한다.
```html
<div style="position: relative">
  <div style="relative: absolute; top: 0; right: -10px;">6</div>
</div>
```