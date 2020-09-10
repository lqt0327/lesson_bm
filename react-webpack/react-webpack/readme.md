## 优化

分离基础库

- externals
防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
https://www.webpackjs.com/configuration/externals/#root

图片压缩
imagemin-webpack-plugin

css分离
mini-css-extract-plugin

分离模块
  optimization: =》
    splitChunks:

优化打包速度
HappyPack
DLL