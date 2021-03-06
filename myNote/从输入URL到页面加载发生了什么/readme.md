## 概括
1. DNS解析
2. TCP连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析渲染页面
6. 连接结束

## DNS解析
> DNS解析是一个递归查询的过程。
> 查询 www.baidu.com 的IP地址过程。首先在本地域名服务器中查找，没找到，就向根域名服务器发送请求，如果也没找到，再向com顶级域名服务器发送请求，依此类推。知道最后本地域名服务器得到baidu的IP地址，把它缓存到本地。

> www.baidu.com 的解析过程概括：**.->.com->baidu.com.->www.baidu.com.** （最后的.表示根域名服务器）

## DNS优化
- DNS缓存
    - DNS存在多级缓存，从离浏览器的距离排序的话，有以下几种：浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。
- DNS负载均衡

## 参考
> https://segmentfault.com/a/1190000006879700