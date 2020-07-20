// 散列 哈希
const md5 = require('md5');
// 同样的输入同样的输出
console.log(md5('abc'));
console.log(md5('abc'));
// 如果两次md5的结果一样 -> 两次原始值是一样的
// 两次md5（big.js）对比一下
// 协商：缓存？新内容
// 服务器判断是否可以缓存，要先知道内容有么有发生变化