✅ img태그 onload, Promise
* img 태그를 사용할 때, 이미지 로드가 확실히 끝난 이후 처리해야 하는 경우, 아래와 같이 Promise와 onload를 활용해준다.
```javascript
const setCanvasImage = async () => {
  let loadedImg

  const imgPromise = () => {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = 'https://~~~~~.jpg'
      /** 이미지가 로드 되었다면 */
      img.onload = () => {
        loadedImg = img
        resolve()
      }
    })
  }

  await imgPromise()
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  /** 만약 단순히 img 태그를 생성후 아래와 같이 사용했다면, 빈 이미지가 들어갈 수 있어서 추후 에러를 발생시킨다. */
  ctx.drawImage(loadedImg, 0, 0)
}
```