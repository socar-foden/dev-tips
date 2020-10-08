✅ parser 차단 리소스, render 차단 리소스

* `parser 차단 리소스`
  * `Javascript`
    * Javascript를 사용하면 ** 콘텐츠, 스타일, 사용자와의 상호작용 등 `거의 모든 것을 수정할 수 있기 때문에`, DOM 생성을 차단하고 파싱을 중단한다.
    * 따라서, HTML parser는 `<script>` 태그를 만나면, `DOM 생성 프로세스(파싱)`을 중단하고 `Javascript 엔진`에 권한을 넘긴다.
* `render 차단 리소스`
  * `HTML, CSS`
    * Repaint 과정은 `생성된 Render 트리`로 진행되기 때문에, 레이아웃에 영향을 줄 수 있는 `HTML, CSS`는 render를 차단한다.