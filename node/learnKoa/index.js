const fs = require('fs');
const KoaStatic = require('koa-static');
const Koa = require('koa'); // web node 开发框架
const app = new Koa();

  app.use(KoaStatic('./'));
  app.listen(8082);