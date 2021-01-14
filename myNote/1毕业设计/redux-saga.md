参考：https://redux-saga-in-chinese.js.org/docs/api/

- redux-saga
    - put 等同于什么？  put(action)   put(channel, action)
        - 触发action
        - 创建一个 Effect 描述信息，用来命令 middleware 向 Store 发起一个 action。 这个 effect 是非阻塞型的，并且所有向下游抛出的错误（例如在 reducer 中），都不会冒泡回到 saga 当中。
        
    - call 等同于什么？  call(fn, ...args)
        - 创建一个 Effect 描述信息，用来命令 middleware 以参数 args 调用函数 fn 。
    - fork
        - 创建一个 Effect 描述信息，用来命令 middleware 以 非阻塞调用 的形式执行 fn。
    - select

    - takeLatest
    - takeEvery
        - 通过上面两个api   call

    - 疑问：什么情况下需要区分使用fork、call ？

    - 先不考虑 不使用import 导入的情况
    - 先按目前思路来写一版

    目前主要问题
    - 组件和面板的联动
    - 组件参数的传递和接收
    - nodejs的使用地方 ？


- redux-thunk
    - 支持 action 中return 返回函数，并可以在函数内部做条件判断或异步操作