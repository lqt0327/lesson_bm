## JSONP
> 利用 \<script> 标签没有跨域限制的漏洞，网页可以得到从其它来源动态产生的JSON数据。JSONP请求一定需要对方的服务器做支持才可以。

JSONP和AJAX对比：

JSONP和AJAX相同，都是客户端向服务器端发送请求，从服务器端获取数据的方式。但AJAX属于同源策略，JSONP属于非同源策略（跨域请求）。

JSONP优缺点：

JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问问题。**缺点是仅支持get方法具有局限性，不安全可能会遭受XSS攻击。**

## JSONP的实现流程
- 声明一个回调函数，其函数名当作参数值，要传递给跨域请求数据的服务器，函数形参为要获取目标数据（服务器返回的data）
- 创建一个 \<script> 标签，把那个跨域的API数据接口地址，赋值给script的src，还要在这个地址中向服务器传递该函数名（可以通过问号传参：?callback=show）
- 服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的数据拼接成一个字符串，例如：传递进去的函数名是show，它准备好的数据是show('我不爱你')
- 最后服务器吧准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的回调函数，对返回的数据进行操作。

在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP函数。
```js
// index.html
function jsonp({url,params,callback}) {
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script')
        // 给window添加属性，用于获取jsonp结果
        window[callback] = function(data) {
            resolve(data);
            document.body.removeChild(script)
        }
        params = { ...params, callback }
        let arrs = [];
        for(let key in params) {
            arrs.push(`${key}=${params[key]}`)
        }
        script.src = `${url}?${arrs.join('&')}`
        document.body.appendChild(script);
    })
}
jsonp({
    url: 'http://localhost:3000/say',
    params: { wd: 'Iloveyou' },
    callback: 'show'
}).then(data=>{
    console.log(data);
    })
```

```js
// server.js
let express = require('express')
let app = express()
app.get('/say', function(req, res) {
  let { wd, callback } = req.query
  console.log(wd) // Iloveyou
  console.log(callback) // show
  res.end(`${callback}('我不爱你')`)
})
app.listen(3000)
```

## CORS
CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现。

```js
<script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
<script>
    // 接口 api
    // js 写入cookie
    document.cookie = 'abc=123';
    // 真实请求：POST /api 
    // 1 -> 预检preflight, 试探一下我们跨域能不能通过   2 -> POST /api
    axios({
        withCredentials:true,
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        url:'http://localhost:9090/api',
        method:'POST',
        data:{
            username:'123',
            pwd:789
        }
    })
    .then(res => {
        console.log(res);
    })
</script>
```

```js
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(202, {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers':'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': '*', //允许所有访问
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Max-Age': -1,    // preflight 预检请求结果缓存的时间
        'Access-Control-Allow-Credentials': true  // 凭证 cookie,允许前端请求携带cookie
    })
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts))
})
.listen(9090, ()=>{
    console.log('9090');
})
```