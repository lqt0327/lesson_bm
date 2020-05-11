const http = require('http'); // node的内置模块
// Web 编程的基石HTTP 协议
http
    .createServer((req, res) => {
        if (req.url === '/') {
            // 加入头部编码，解决中文乱码
            res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'})
            res.end('首页')
        } else if (req.url === '/about') {
            res.end('About');
        }
    })
    .listen(1314)