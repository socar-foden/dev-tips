✅ SPA의 CRA 404 에러(라우팅 새로고침 문제)

* CRA 방식의 SPA의 경우, `세부 라우팅된 URL`에서 404 문제가 발생한다.
  * `수동으로 새로고침` 한 경우
  * `직접 URL을 치고` 들어온 경우
* 이유는 아래와 같다.
  * (`connect-history-api-fallback(express 미들웨어) 참조`)
  * (connect-history-api-fallback: https://github.com/bripkens/connect-history-api-fallback) 
  ```
  Single Page Applications (SPA) typically only utilise one index file that is accessible by web browsers: usually index.html. Navigation in the application is then commonly handled using JavaScript with the help of the HTML5 History API. This results in issues when the user hits the refresh button or is directly accessing a page other than the landing page, e.g. /help or /help/online as the web server bypasses the index file to locate the file at this location. As your application is a SPA, the web server will fail trying to retrieve the file and return a 404 - Not Found message to the user.
  ```
* 위 내용을 간단히 정리하면,
  * SPA는 하나의 파일(보통 `index.html`)을 띄워주고, 그 `초기 파일의 HTML5 history API`를 사용하는데, 처음 말했던 것과 같은 경우,
    * `초기 파일(index.html) 자체를 찾을 수 없거나`
    * 웹 서버가 초기 파일을 무시해서 해당 위치에서 파일을 찾을 때 문제가 발생한다.
* 개발서버의 경우(webpack등 사용) 세팅이 매우 간단하고, 실제 배포 환경에서는 `각 서버마다 처리 방식이 다르다.`