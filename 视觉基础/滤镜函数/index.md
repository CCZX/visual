## 图片像素化

对于一张 400像素高400像素宽的图片，它一共有160000个像素点，在Canvas 2D中用**四个通道**来描述每个像素点的信息，每个通道由八个字节组成，所以可以表示 0 - 256范围的十进制数，每个通道又分别对应RGBA的值。

通过canvas的getImageData API 可以获取到图片每个像素点的四个通道的具体值：
```js
function loadImage(src) {
  const img = new Image()
  return new Promise((r) => {
    img.onload = () => {
      r(img)
    }
    img.src = src
  })
}

const img  = await loadImage('xxx')

const { width, height } = img

const offCanvas = new OffscreenCanvas(width, height)
const offCanvasCtx = offCanvas.getContext('2d')
offCanvasCtx.drawImage(img, 0, 0)
const offImageData = offCanvasCtx.getImageData(...[0, 0, width / 2, height / 2])

```

得到的offImageData对象中有三个属性：width height data，其中width 和 height 分别表示图片的宽高，data表示每个像素点通道的具体值：
```js
data[0] // 第一个像素点的红色通道值 第一行第一列
data[1] // 第一个像素点的绿色通道值
data[2] // 第一个像素点的蓝色通道值
data[3] // 第一个像素点的alpha色通道值

data[4] // 第二个像素点的红色通道值 第一行第二列
data[5] // 第二个像素点的绿色通道值
data[6] // 第二个像素点的蓝色通道值
```
