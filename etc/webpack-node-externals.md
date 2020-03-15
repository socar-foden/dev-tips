✅ webpack-node-externals
* <b>번들링 된 파일의 사이즈가 너무 크다면</b>, node_modules의 모든 의존성이 포함되어  빌드 된 것은 아닌지 의심해봐야 한다. (특히, create-react-app을 사용하지 않았을 때)
* webpack-node-externals는 쓸데없는 외부 모듈들을 <b>번들 대상에서 제외시켜준다.</b>