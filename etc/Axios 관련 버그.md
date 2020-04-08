✅ Axios 관련 버그
* default 설정을 건드리는 부분이 이상하다. 아래와 같이 인터셉터를 사용하는 게 확실하다
```javascript
import Axios from 'axios'

const AxiosInstance = Axios.craete({
  baseURL: 'http://~~'
})

AxiosInstance.interceptors.request.use(config => {
  config.params = {
    ...config.params, // 추후에 넘길 파라미터를 받기 위해
    api_key: '!@#!@ASDASD'
  }

  return config
})
```

* .default로 접근해라, ~로 해라 기타 방법이 많은데, 작동하지 않는다.