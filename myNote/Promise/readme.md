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