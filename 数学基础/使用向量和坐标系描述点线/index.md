

canvas默认坐标原点是左上角，但是这不符合我们的直觉，在每次绘制图形的时候需要花费大量时间在坐标的转换上。为了方便我们可以对canvas的坐标进行转换

https://time.geekbang.org/column/article/256827.
https://www.bilibili.com/video/BV1QJ411D7jz?t=874

## 向量加减法

a = (x1, y1)
b = (x2, y2)

a + b = (x1 + x2, y1 + y2)
a - b = (x1 - x2, y1 - y2)


## 向量点乘

向量的点乘结果是一个标量。

假设，现在有两个 N 维向量 a 和 b，a = [a1, a2, ...an]，b = [b1, b2, ...bn]，那向量的点积代码如下：
```
a•b = a1*b1 + a2*b2 + ... + an*bn
```
对于二维向量：
```js
a = (x1, y1), b = (x2, y2)
a·b = x1x2 + y1y2
```

a·b 的几何意义是a向量乘以b向量在a向量上的分量。
```js
a·b = a * b * Math.cos()
```

## 向量叉乘

向量叉乘的结果是一个矢量。新的矢量的方向符合右手系的坐标规则。

1[](https://static001.geekbang.org/resource/image/72/ca/72227ffca461a60a1e79c0f54b6777ca.jpg)
```js
a X b = [y1 * z2 - y2 * z1, - (x1 * z2 - x2 * z1), x1 * y2 - x2 * y1]
```

对于二维向量：
```js
a = (x1, y1), b = (x2, y2)
a X b = x1y2  x2y1
```

向量叉乘的几何意义是向量a、b组成的四边形的面积。
```js
a·b = a * b * Math.sin()
```
