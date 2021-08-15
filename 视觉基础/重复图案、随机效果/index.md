## 重复图案
比如网格就是经典的重复图案。

最简单可能会想到使用canvas来实现，但是使用canvas如果canvas画布的内容变化了就会导致重复图案重新绘制，所以会造成一定的性能问题。

### 1、使用background-image
```css
canvas {
  background-image: linear-gradient(to right, transparent 90%, #ccc 0),
    linear-gradient(to bottom, transparent 90%, #ccc 0);
  background-size: 8px 8px, 8px 8px;
}
```

### 2、使用Shader
利用了GPU并行运算的特点，使用着色器绘制重复图案。不会因为网格的增加而消耗更多的性能。

## 分形图案
一个图案可以分割成无数个部分，每个部分的形状又和整体相似。

## 随机图案


## 参考
https://time.geekbang.org/column/article/262330
