## cookie
name
value
Domain: cookie 生效的域名 baidu.com map.baidu.com
path: /a/b  /c  /a  / 生效的路径
expires: 过期时间 默认就是 当前 session 失效
httpOnly: cookie 只在http 传输，js 无法操作（cookie 可以由后端的set-cookie
响应头设置，也可以由前端的js document.cookie='' 设置）
secure: 只在https 的环境下面生效

cookie 只要符合 domain + path 的生效范围 就会随着 http请求发送
CSRF攻击
sameSite: lax strict（cookie只在同域生效） none  

