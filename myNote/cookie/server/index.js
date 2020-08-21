const http = require('http')
const fs = require('fs')
let count = 10000
let sessiontable = [{
    userName: 'liming', useId: 1001, login: true, expire: '2021', id: 01
}]
// 用户的登录状态保持
// 第一次登录完 后端写入一个cookie: username=liming,userID=1001
// 1 cookie: sessionId: 01
// 2 cookie 每次都随着 http 请求自动发送
// 3 每次 后端 取出 cookie 信息 if(login) { 登录状态有效的 }
http.createServer((req,res)=>{
    function isLogin() {
        if (req.headers['cookie']) {
          let cookie = req.headers['cookie'];
          // let [name, sessionId] = cookie.split('=');
          let cookies = cookie.split(';');
          let sessionCookie = cookies.find(cookie => cookie.includes('session'));
          let [name, sessionId] = sessionCookie.split('=');
          if (sessiontable.find((item) => {
            return item.id === Number(sessionId);
          })) {
            return true;
          } else {
            return false;
          }
        } else {return false;}
      }
    if(req.url.includes('/transfer')){
        if(!isLogin()) {
            res.end('un auth');
            return;
        }
        count -= 100;
        res.end('ok')
    }else if(req.url === '/count') {
        res.end(count+"");
    } else if(req.url === '/isLogin') {
        if(isLogin()) {
            res.end('login')
        }else{
            res.end('not login')
        }
    }
    else{
        const html = fs.readFileSync('./index.html','utf-8');
        res.setHeader('set-cookie','sessionid=1;sameSite=strict')
        res.end(html);
    }
})
.listen(9090, ()=>{
    console.log(9090)
})

// 合法的 localhost:9090
// hack [localhost:9099]  zhaomeng.com:9099
// 1.
// samesite:lax localhost的某些get请求在zhaomeng.com发出也能待cookie
// samesite:strict locahost 的请求 只在 localhost发出才会带cookie
// samesite: none localhost的get请求不管在什么域发出都会携带 cookie
// 2.
// csrf_token: JWT
// 用户登录完 服务端 给你一个 token  abcd
// 前端存起来
// 之后的请求 都要携带这个token
// 这样对于 zhaomeng.com:9099 是没有这个 token 它发出去的请求没有token
// 3.
// 浏览器会给每个请求一个 reffer 字段，表明这个请求的来源
// 服务端可以检测 来源