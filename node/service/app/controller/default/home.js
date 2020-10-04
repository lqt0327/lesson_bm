'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this;
        let result = await this.app.mysql.select("tp_admin", {
            where: { id: 2 }
        })
        // console.log(JSON.parse(result))
        ctx.body = result;
    }

    async getArticleList() {
        //   获取url ？ 后的参数
        let page = this.ctx.query.page ? this.ctx.query.page : 1;
        const limit = 10;
        const data = await this.ctx.service.default.article(page, limit)
        this.ctx.body = data;
    }
}

module.exports = HomeController;
