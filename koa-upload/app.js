const logger = require("koa-logger")
const serve = require("koa-static")
const koaBody = require("koa-body")
const Koa = require('koa')
const fs = require("fs")
const app = new Koa()
const os = require("os")
const path = require("path")


app.use(logger())
// 使用文件上传中间件
app.use(koaBody({ multipart: true }))

// 1.静态资源服务，指定对外提供访问的根目录
app.use(serve(path.join(__dirname, '/public')));

app.use(async function (ctx, next) {
    await next()
    if (ctx.body || !ctx.idempotent) return
    ctx.response.body = '<h1>Hello, koa2!</h1><p>not upload photo</p>'
})

// router.post('/uploadfile', async (ctx, next) => {
//     // 上传单个文件
//     const file = ctx.request.files.file; // 获取上传文件
//     // 创建可读流
//     const reader = fs.createReadStream(file.path);
//     let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
//     // 创建可写流
//     const upStream = fs.createWriteStream(filePath);
//     // 可读流通过管道写入可写流
//     reader.pipe(upStream);
//     return ctx.body = "上传成功！";
//   });

// 2. 文件上传
app.use(async function (ctx, next) {
    if ('POST' != ctx.method) return await next()
    // 获取图片源
    //  <input type="file" name="file" multiple>
    const file = ctx.request.files.file
    console.log(ctx.request.files.file,'?????')
    // 接收读出流
    const reader = fs.createReadStream(file.path)
    // 创建写入流 
    // 3. 指定图片路径文件名（即上传图片存储目录）
    const stream = fs.createWriteStream(path.join('public/images', file.name))
    // 用管道将读出流 "倒给" 输入流
    reader.pipe(stream)
    // 4.打印上传文件在服器上存储的相对路径 
    console.log('uploading %s -> %s', file.name, stream.path)
    // 5.重定向到基于根目录下的静态资源web访问路径，展示图片
    ctx.redirect(stream.path.substr(6).replace(/\\/g,'/'))
})

// 监听
app.listen(3020, () => {
    console.log("listening port 3020");
})