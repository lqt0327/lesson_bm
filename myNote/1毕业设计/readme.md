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

## 3-6
- 如何添加数组 指定位置？？ 或采用链表 ？
- usestate 和 setstate  同步异步更新state 的问题 ？？？
- **a标签的嵌套问题** ？？？？

- 左右添加功能 技术障碍 已解决 
    - 剩余工作：
        1. 为各个模块 命名 按已有逻辑完善 （预计3天）
        2. **内嵌网页 采用iframe**  移动端的适配 rem 或 vw （预计3天）
        3. 页面 的 增删 （2天）
        4. 预览 和 下载技术的突破 （预计1星期）
            - 使用webpack 对 预览页面代码 单独进行 打包
        5. 首页 和 用户页面的完善 （预计1星期）
    - 额外：
        1. 增加 拖拽
        2. 增加 pc 端的预览功能

## 3-7 
- data.json 配图以及配图以下 未配置 需要完善

## 3-15
- **uuid 作为楼层的唯一标识ID 可以在可视化做些唯一映射关系之类的**
    - 作用地方： 楼层导航  楼层定位

## 3-16
已知问题：
- 按钮有 问题  预览页面，会展示黑色矩形
- **段落 tag 颜色有区分，也应该将颜色存储 config.json 中** 
- 列表 部分 tag 颜色有问题

## 预研
- 组建的增删，bug 的修复
- 右侧 工具栏的 楼层定位
    - 点击增加按钮 工具栏会 回到顶部 ？？？
        1. 隐藏 工具栏
        2. 保留上次点击模块的高度
    - 预览页面 滚动时 不会随之滚动 ？？？
        1. 动态监听 top 状态
        2. 滚动事件触发 隐藏 工具栏和背景阴影
- 各个组件 左侧配置面板的完善
    - 考虑下  是否可以使用 一个 generaltemplate 模版


- 每次切换 组件 uuid 都会重新编译


## 3-24
- postmessage 无法传递方法   直接使用postmessage 传递状态 ？ redux将会被抛弃
- 预览/发布 单独再使用一个 jsx 文件 存储配置好的组件的数据 然后对这个react.jsx文件打包 ？？
    - 移动端适配 依旧无法解决
        - 是否可以通过编写相关函数  直接通过函数对css单位做一个相关转换 ？？？


- 后端接口 添加、更新等功能的接口编写
- h5发布页的 移动端适配  各个组件的css 单位 等问题
- 上面记录的 部分组件 样式问题
- 每个组件 专属配置面板的完善
- 多域名or多路径 预览
    - 点击发布 -》 自动分配个url给该页面 ？？
    - 分配唯一的 链接 访问该页面 
    - router中的路径 是否可以从接口中拉去 ？？ 根据文件夹名字 作为路由路径
    - h5 项目 不打包 上传服务端，服务端 通过nodejs 执行打包命令，webpack -》 build 目录下 生成的 html文件（文件名通过md5随机命名，访问时，根据 文件名访问）
        - 点击发布按钮 -》 执行 npm run build ？？？

        - 点击 发布按钮 h5 该如何知道 ？？ 该如何打包 ？？
            - 打开h5链接触发H5端请求后台，没有走兜底，有拿后台配置项生成对应页面
                - 在url后面带上一串随机数，判断
            - 云凤蝶  先生成该页面路径  然后配置页面
                - 发布 -》 打包到事先生成的路径下

            - http://localhost:8082/?pageId=xxx 通过多加一个字段，来保证页面路径的唯一，可使用数据库 tpl表中的id作为页面的区分
                - 拿到url上的pageId 和 数据库中的pageId做匹配 只有匹配上了 才展示页面 否则 展示兜底
                




## 可暂时搁置发布相关，优先处理 组件的配置面板 和部分组件已发现的bug
- 配置面板 数据更新 localstorage如何处理？？？
    - 左侧配置面板 需知道当前操作的是哪个组建
        - id ？？？
        - 数组的下标 ？？？

        - 先用redux做个存储，再将数据存入localstorage，localstorage无法做到在数据变更的时候，实时刷新页面
        - 通过props将变更后的状态，传递给预览页面中的组件
        - 更新localstorage中的数据，需要 给出数组索引 以便准确修改

        - 如果是多层嵌套 该怎么到达正确的位置 修改数据？？？
            - 每个层次 相应数组的索引


- 在左侧面板配置标签，根据标签，筛选模版，   -- 定向推荐功能

- 获取到了 link——address  refs转发，获取 <LinkAddress /> input 中的数据 
    - 如何准确修改对应数据  
        - tpldata[comp_i].children[1] .img_address or .link_address
    - 获取到了相关数据后，对localstorage中的数据做变更

    - 保存当前配置的数据
    - 右侧预览页面 随 左侧的更改改变
        1. 和通天塔一样 彻底将整个页面的数据（html,js,css）整合进json
        2. 通过redux做数据的双向传递
            - 双向绑定成功， 如何保存数据，不会刷新后丢失？？？
                - 采用localstorage ？？
                    - localstorage 数据 无法更改 ？？？ 
                    - localstorage 数据 更改成功后 为何 又被改回了原来的值 ？？？
                    - 重复刷新页面 ？？ 为何数据不是被修改为空 ？？ 也就是usestate中的值 ？？？

    - h5 a标签的跳转 需要完善

## 
- 用户的登陆相关 ：
    - 参考： 
        1. https://github.com/kuangshp/simp-node-auth/blob/master/src/base64.ts
        2. https://github.com/kuangshp/nestjs-mysql-api/blob/master/src/entities/model/system/account.entity.ts


- 左侧 组件配置面板 开发进度-》列表-》网格列表2、1

- 删除功能无法准确删除
    - 右侧工具栏 bug 无法随页面滑动一起滑动
- h5的移动端适配和功能的完善
- 多页面
- 定向推荐

- 预览 页面上方的url 去除 （自动生成）
- 更新页面功能  可视化这边要获取接口中的页面数据

- 图片上传功能

- 添加页面后 就先把该页面数据发送到服务端（created）  然后后续操作均为 更新操作
    - 这样 预览页面中的 url也可以提前预知了
    - 刚创建页面 展示 兜底页面  (h5中判断服务器拿到的数据是否为空，为空则展示兜底页面)

- 发布按钮  服务端更新的逻辑处理

- html2canvas 存在跨域问题，图片无法截取  需要将图片上传到支持跨域的服务器才行
    - https://juejin.cn/post/6844903759559000072
    - https://blog.csdn.net/weixin_43672560/article/details/105121186
    - https://blog.csdn.net/xiaohu12685/article/details/107388519
    - https://html2canvas.hertzen.com/


- React.memo 默认 对比的是使用 memo 包裹的子组件 的父组件的state状态值
    - 父组件 state 状态发生变化，要是想要 memo 包裹的子组建也随之重新渲染，则需要将变化的state作为子组建的props 传递过去
        - 同时子组建也可以通过 memo 的第二个参数，配置回调函数来手动判断 （这个也是需要父组件将state作为子组建的props传递过去  才能生效） 如下：
```js
    export default React.memo(Comp, (prevProps, nextProps) => {
        console.log(prevProps, nextProps, "====");
        if (prevProps.lqt !== nextProps.lqt) {
            return false;
        }
        return true;
    });
    // https://codesandbox.io/s/icy-wood-35p8r?file=/src/Comp.jsx:141-345
```


- 推荐  新增一个表 (防止直接更改推荐列表的模版)
    - id tpldata img_url tag_id
- 推荐 弹窗
    - 左右滑动 或 分页处理

点击推荐页面（选中）-》点击确认按钮-》页面列表自动新增一条-》预览页面展示选中的页面数据

点击删除或  推荐 新增一个页面  左侧 page 面板不刷新


localstorage 已清楚  redux中 未清除 

推荐  双击添加模版  左侧面板不重渲染 ？？？？


- **完善推荐面板中的数据**

- 点击保存 将页面存入localstorage，否则每次从接口中拉取最新数据

- 同一个左侧 组件配置面板 切换组建，面板不会重渲染
    - Input defaultValue 只会保留首次给定的值，不会感知后续 值 的变更
        - 解决办法：react 使用 key ，给key和defaultValue一样的值，通过key来单独重新加载 Input 组件

- 相同组件间 点击切换 组件配置面板不刷新


- h5 的抽离，通天塔的tpl应该是指的本项目中的components
    - config.json 的拆分  yaml