## RGB & RGBA

表示方法：#RRGGBB，其中RR、GG、BB分别是两位的十六机制数，分别表示红、绿、蓝三色通道的色阶，色阶可以表示某个通道的强弱。因为RGB用两位十六进制来表示每个通道的色阶，所以每个通道的取值范围是 0 - 256。所以RGB理论上有 256 * 3 种不同改的颜色组合。
![](https://static001.geekbang.org/resource/image/5f/70/5ff37612dff2e7a89c58fcdc91236270.jpg)

RGB还有一种表示方式：rgb(red, green, blue)，这里的red，green，blue是十进制数，表示范围为：0 - 256

但是RGB的表示方式有一定的局限性，对于RGB颜色来说我们只能判断大致是偏红还是偏蓝或者在颜色立方体中的大致位置，所以不能明显的判断出两个色值之间的颜色差异。也就是说，**当要选择一组颜色给图表使用时，我们并不知道要以什么样的规则来配置颜色，才能让不同数据对应的图形之间的对比尽可能鲜明。**

## HSL & HSV

HSL：色相（Hue）+ 饱和度（Saturation）+ 亮度（Lightness）
HSV：色相（Hue）+ 饱和度（Saturation）+ 明度（Value）
其中色相是角度，取值范围是 0 到 360 度；饱和度、亮度、明度的取值范围都是从 0 到 100%。

## CIE Lab

CIE Lab简称lab，是符合人类感觉的色彩空间。其中 L 表示亮度，a和b表示颜色对立度，RGB值可以lab转换但是转换规则比较复杂。目前还没有图形系统能够支持CIE Lab。


参考：
https://zhuanlan.zhihu.com/p/67930839
https://time.geekbang.org/column/article/260922
