## 坐标

默认情况下svg的坐标和浏览器的像素对应。

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="orange" />
</svg>
```

SVG 坐标系和 Canvas 坐标系完全一样，都是以图像左上角为原点，x 轴向右，y 轴向下的左手坐标系。而且在默认情况下，SVG 坐标与浏览器像素对应，所以 100、50、40 的单位就是 px，也就是像素，不需要特别设置。

通过给SVG设置 viewbox 属性可以改变SVG的坐标。

## 创建 svg 元素

```js
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
```

`createElementNS`第一个属性表示命名空间。

## 作为图像使用

SVG 可以作为一种图像格式使用，所以我们可以将生成的 SVG 作为图像，然后绘制到 Canvas 上或者通过 img 标签引入。
