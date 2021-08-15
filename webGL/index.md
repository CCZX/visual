# 1、特点

1. webGL是专门用于设计复杂视觉呈现的
2. 更加的偏底层，需要和内存、GPU打交道

# 2、图形系统组成部分

# 3、GPU、CPU

CPU更适合做计算复杂的操作，GPU适合做计算简单但是计算量大的操作。无论有多少个像素点，都可以在着色器程序中被GPU同时执行。

# 4、webGL绘制步骤

1. 创建webGL上下文
2. 创建webGL程序
3. 将数据存到缓冲区
4. 将缓冲区数据读取到GPU
5. GPU执行webGL程序，输出结果

# 5、着色器

1. 顶点着色器：处理图形的顶点数据
2. 片元着色器：处理光栅化后的像素信息

## 5.1、顶点着色器

1. 通过 gl_Position 设置顶点

## 5.2、片元着色器

# webGL中常见变量

## 1、gl_PointSize：float类型
当webGL执行绘制函数gl.frawArrays()绘制模式是点模式gl.POINTS的时候，顶点着色器语言main函数中才会用到内置变量gl_PointSize，使用内置变量gl_PointSize主要是用来**设置顶点渲染出来的方形像素点的大小**。

```js
void main() {
  // 给内置变量gl_PointSize赋值像素大小，需要注意的是值是浮点数
  gl_PointSize = 2.0
}

// 绘制函数的绘制模式
gl.drawArrays(gl.POINTS, 0, 点数量)
```

## 2、gl_Position：vec4类型
gl_Position内置变量主要和顶点相关，出现的位置是顶点着色器语言的main函数中。gl_Position内置变量表示**最终传入片元着色器片元化要使用的顶点位置坐标。**

如果只有一个顶点，直接在给顶点着色器中设置内置变量gl_Position赋值就可以，内置变量gl_Position的值是思维向量vec4(x, y, z, 1.0)，前三个参数表示顶点xyz的坐标，第四个参数是浮点数1.0.

```js
void main() {
  // 表示顶点坐标位于原点
  gl_Position = vec4(0, 0, 0, 1.0)
}
```

如果你想完全理解内置变量gl_Position，必须建立逐顶点的概念，如果JavaScript出现一个变量复制语句已你可以理解为仅仅只执行一次，但是对于着色器不能这么理解如果有多个顶点，需要为每一个顶点都执行顶点着色器主函数main中的程序。

多个顶点的时候，内置变量gl_Position对应的值是attribute关键字声明的顶点坐标位置坐标变量apos，顶点位置坐标变量apos变量对应了JavaScript代码中多个顶点位置数据。

```html
<script type="x-shader/x-vertex"> 
  attribute vec4 apos;
  void main() {
    //  顶点坐标apos赋值给内置变量gl_Position
    // 逐顶点处理数据
    gl_Position = apos
  }
</script>
````

逐顶点处理数据的案例：webgl的每个顶点位置坐标都会通过平移矩阵m4进行矩阵变换，相当于批量操作所有的顶点数据进行了平移，只是平移计算通过矩阵的乘法完成。逐顶点在这里的提现就是每一个顶点都会执行main函数中的矩阵变换。可以理解为流水线，经过我这里的物品都会经过相同的处理。

```js
attribute vec4 apos;
void main() {
  //创建平移矩阵(沿x轴平移-0.4)
  //1   0   0  -0.4
  //0   1   0    0
  //0   0   1    0
  //0   0   0    1
  mat4 m4 = mat4(1,0,0,0, 0,1,0,0, 0,0,1,0, -0.4,0,0,1)
  // 平移矩阵m4左乘顶点坐标(vec4类型数据可以理解为线性代数中的nx1矩阵，即列向量)
  // 逐顶点进行矩阵变换
  gl_Position = m4 * apos;
}
```

```js
<script>
    //顶点着色器源码
    var vertexShaderSource = document.getElementById( 'vertexShader' ).innerText;
    //片元着色器源码
    var fragShaderSource = document.getElementById( 'fragmentShader' ).innerText;
    //初始化着色器
    var program = initShader(gl,vertexShaderSource,fragShaderSource);
    //获取顶点着色器的位置变量apos，即aposLocation指向apos变量。
    var aposLocation = gl.getAttribLocation(program,'apos');

    //类型数组构造函数Float32Array创建顶点数组
    var data=new Float32Array([0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5]);

    //创建缓冲区对象
    var buffer=gl.createBuffer();
    //绑定缓冲区对象,激活buffer
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer);
    //顶点数组data数据传入缓冲区
    gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    //缓冲区中的数据按照一定的规律传递给位置变量apos
    gl.vertexAttribPointer(aposLocation,2,gl.FLOAT,false,0,0);
    //允许数据传递
    gl.enableVertexAttribArray(aposLocation);
...
</script>

```

## gl_FragColor
gl_FragColor内置变量主要用于设置片元像素的颜色，出现位置是片元着色器的main函数中

  

# 参考
https://blog.csdn.net/u014291990/article/details/103112914
