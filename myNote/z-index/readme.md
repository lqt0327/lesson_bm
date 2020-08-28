## CSS-合理使用z-index控制盒子视轴高度，解决z-index失效

## 关于z-index我们的共识
1. z-index对于普通盒子是无效的  **对于普通盒子，不管z-index值如何，写在html文档中后面的块会在写在前面的盒子上面，float的盒子会在没有float的盒子上面，文字等inline、inline-block元素会在block元素的上面。**

2. 对于受z-index控制的，姑且称之为“神奇”的盒子（其实就是很多博客说的 stacking context，层叠上下文 ），z-index值越大其视轴越高，离用户越近，最大的就在最上面，会遮挡其他神奇盒子。

## 具有哪些样式的盒子会成为神奇盒子（层叠上下文）

首先，我们最常见的定位不是static的盒子，是神奇盒子，其他创建神奇盒子的方式如下：
- z-index值不为auto的flex项(父元素display:flex|inline-flex).
- 元素的opacity值不是1.
- 元素的transform值不是none.
- 元素mix-blend-mode值不是normal.
- 元素的filter值不是none.
- 元素的isolation值是isolate.
- will-change指定的属性值为上面任意一个。
- 元素的-webkit-overflow-scrolling设为touch. 

## 结论
- html < z-index负值神奇盒子(绝对定位) < 块状盒子 < float盒子 < z-index auto或者0的神奇盒子(绝对定位) < z-index正值神奇盒子(绝对定位)
- PS: inline或者inline-block盒子高于float盒子，但低于auto z-index神奇盒子，就是位于粉色和蓝色盒子之间。
- 如果父盒子是神奇盒子，子盒子与其伯伯盒子（子盒子的父盒子的兄弟盒子）的视轴关系是由父盒子与这个伯伯盒子关系决定的。

## 附加
仅使用css如何让一个盒子位于它的兄弟盒子与兄弟盒子的子盒子中间：
```
<style>
    div {
        width: 200px;
        height: 200px;
        border: 5px solid silver;
    }
    .father {
        background-color: red;
    }
    .son {
        position: absolute;
        z-index:99;
        background-color: green;
    }
    .brother {
        position: absolute;
        z-index:50;
        background-color: yellow;
    }
</style>
<div class="father">fahter box <div class="son">son box</div>
</div>
<div class="brother">brother box</div>
```


> 参考：https://blog.csdn.net/qiqingjin/article/details/51705731