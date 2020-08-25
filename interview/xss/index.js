const Koa = require('koa');
const KoaViews = require('koa-views');
const Router = require('koa-router');
const path = require('path')
const app = new Koa();

app.use(KoaViews(path.resolve(__dirname,'./views'),{
    extension: 'ejs'
}))

const router = Router();
// 存储型
let dataFromDB = `<iframe src='https://www.baidu.com'></iframe>`
let map = {
    '<': '&lt;',
    '>': '&gt;',
}

function html_encode(s){
    s = s.replace('<', '&lt;')
    s = s.replace('>', '&gt;')
    return s;
}

function jsEncode(s) {
    var t = ''
    for(let char of s){
        let c = char.charCodeAt(0).toString('16')
        c = '\\x' + c;
        t += c;
    }
    return t;
}
router.get('/',async (ctx)=>{
    const { xss } = ctx.query
    await ctx.render('index', {
        username: 'lihua',
        xss:xss ? html_encode(xss) : '',
        dataFromDB: html_encode(dataFromDB),
        js: `"";alert(11111);`  // \x16进制的数字
    })
})
app
.use(router.routes())
.use(router.allowedMethods())

app.listen(9090, ()=>{
    console.log(9090);
});