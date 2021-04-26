## 
登陆 -》 生成token -》 服务端保存token到session -》 客户端-》保存token  localstorage ??? 
修改密码 -》 生成新token -》 更新session -》 客户端对比 ？？？（何时进行对比） -》 跳转至登陆页面
一个账号 多人使用 -》 如何判断并登出其余 只保留最新登陆 ？？？ 


@UseGuards(AuthGuard)

## 参考
- https://blog.csdn.net/qq_34803821/article/details/84980270