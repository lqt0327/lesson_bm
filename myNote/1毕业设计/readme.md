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
├── client
│   ├── components
│   │   ├── Shared ----组件库
│   │   ├── Feature
│   │   ├── Page ----页面
│   │   └── Scene ----应用场景
│   ├── reducers
│   ├── sagas
│   ├── selectors
│   ├── services ----接口方法
│   ├── constants ----常量
│   ├── utils ----工具方法
│   ├── styles ----全局样式
│   │   ├── mixins.styl
│   │   └── variables.styl
│   ├── routes ----应用路由
│   ├── main.jsx
│   └── store.js
└── server ----本地服务器
    ├── middlewares ----中间件
    ├── routers 
    ├── mocks ----模拟数据源
    ├── app.js
    └── index.js
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
