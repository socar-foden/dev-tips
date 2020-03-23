✅ next Data fetching
* client, server에서 동시에 실행되어 헷갈렸던 getInitialProps가 다른 3개의 메서드로 구별되었다.
  * getStaticProps <b>(Static Generation)</b>: Fetch data at build time.
  * getStaticPaths <b>(Static Generation)</b>: Specify dynamic routes to pre-render based on data.
  * getServerSideProps <b>(Server-side Rendering)</b>: Fetch data on each request.