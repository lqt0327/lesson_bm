## 微前端
- single-spa 
    > https://zh-hans.single-spa.js.org/

## 步骤
- 导入对应文件
    ```html
        <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.1.1/system.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.1.1/extras/amd.min.js"></script>
    ```

- 做对应映射
    ```html
    <script type="systemjs-importmap">
      {
        "imports": {
          "navbar": "http://localhost:8080/js/app.js",
          "app1": "http://localhost:8081/js/app.js",
          "app2": "http://localhost:8082/js/app.js",
          "single-spa": "https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.7/system/single-spa.min.js",
          "vue": "https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js",
          "vue-router": "https://cdn.jsdelivr.net/npm/vue-router@3.0.7/dist/vue-router.min.js"
        }
      }
    </script>
    ```

- 通过Promise all执行对应的single-spa映射和vue，vue-router。
- 注册对应vue的项目
    > registerApplication 是基础配置会用到的最重要的API，调用这个方法可以在single-spa中注册一个应用。
    >
    > 参考：https://zh-hans.single-spa.js.org/docs/api/#registerapplication

- 通过start来启动
    > 必须在你single spa的配置中调用！在调用 start 之前, 应用会被加载, 但不会初始化，挂载或卸载。 start 的原因是让你更好的控制你单页应用的性能。举个栗子，你想立即声明已经注册过的应用（开始下载那些激活应用的代码），但是实际上直到初始化AJAX（或许去获取用户的登录信息）请求完成之前不会挂载它们 。 在这个例子里，立马调用 registerApplication 方法，完成AJAX后再去调用 start方法会获得最佳性能。
    >
    > 参考：https://zh-hans.single-spa.js.org/docs/api/#start


```js
import { setPublicPath } from 'systemjs-webpack-interop'
// 设置webpack的公共路径
// 如果你需要webpack的公共路径来“删除”当前模块url中的一些目录，你可以指定一个“根目录级别”。注意，根目录级别从右到左读，1表示“当前目录”，2表示“上一个目录”:
setPublicPath('navbar', 2)
```


```js
// 这三玩意表示生命周期，写死，一般不用管
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
```


```js
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});
```
- singleSpaVue作用
    > 参考： https://zh-hans.single-spa.js.org/docs/ecosystem-vue