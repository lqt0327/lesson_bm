> HTTP 是浏览器中最重要且使用最多的协议，是浏览器和服务器之间的通信语言，也是互联网的基石。

## HTTP/0.9
> 用来在网络之间传递 HTML 超文本的内容，所以被称为超文本传输协议。
- **HTTP基于TCP协议**，建立连接的过程就是TCP协议三次握手的过程
- 建立好连接，**发送get请求**
- 服务器接收请求信息，读取HTML文件，**将数据以ASCII字符流返回给客户端**
- 注：只有一个请求行，**没有HTTP请求头和请求体**

## HTTP/1.0
- **引入状态码**
- 为减轻服务器压力，**提供了Cache机制**，用缓存来下载已经下载过的数据
- 服务器需要统计客户端的基础信息，在请求头中假如了用户代理的字段

## HTTP/1.1
- **改进持久连接** （HTTP/1.0每进行一次HTTP通信，都需要经历简历TCP连接、传输HTPP数据和断开TCP连接三个阶段。HTTP/1.1 中增加了持久连接的方法，它的特点是在一个 TCP 连接上可以传输多个 HTTP 请求，只要浏览器或者服务器没有明确断开连接，那么该 TCP 连接会一直保持）
    - **持久连接在HTTP/1.1中默认开启**
    - **浏览器对于同一个域名，默认允许同时建立6个TCP连接**
- **不成熟的HTTP管线化**
- **提供虚拟主机的支持** （原来只允许一台主机一个域名，现在可以一台主机多个域名）
- **对动态生成的内容提供了完美支持**
- **客户端cookie、安全机制**

**存在的问题：**
- **对于带宽的利用率不理想** （带宽是指每秒最大能发送或者接收的字节数。我们把每秒能发送的最大字节数称为上行带宽，每秒能够接收的最大字节数称为下行带宽。）
- **TCP启动慢**
- **同时开启多条TCP连接，这些连接会竞争固定的带宽**
- **HTTP/1.1 队头阻塞问题**

## HTTP/2
- **一个域名只使用一个TCP长连接**
- **通过二进制分帧层，实现HTTP的多路复用，解决对头阻塞问题**
- 可设置请求的优先级
- 服务器推送
- 头部压缩

存在问题：
- TCP的队头阻塞（在 TCP 传输过程中，由于单个数据包的丢失而造成的阻塞称为 TCP 上的队头阻塞。）
- TCP建立连接的延时
- TCP协议僵化

## HTTP/3 - QUIC协议
> HTTP/3 选择了一个折衷的方法——UDP 协议，基于 UDP 实现了类似于 TCP 的多路数据流、传输可靠性等功能，我们把这套功能称为 QUIC 协议。
- 实现了类似TCP的流量控制、传输可靠性的功能
- 集成了TLS加密功能
- 实现了HTTP/2中的多路复用功能
- 实现了快速握手功能

## 状态码
状态码由3位数组成，第一个数字定义了响应的类别，且有5种可能取值：
- 1XX: 表示目前是协议处理的中间状态，还需要后续操作
- 2XX: 表示成功状态
- 3XX: 重定向状态，资源位置发生变动，需要重新请求
- 4XX: 请求报文有误
- 5XX: 服务器端发生错误

## 1XX
- 101： Switching Protocols：在 HTTP 升级为 WebSocket 的时候，如果服务器同意变更，就会发送状态码 101

## 2XX
- 200: **请求已成功**，通常在响应体中放有数据
- 204: No Content 含义与 200 相同，但是**响应头后没有 body 数据**
- 206: Partial Content **表示部分内容**，使用场景是 **HTTP 分块下载和断点续传**，会带上相应的响应头字段 Content-Range

## 3XX
- 301: 永久重定向
- 302: 临时重定向，请求成功但是被重定向(例如登录鉴权)
- 303: 临时重定向，表示客户端当前应采用 GET 方法获取资源，POST 请求会变为 GET 请求进行重定向
- 304: Not Modified，当**协商缓存命中时**会返回这个状态码
- 305: Use Proxy，请求的资源必须通过指定的代理才能被访问
- 307: 临时重定向，不会从 POST 变为 GET

> 如果网站从 HTTP 升级到 HTTPS，以前的站点不能再使用了，应该返回 301，浏览器默认会做缓存优化，在第二次访问的时候自动访问重定向的那个地址
> 如果只是暂时不用，直接返回 302，和 301 不同的是，浏览器不会做缓存优化

## 4XX
- 400: Bad Request
    - **语义有误**，当前请求无法被服务器理解，除非进行修改，否则客户端不应该重复提交这个请求
    - **请求参数有误**
- 403: Forbidden，**服务器已经理解请求，但拒绝执行它**，原因有很多，比如法律禁止、信息敏感
- 404: Not Found，**资源未找到**，表示未在服务器上找到相应的资源
- 405: Method Not Allowed：**请求方法不被服务端允许**
- 406: Request Timeout，**请求超时**，客户端没有在服务器预备等待的时间内完成一个请求的发送
- 409: Conflict: **多个请求发生了冲突**

## 5XX
- 500: Internal Server Error：**服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理**，一般错误出现在服务端源码
- 501: Not Implemented，表示**客户端请求的功能还不支持**
- 502: Bad Gateway，**服务器自身是正常的，但是访问的时候出错了**
- 503: Service Unavailable，**表示临时的服务器维护或过载，暂时无法响应服务**
- 504: Gateway Timeout，服务器作为网关或代理，但是**没有及时从上游服务器收到请求**