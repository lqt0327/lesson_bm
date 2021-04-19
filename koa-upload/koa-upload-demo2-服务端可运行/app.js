const koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const koaStatic = require('koa-static')
const cors = require('koa2-cors');
const path = require('path')
const router = new Router()
const app = new koa()

app.use(cors({
  origin: function(ctx) {
    // if (ctx.url === '/test') {
    //   return false;
    // }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: false,
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
    
// 1.静态资源服务，指定对外提供访问的根目录
app.use(koaStatic(path.join(__dirname, 'public')))

app.use(koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, 'public/uploads'),
        // 保留文件扩展名
        keepExtensions: true,
    }
}))
router.post('/upload', ctx => {
    // ctx.request.files.file file对应于axios中的
    // let param = new FormData()
    // param.append('file', file)   'file'
    const file = ctx.request.files.file
    const basename = path.basename(file.path)
    ctx.body = { "url": `https://two.luoqintai.cn/uploads/${basename}` }
    return ctx.body;
    // ctx.body = { "url": `${ctx.origin}/uploads/${basename}`,"ctx": ctx }
})

app.use(router.routes())
app.listen(3020, () => {
    console.log('启动成功')
    console.log('http://localhost:3020')
});