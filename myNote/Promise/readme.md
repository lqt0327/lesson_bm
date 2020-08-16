## 说说你理解的 Promise
Promise对象是一个代理对象。他接受你传入的executor（执行器）作为入参，允许你把异步任务的成功和失败分别绑定到对应的处理方法上去。

- pending 状态，表示进行中。这是Promise实例创建后的一个初始态
- fulfilled 状态，表示成功完成。这是我们在执行器中调用resolve后，达成的状态
- rejected 状态，表示操作失败、被拒绝。这是我们在执行器中调用reject后，达成的状态
Promise 实列的状态是可以改变的，但它只允许改变一次。

## Promise 常见方法有哪些？
- Promise.all(iterable):这个方法返回一个新的promise对象，该promise对象在iterable参数对象里的所有promise对象都成功的时候才会触发成功。
```js
var p1 = Promise.resolve('1号选手');
var p2 = '2号选手';
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "3号选手");
}); 
Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); //  ["1号选手", "2号选手", "3号选手"]
});
```

- Promise.race(iterable): 当iterable参数里的任意一个子promise成功或失败后，父promise马上会用子promise的成功或失败返回值作为参数调用父promise绑定的处理函数，并返回该promise对象
```js
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "1号选手"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 50, "2号选手"); 
});

// 这里因为 2 号选手返回得更早，所以返回值以 2号选手为准
Promise.race([p1, p2]).then(function(value) {
  console.log(value); //  "2号选手"
});
```

- Promise.reject(reason)： 返回一个状态为失败的Promise对象，并将给定的失败信息传递给对应的处理方法
- Promise.resolve(value)：它返回一个 Promise 对象，但是这个对象的状态由你传入的value决定，情形分以下两种：
  - 如果传入的是一个带有 then 方法的对象（我们称为 thenable 对象），返回的Promise对象的最终状态由then方法执行决定
  - 否则的话，返回的 Promise 对象状态为 fulfilled，同时这里的 value 会作为 then 方法中指定的 onfulfilled 的入参

## 异步promise.all为什么可以返回很多网络请求最终状态?

- 需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。

- p1,p2,p3都是返回promise实例，**Promise.all不关心他们的执行顺序**,如果他们都返回成功的状态，Promise.all则返回成功的状态，输出一个数组，是这三个p1,p2,p3的返回值，数组的顺序和他们的执行顺序无关，和他们作为参数排列的顺序有关

## 实现Promise

```js 
function CutePromise(executor) {
    this.value = null;
    this.reason = null;
    this.status = 'pending';

    this.onResolvedQueue = [];
    this.onRejectedQueue = [];

    var self = this;

    function resolve(value) {
        if(self.status !== 'pending') {
            return;
        }
        self.value = value;
        self.status = 'resolved';
        setTimeout(()=>{
            self.onResolvedQueue.forEach(resolved=> resolved(self.value))
        })
    }

    function reject(reason) {
        if(self.status !== 'pending') {
            return;
        }
        self.reason = reason;
        self.status = 'rejected';
        setTimeout(()=>{
            self.onRejectedQueue.forEach(rejected => rejected(self.reason));
        })
    }

    executor(resolve, reject);
}
CutePromise.prototype.then = function (onResolved, onRejected) {
    if(typeof onResolved !== 'function') {
        onResolved = function(x) {
            return x;
        }
    }
    if(typeof onRejected !== 'function') {
        onRejected = function(e) {
            throw e;
        }
    }

    var self = this;
    if(self.status === 'resolved') {
        onResolved(self.value);
    }else if (self.status === 'rejected') {
        onRejected(self.reason)
    }else if (self.status === 'pending') {
        self.onResolvedQueue.push(onResolved);
        self.onRejectedQueue.push(onRejected);
    }
    return this;
}

const cutePromise = new CutePromise(function(resolve,reject){
    console.log("success");
    resolve("1");
});
cutePromise.then(function(res) {
    console.log(res);
    console.log("res")
    // reject('2')
}).then(value => {
    console.log("value");
})
```

## 练习

```js
// 说结果
console.log(1);
setTimeout(()=>{console.log(2)})
Promise.resolve().then(()=>{console.log(3)})
var p = new Promise((res)=>{
console.log(4)
setTimeout(()=>{
res(5)
console.log(6)
})
})
p.then((r)=>{console.log(r)})   

// 1 4 3 5 2 6  错误

// 1 4 3 2 6 5 正确
```