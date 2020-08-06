## get post 的区别
一个是req body， 一个是 querstring （a=1&b=2）
在浏览器
用户输入 url
img link script  GET 参数也只能放到 URL 里面去了

xmlhttrequest http postMan 只要客户端服务端约定好，参数放到哪里是不受限制的

baidu.com/search?s=js
组成 url 的一部分

从协议本身来说，并没有限制 GET 传递参数不能放到body
POST 传递的参数也可以放到 querstring

一个 url 由哪些部分组成

- 语义不一样，GET、POST
- GET 资源可以缓存，POST 不能缓存
- GET url 长度有限（浏览器）， post req body 不限制的
- GET 不安全 POST 更安全  （其实都是不安全的，http是明文传输，https）