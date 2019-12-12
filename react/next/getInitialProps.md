✅ getInitialProps
* next에서 초기 props를 컴포넌트에 던져줄 때 사용
* server, client 양쪽에서 모두 실행(각 상황별에 따라 다름)
* <b>(라우터로 접근 시 ---> client에서만)</b>
* <b>(url로 직접 접근시 ---> server에서만)</b>
<hr />

* _app.js에서 pageProps를 밑으로 넘겨줘야 한다.
* req, res.. 등 여러속성이 가능하다.
* <b>주의사항: pages 하위 파일에서만 사용할 수 있다.</b>