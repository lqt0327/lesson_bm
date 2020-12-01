## link 和 a
```<Link>``` 是 react-router 里实现路由跳转的链接，一般配合 ```<Route>``` 使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，```<Link>``` 的“跳转”行为只会触发相匹配的 ```<Route>``` 对应的页面内容更新，而**不会刷新整个页面**。 而 ```<a>``` 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况），刷新整个页面。

## link
link 点击事件handleClick部分源码
```
    if (_this.props.onClick) _this.props.onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && // ignore everything but left clicks
    !_this.props.target && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();

        var history = _this.context.router.history;
        var _this$props = _this.props,
            replace = _this$props.replace,
            to = _this$props.to;


        if (replace) {
        history.replace(to);
        } else {
        history.push(to);
        }
    }
```

link 做了3件事情：
- 有onclick就执行onclick
- click的时候阻止a标签默认事件（这样子点击```<a href="/abc">123</a>```就不会跳转和刷新页面）
- 再取得跳转href（即是to），用history（前端路由两种方式之一，history & hash）跳转，此时只是链接变了，并没有刷新页面

## pushState
pushState方法就是向history中push一条记录，更改页面url，**但是不刷新页面**

## 参考：
> [react-router 里的 Link 标签和 a 标签有什么区别](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/135)
>
> [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)
>
> [从Vue-router到html5的pushState](https://cloud.tencent.com/developer/article/1394826)