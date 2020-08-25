- 面试题想考查什么
- 牛客网
- 复盘时间 > 准备时间

1. CSS属性名和值不区分大小写
    id  className querySelector 敏感
    刷题

2. 盒模型
    margin
    行内元素
    当我们使用内外边距时，只有左右方向有效，
    设置四个方向的内边距时，对于行内元素，
    确实 显示 出效果，但是竖直方向的内边距只有效果，
    对其他元素没有影响
    竖直方向 外边距没有效果

3. 怎么回答才完美
    自适应
    flexible.js 老了
    rem、em
    rem 一切可依赖 等比例关系 px2rem
    蓝湖 用法 750px 设计稿
    手机多变 html  font-size 宽度 变化
    10rem
    media query
    vw/vh
    100vw px -> vw 工具
    vm 方案如何做适配？
    百分比
    calc
    postcss
    适配，我还用过vue/react+vw 实现
    js babel
    工作流 webpack
    webpack css .styl  .scss -> css-loader stylus-loader stylus css 编译
    postcss 全新的css库，平台 插件系统
    babel-core  autoprefixer  完成
    box-shadow: 
    -webkit-box-shadow
    cssnext css variable
    三明治  什么东西写的哪 里都规定好了
    1. 移动适配
      vw
    2. postcss 太强大
      vue 内置了postcss
      .postcssrc.js
      px-to-vw
      postcss-px-to-viewport 安装 