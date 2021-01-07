# 开发规范

## 技术要求

- React
- React-Router
- Redux + Saga
- ImmutableJS
- Reselect
- ES6 ES7 (Future: Typescript | Flow)
- Koa@2
- Webpack
- Babel compiler
- Stylus

## 目录结构

```
src
├── api ----接口方法
├── application ----页面
├── assets ----字体等资源
├── baseUI ----基础ui
├── components ----模版库
├── layouts ----基础布局
├── routes ----路由
├── utils ----工具方法
├── store
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js

```

## 大概需求
- 定向推荐
    - 选择标签
- 模块库设计 适用人群
    - 暂定为企业网站，只支持浏览器
- 用户个人信息页面
    - 在线预览
    - 自己组件的网页
    - 代码的下载
- 支持用户上传自定义模版
- 支持用户分享已搭建好的网页

参考网站：
- https://www.zcool.com.cn/

## 设计
- webpack自定义设计
- 后端采用nestjs
- 数据库 表
    - 标签
    - 用户信息
    - 登陆和注册

# 插件
- classnames
- redux-saga
- react-loadable
- react-lazyload
- Reselect
- yaml ---默认值的设置

暂不考虑后端，先模拟实现单个用户单个页面操作流程

封装 antd ， 只做组件的拖动

拖动到指定位置  拼装 ？ 代码如何组合 ？
- 函数 拼装 ？
    - 如何导入 ？ 数组 import 该如何导入
        - 1. 全部导入，再根据在数组中是否存在 做判断  打包时，对代码做剪切 删除不需要代码
    - 必须纯函数 ？ 使用生命周期  出错 ？ 能否解决 ？
        - 需要用到的生命周期  由参数传入 ？

- 对代码块 动态操作 ？ 添加 ｜ 删除 ？
- 固定几种大致布局 ？ 修改 细节 ？



12-23 大致思路完成

- 定向推荐 ？
    - 1. 根据现成完整的模版 标签  配合用户的搜索或选择  进行推荐

对于一些 基础ui组件做限制 
- 底部信息 限制 只能添加一个   抛弃数组 使用 boolean 判断
    - 顶部导航栏目


## 1-4
- 如何做到 预览 下载代码 ？
    - 只使用 部分  webpack 编译部分代码 ？ 
    - 如何 避免 import 导入
        - 通过 redux 存储页面数据 ？ 

## 1-5
- 对左侧面板 抽离 ？
- 左侧面板对应 模块 响应 ？ 

- 链接 可抽离 单独 组件
- 标题&关闭  可抽离
- 输入框单独 抽离
- 上传图片 抽离

## ??
1. css模块化存在的问题：
- 对于引入的第三方字体图标库，无法通过类名 修改其样式，如：字体大小
解决办法：
- BEM 命名规范
- 采用 sass 类名的嵌套 给容易冲突的类名加上其父级类名

2. 内联元素
- 内联元素会在一条直线上排列，在同一行从左至右水平排列。直到一行排不下，才会换行。
- 内联元素设置宽、高、margin上下、padding上下无效（竖直无效）。
- 内联元素设置line-height，margin左右、padding左右有效（水平有效）。
- 内联元素的宽高随标签里的内容而变化。

3. input文本框设置字体大小后导致按钮位置偏移解决方案
- https://blog.csdn.net/zhang338448/article/details/106534102
- ```vertical-align: top;```

4. css(sass)文件中使用 路径别名 ？