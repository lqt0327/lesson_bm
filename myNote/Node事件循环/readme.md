- Node 清空微任务队列的手法比较特别。在浏览器中，我们只有一个微任务队列需要接受处理；但在 Node 中，有两类微任务队列：next-tick 队列和其它队列。其中这个 next-tick 队列，专门用来收敛 process.nextTick 派发的异步任务。在清空队列时，优先清空 next-tick 队列中的任务，随后才会清空其它微任务。

- 不管你整什么微任务过来，只要它不是 process.nextTick 派发的，全部都要排队在 process.nextTick 后面执行。

http://www.imooc.com/read/70/article/1972