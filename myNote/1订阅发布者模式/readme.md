## 发布-订阅模式
> 发布-订阅模式其实是一个一对多的依赖关系，当主体对象的状态发生改变时，会通知其它依赖于它对象。
>
> 订阅者把自己想订阅的事件注册到调度中心，当发布者发布该事件到调度中心时，调度中心会调用订阅者发布到调度中心的处理代码。

## 如何实现发布-订阅模式？
- 创建一个对象
- 创建一个缓存列表（创建一个调度中心）
- 通过on方法来把函数fn加入缓存列表中（订阅者将事件注册到调度中心）
- 通过emit方法取到arguments里的第一个参数event，根据event的值去执行缓存列表中对应函数。（发布者发布事件到调度中心，调度中心统一调用订阅者的处理代码）
- 通过off方法根据event值取消订阅（取消订阅）
- 通过once方法设置只监听一次，调用完毕后删除缓存函数（订阅一次）

优点
- 对象之间解耦
- 异步编程中，可以更松耦合的代码编写

缺点
- 创建订阅者本事要消耗一定的时间和内存
- 虽然可以弱化对象之间的联系，多个发布者和订阅者嵌套在一起的时候，程序难以跟踪和维护


> **观察者模式**：观察者（Observer）直接订阅（Subscribe）主题（Subject），而当主题被激活的时候，会触发（Fire Event）观察者里的事件。

> **发布订阅模式**：订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Event Channel），当发布者（Publisher）发布该事件（Publish Event）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。
### 差异
- 在观察者模式中，观察者是知道 Subject 的，Subject 一直保持对观察者进行记录。然而，在发布订阅模式中，发布者和订阅者不知道对方的存在。它们只有通过消息代理进行通信。
- 在发布订阅模式中，组件是松散耦合的，正好和观察者模式相反。
- 观察者模式大多数时候是同步的，比如当事件触发，Subject 就会去调用观察者的方法。而发布-订阅模式大多数时候是异步的（使用消息队列）。
- 观察者模式需要在单个应用程序地址空间中实现，而发布-订阅更像交叉应用模式。


```js
let eventEmitter = {
    // 缓存列表
    list: {},
    // 订阅
    on (event, fn) {
        let _this = this;
        // 如果对象中没有对应的 event 值，也就是说明没有订阅过，就给 event 创建个缓存列表
        // 如有对象中有相应的 event 值，把 fn 添加到对应 event 的缓存列表里
        (_this.list[event] || (_this.list[event] = [])).push(fn);
        return _this;
    },
    // 监听一次
    once (event, fn) {
        // 先绑定，调用后删除
        let _this = this;
        function on () {
            _this.off(event, on);
            fn.apply(_this, arguments);
        }
        on.fn = fn;
        _this.on(event, on);
        return _this;
    },
    // 取消订阅
    off (event, fn) {
        let _this = this;
        let fns = _this.list[event];
        // 如果缓存列表中没有相应的 fn，返回false
        if (!fns) return false;
        if (!fn) {
            // 如果没有传 fn 的话，就会将 event 值对应缓存列表中的 fn 都清空
            fns && (fns.length = 0);
        } else {
            // 若有 fn，遍历缓存列表，看看传入的 fn 与哪个函数相同，如果相同就直接从缓存列表中删掉即可
            let cb;
            for (let i = 0, cbLen = fns.length; i < cbLen; i++) {
                cb = fns[i];
                if (cb === fn || cb.fn === fn) {
                    fns.splice(i, 1);
                    break
                }
            }
        }
        return _this;
    },
    // 发布
    emit () {
        let _this = this;
        // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出
        let event = [].shift.call(arguments),
            fns = [..._this.list[event]];
        // 如果缓存列表里没有 fn 就返回 false
        if (!fns || fns.length === 0) {
            return false;
        }
        // 遍历 event 值对应的缓存列表，依次执行 fn
        fns.forEach(fn => {
            fn.apply(_this, arguments);
        });
        return _this;
    }
};

function user1 (content) {
    console.log('用户1订阅了:', content);
}

function user2 (content) {
    console.log('用户2订阅了:', content);
}

function user3 (content) {
    console.log('用户3订阅了:', content);
}

function user4 (content) {
    console.log('用户4订阅了:', content);
}

// 订阅
eventEmitter.on('article1', user1);
eventEmitter.on('article1', user2);
eventEmitter.on('article1', user3);

// 取消user2方法的订阅
eventEmitter.off('article1', user2);

eventEmitter.once('article2', user4)

// 发布
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article1', 'Javascript 发布-订阅模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');
eventEmitter.emit('article2', 'Javascript 观察者模式');

// eventEmitter.on('article1', user3).emit('article1', 'test111');

/*
    用户1订阅了: Javascript 发布-订阅模式
    用户3订阅了: Javascript 发布-订阅模式
    用户1订阅了: Javascript 发布-订阅模式
    用户3订阅了: Javascript 发布-订阅模式
    用户4订阅了: Javascript 观察者模式
*/
```

> 参考：https://segmentfault.com/a/1190000019260857