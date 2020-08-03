## 
我们的一个网页 是沿着一条 Z 轴排开的（ps 图层），

## 层叠上下文形成 z-index 调整的就是这个层叠上下文
1. position 不为 static
2. filter transform perspective 不为none
3. will-change

## layers
共同点：都是 z-轴 顺序
**transform: translate3d**
**will-change**
backface-visibility 为 hidden
video
css3里面的 animation 动画开始的时候

video
有 3D transform
backface-visibility 为 hidden
对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）
will-change 设置为 opacity、transform、top、left、bottom、right（其中 top、left 等需要设置明确的定位属性，如 relative 等）

作者：酷吧你我他
链接：https://juejin.im/post/6844904018750210056
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


## 
js -> relayout -> repaint -> composite(合成) -> GPU

## 提升 layers 的好处
- 当前这个layers变化不会影响其它layers
- 对于 transform、opacity 产生变化了，不会经过 relayout repaint 跳到composite
