const mid1 = (next) => (action) => {
    if(typeof action === 'function') {
        return action();
    }
    return next(action);
}

const mid2 = (next) => (action) => {
    console.log('mid2 start')
    next()
    console.log('mid2 end')
}
// redux 已经加载完了 两个中间件
const middlewares = [mid1, mid2];
// compose  flow
function myFlow(fns) {
    // 组合所有的 函数
    // fn3(fn2(fn1()))
    return function(defaultVal) {
      let res = defaultVal;
      while(fns.length) {
        let fisrt = fns.shift();
        res = fisrt(res);
      }
      return res;
    }
  }
const chain = myFlow(middlewares)
let nbDispatch = chain(()=>{
    console.log(`就是 redux 源码内部最原始 只能处理 action 是纯对象的 dispatch 的函数`)
});  // ?   
// mid 返回的是个函数
// fn3(fn2(fn1()))  中间件得到的上一个的结果 也是个函数
nbDispatch({a: 1})