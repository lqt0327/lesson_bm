参考：https://redux-saga-in-chinese.js.org/docs/api/

- redux-saga
    - put 等同于什么？  put(action)   put(channel, action)
        - 触发action
        - 创建一个 Effect 描述信息，用来命令 middleware 向 Store 发起一个 action。 这个 effect 是非阻塞型的，并且所有向下游抛出的错误（例如在 reducer 中），都不会冒泡回到 saga 当中。
        
    - call 等同于什么？  call(fn, ...args)
    - fork
    - select

    - takeLatest
    - takeEvery