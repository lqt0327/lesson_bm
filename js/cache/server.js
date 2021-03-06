const express = require('express');
const { type } = require('os');

const app = express();
// GET 路由
app.get('/big.js',(req,res)=>{
    console.log('here');
    const fs = require('fs');
    const jsContent = fs.readFileSync('./big.js','utf-8');
    // 头字段
    // content-type
    // max-age=20   表示20秒之内不会经过后端
    // 强缓存：200 from memory/disk cache，请求不会到达服务器
    // Expires 明确：2020 7 21 客户端时间可以设置
    // cache-control：相对的时间
    res.setHeader('Cache-Control','max-age=20')

    // 协商缓存：请求会到达服务器
    // 20s之后，请求（会携带一个 if-none-match 的字段）到达服务器
    // 浏览器发现 上一次请求 服务器有Etag 浏览器自动发送一个if-none-match
    // etag 通过md5生成
    // if-modified-since:文件修改了文件的最后修改会发生变化
    // 服务器 对比前后两次文件有没有变化 从时间角度考虑，有缺陷
    const Etag = md5(jsContent);
    const oldEtag = req.headers['if-none-match']
    if(Etag === oldEtag){
        // 文件没有变化
        // 从缓存里面读取304 （not modified）
        res.sendStatus(304).end('')
        return;
    }
    res.setHeader('Etag',Etag)
    res.end(jsContent);
})
app.listen(9090,()=>{
    console.log(9090)
})