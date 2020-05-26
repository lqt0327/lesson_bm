const http = require('http');


class MyKoa {
  constructor() {
    //手写代码  源码分析
    console.log('管式koa手写')
  }
  // listen    use
  // 有没有什么es6 的写法， 可以替代？   
  listen(...args) { // 抽象 
    // 欢哥  createServer
    let server = http.createServer((req, res) => {
      res.end('hello world');
    });
    server.listen(args[0]) // 怎么写？ 
  }


  use () {


  }
}



module.exports = MyKoa