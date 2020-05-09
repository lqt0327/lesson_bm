const Koa = require('koa');
const app = new Koa();
const fs = require('fs');

const func = ctx => {
    console.log('func');
    ctx.response.body = 'func';
}

const main = ctx => {
    console.log(ctx, '------');
    // ctx.response.body = 'Hello World1';
    ctx.response.type = 'html';

    const html = fs.readFileSync('./template.html','utf-8');
    // fs.readFile('./template.html','utf-8',function(err,data) {
    //     console.log(data);
        ctx.response.body = html;
    // })
    // console.log(html);
    
    // ctx.response.body = `
    // <html>
    //   <head></head>
    //   <body>
    //     <h1>Hello, World</h1>
    //   </body>
    // </html>
    // `
};

app.use(main);
app.listen(3000);
