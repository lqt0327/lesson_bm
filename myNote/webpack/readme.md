## loader和plugin有啥区别
- Loader，加载器，webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其它文件打包，就要用到loader。所以loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力
- plugin，插件，plugin可以扩展webpack的功能，比如打包和优化，让webpack具有更多的灵活性。在webpack生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果
- loader在module.rules中配置，也就是说作为模块的解析规则而存在。类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件(test)，使用什么加载(loader)和使用的参数(options)
- plugin在plugins中单独配置。类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入

## webpack的完整构建流程
- 解析webpack配置、shell命令配置参数，合并得到最后的配置
- 初始化compiler对象、注册插件、监听构建生命周期事件，执行run方法开始编译
- 从配置的entry入库，解析文件，构建AST语法树，找出依赖关系，递归执行
- 更具文件类型，调用相应的loader加载器对文件进行转换，再找出依赖模块，重复该过程直到依赖的文件都完成
- 递归之后，得到文件信息，包括模块及模块间的依赖关系，根据配置生成chunk代码
- 输出所有的chunk到文件系统

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
```
  optimization: {
    splitChunks: {
      chunks: 'all',   // all 所有的 import // async import() 
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
        },
      }
    }
  },
```

优化打包速度
- HappyPack：HappyPack 可以将 Loader 的同步执行转换为并行的
- DLL：**DllPlugin 可以将特定的类库提前打包然后引入。**这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。
- 优化 Loader 的文件搜索范围
    ```
    module.exports = {
        module: {
            rules: [
            {
                // js 文件才使用 babel
                test: /\.js$/,
                loader: 'babel-loader',
                // 只在 src 文件夹下查找
                include: [resolve('src')],
                // 不会去查找的路径
                exclude: /node_modules/
            }
            ]
        }
    }
    ```
    - 我们还可以将 Babel 编译过的文件缓存起来，下次只需要编译更改过的代码文件即可，这样可以大幅度加快打包时间
    ```
    loader: 'babel-loader?cacheDirectory=true'
    ```