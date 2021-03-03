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


## 1-8
- 左右面板的联动
- 组件参数的设定 ？ redux ？ hooks ？

## 1-11
- 点击子组件 往数组中 添加左侧面板信息
    - 数组 usecontext 所有子组件共享  左侧面板也要能拿到


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



## 对比
config.json + JSON-Schema
Template
Props
States
Service存储
LocalStorage存储

网上大多数 组件相关信息 放入json文件
- 如何处理的  React.createElement ReactDOM.render ? 

我：直接import全部导入，采用 函数 存储，放入数组，循环执行
 - 参数传递 ？ 
 - 组件与配置面板的联动 ？

 lqt-demo2
 - 直接套用 antd 组件
 - React.createElement 配合 ReactDOM.render
 - 导入了全部 antd
 
 lqt-demo2 提供了组件 参数的传递思路 -》json格式 LocalStorage存储

 - 都需要对每个组件逐一配置  

 - DOM树  长截屏  二维码预览


 ## 1-13
 - 解决hooks取代redux  hooks 无法处理中间件 ？
 - 使用redux做数据处理
 - 后端nodejs 应该处理什么 ？
     - 选择组件 -》 保存组件 -》 预览 -》 下载代码


- 配置redux后，函数会被改变，无法做到 通过数组循环输出
    - 解决方案：采用 React.createElement 配合 ReactDOM.render

## 2-3
- 对插入组件的，css类名和样式的自定义操作
- 自定义组件的实现


## 2-6
- 拖拽生成页面 ？ 如何做到 拖拽并停留在指定位置 ？ 
    - 1. 放弃组件这种最小单位，采用模板为最小单位

- 自定义通用模板 ？ 
    - 先定义一个通用的 generateTemplate.jsx 
    - 如何做到 类似 antd 那样 配合 React.createElement 和 ReactDOM.render
        - React.createElement(Banner,{},'')  // Banner自定义组件，通过import导入
        - 如何让React.createElement的第一个参数传入自定义字符串，并理解这个字符串是已注册的react组件 ？

## 2-7
技术关键卡点--已解决

进度计划
- 完善相关模板  （参考云凤蝶，2-17前完成可视化页面的开发）
- 完善首页和后台注册页面， （参考网站：https://588ku.com/image/shangwumokuai.html，https://www.zcool.com.cn/）
- 论文的初步完善
- 2-28
- 定向推荐功能的完成


## 2-8
- 左侧面板的联动
- 左侧面板整体感觉偏大 
- 样式可在自定义模板中先定义好，再在面板上开放部分设置权限给用户

## 2-9
1. 左右联动
2. 完善模板
3. 预览和下载

## 2-10
- 解决左右面板联动问题
    - 通过redux变更状态
- 左侧面板  页面 / 组件设置 / 组件选择  三大块的变更 ？ 

- 完善左侧面板和模板库  **2-14 前完成**

## 2-11
- preview页面 背景阴影跟随 top height 需要即时计算
    - redux 存储 模板数据 （top / height / ...）

## 2-12
- preview 底部需要 处理的 redux状态过多
    - 拆分 底部redux ？ redux-saga ？ 单独提取到一个文件 ？ 

- 增加 propTypes  增加相关效验 和 默认值

## 2-14
- 预览 ？ 二维码预览 ？ 提供域名预览 ？


## 2-18
- 可以根据组件的 key判断，你点击的是哪个组件，然后 展示 添加至此处
    - 但 因为只要展示一个， 如何判断是展示处于组件上方的还是下方的 ？？？

## 2-20
- 将左侧面板中的模板  添加到preview中 替换原本的“添加至此处” ？ 
- 2月内完成左侧面板中的 模板  各个模板的相关配置 ，**2-28云凤蝶停止运营** （尽量做好相关截图的备份）

## 2-22
- 左侧面板的完善
    - 如何将左侧面板中配置的数据 匹配到指定的组件 （因为是多个组件公用一个左侧面板） ？？
    - 是否可以简化为一个公用模板，省去每个模板都要配置一个左侧面板的操作 ？？？

## 2-24
- 移动端适配问题
    - 需要将preview页面改为 **内嵌网页 采用iframe** 然后再考虑rem或vw、vh适配 ？？？ 
    - 优先级 中等  （暂时搁置，采用px过渡，优先完善左侧面板的配置）

## 2-26
- 列表 部分模板可复用 尝试 合并为一个模板

## 3-1
- 点击左侧面板，添加模板
- **内嵌网页 采用iframe**