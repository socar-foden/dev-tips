✅ getInitialProps
* next에서 초기 props를 컴포넌트에 던져줄 때 사용
* server, client 양쪽에서 모두 실행(각 상황별에 따라 다름)
* <b>(라우터로 접근 시 ---> client에서만 )</b>
* <b>(url로 직접 접근시 ---> server에서만 )</b>
<hr />
* _app.js에서 pageProps를 밑으로 넘겨줘야 한다.