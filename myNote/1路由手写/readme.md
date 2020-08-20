hash
1. 初始化函数 想清楚需要哪些参数
  - routes 存储 url + 回调函数
  - curUrl 存储当前url路径
  - eventHashRouter 监听hash路由的变化
2. 需求是 根据url路径进行匹配，并执行相应回调函数
3. 用hashchange监听路由变化，并绑定回调函数 得到当前路径 执行相应函数
4. 收尾工作 用户点击 url改变  push replace
5. 解决刷新页面丢失数据bug 监听load 将页面数据进行硬绑定