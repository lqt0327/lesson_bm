const http = require('http');
const fs = require('fs');
// request
// response
const server = http.createServer(function(req, res) {
  // https://www.baidu.com/   => /
  // https://www.baidu.com/s?wd=sw    => /s
  // GET 参数 url
  // POST 参数 
  if (req.url === '/') {
    // html
    const html = fs.readFileSync('./index.html', 'utf8');
    res.end(html);
    // 后端返回内容类型
    // http 状态码
    // 1xx：
    // 2xx: 200 
    // 3xx: 301/302 重定向
    // 4xx: 401：未授权 404 客户端
    // 5xx：500 服务端
    // res.writeHead(200, {
    //   'Content-Type': 'text/html'
    // })
    // res.end(`<h2>123</h2>`)
  } else if (req.url === '/getPosts') {
    // 没有返回
    // 
    let posts = [
      { title: 'js', star: 1000 },
      { title: 'php', star: 2000 }
    ]
    let str = '';
    // 
    // 分段得到
    // 我们去向  => douban.com 要数据， douban.com 给我 response
    // 前端 xhr.send()   =>  我们， 接受 前端 req
    req.on('data', function(chunk) {
      str += chunk;
    })
    // 接受完毕 str 组装完成
    // json
    req.on('end', function() {
      // 80%
      // Content-Type', 'application/json
      console.log(JSON.parse(str));
    })
    // req res 流
    res.end(JSON.stringify(posts))
    // 前端提交数据 解析


  }
  // console.log(req.url);
  // // if (req)
  // res.end('hello server');
})
server.listen(9090, function() {
  console.log('server is running 9090');
})