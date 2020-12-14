## 1. 如果当前任务执行时间过久，会影响定时器任务的执行
```
    function bar() {
        console.log('bar')
    }
    function foo() {
        setTimeout(bar, 0);
        for (let i = 0; i < 5000; i++) {
            let i = 5+8+8+8
            console.log(i)
        }
    }
    foo()
```
通过 setTimeout 设置的回调任务被放入了消息队列中并且等待下一次执行，这里并不是立即执行的；要执行消息队列中的下个任务，需要等待当前的任务执行完成，由于当前这段代码要执行 5000 次的 for 循环，所以当前这个任务的执行时间会比较久一点。这势必会影响到下个任务的执行时间。

## 2. 如果 setTimeout 存在嵌套调用，那么系统会设置最短时间间隔为 4 毫秒
```
function cb() { setTimeout(cb, 0); }
setTimeout(cb, 0);
```
在 Chrome 中，定时器被嵌套调用 5 次以上，系统会判断该函数方法被阻塞了，如果定时器的调用时间间隔小于 4 毫秒，那么浏览器会将每次调用的时间间隔设置为 4 毫秒。

## 3. 未激活的页面，setTimeout 执行最小间隔是 1000 毫秒
除了前面的 4 毫秒延迟，还有一个很容易被忽略的地方，那就是未被激活的页面中定时器最小值大于 1000 毫秒，也就是说，如果标签不是当前的激活标签，那么定时器最小的时间间隔是 1000 毫秒，目的是为了优化后台页面的加载损耗以及降低耗电量。

## 4. 延时执行时间有最大值
```
function showName(){
  console.log("极客时间")
}
var timerID = setTimeout(showName,2147483648);//会被理解调用执行
```
除了要了解定时器的回调函数时间比实际设定值要延后之外，还有一点需要注意下，那就是 Chrome、Safari、Firefox 都是以 32 个 bit 来存储延时值的，32bit 最大只能存放的数字是 2147483647 毫秒，这就意味着，如果 setTimeout 设置的延迟值大于 2147483647 毫秒（大约 24.8 天）时就会溢出，那么相当于延时值被设置为 0 了，这导致定时器会被立即执行。

## 5. 使用 setTimeout 设置的回调函数中的 this 不符合直觉
```
var name= 1;
var MyObj = {
  name: 2,
  showName: function(){
    console.log(this.name);
  }
}
setTimeout(MyObj.showName,1000)
```
如果被 setTimeout 推迟执行的回调函数是某个对象的方法，那么该方法中的 this 关键字将指向全局环境，而不是定义时所在的那个对象。

解决办法：
- 将MyObj.showName放在匿名函数中执行
```
//箭头函数
setTimeout(() => {
    MyObj.showName()
}, 1000);
//或者function函数
setTimeout(function() {
  MyObj.showName();
}, 1000)
```
- 使用 bind 方法，将 showName 绑定在 MyObj 上面\
```
setTimeout(MyObj.showName.bind(MyObj), 1000)
```