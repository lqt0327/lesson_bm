// const url = require('url');  // node  url 模块 内置 commonjs
// import
const urlString = "http://baidu.com:8080/test/h?query=js&a=1#node"; // url 字符串
// console.log(url.parse(urlString));

// queryString 有什么方法获得？
// 想到什么解决方案？  能给出方案
// 1. 正则写法
function getQueryString(urlStr) { // 查询对象
  var obj = new Object();
  if (urlStr.indexOf("?") != -1) { // 查询参数部分
    var queryStr = urlString.split('?')[1];
    if (urlStr.indexOf("#") != -1) {
      // 前端如果也有node 那样的url 模块就好了， 
      queryStr = queryStr.split('#')[0];
    }
    // console.log(queryStr);
    var strs = queryStr.split("&");
    // console.log(strs);
    for (var i = 0; i < strs.length; i++) {
      obj[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return obj;
}

console.log(getQueryString(urlString));





