function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}
// 编码 安全性
function encode(str) {
    return encodeURIComponent(str)
        .replace('%5B', '[').replace('%5D', ']'); //数组合法
}
function buildUrl(url, params) {
    let parts = [];
    Object.keys(params).forEach((key) => {
        let value = params[key];
        if (value === null || typeof value === 'undefined') {
            return;
        }
        if (Array.isArray(value)) {
            key += '[]';
        } else {
            value = [value];
        }

        value.forEach(val => {
            let part = `${encode(key)}=${encode(val)}`;
            // 1: keywords=海阔天空 type=all query=js
            // 2: & join
            parts.push(part);
            console.log(part);
        })

    })
    // 把#后面的内容删除
    const hashIndex = url.indexOf('#');
    if (hashIndex !== -1) {
        url = url.slice(0, hashIndex);
    }
    // 如果url本身就带有 ? 则进行判断，防止重复出现
    url += (url.indexOf('?') === -1 ? '?' : '&') + parts.join('&');
    console.log(parts, url);
    return url;
}
function flat(arr) {
    let res = [];
    for (let el of arr) {
      if (Array.isArray(el)) {
        res = res.concat(flat(el));
      }
      else {
        res = res.concat(el);
      }
    }
    return res;
  }
// node 模块化一个方案: commonjs
// const http = require('http')
// 定义一个自己的模块
// 导出
module.exports = {
    add,
    minus,
    buildUrl,
    flat
}