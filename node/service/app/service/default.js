// app/service/default.js
const Service = require('egg').Service;

class DefaultService extends Service {
  async article(page,limit) {
    const results = await this.app.mysql.select("tp_article", {
        orders: [['time','desc']],
        limit: limit,
        offset: ((page*limit) - limit)
    })
    const totalCount = await this.app.mysql.count('tp_article')
    return {
        data: results,
        cur_page: Number(page),
        last_page: Math.ceil(totalCount / limit),
        total: totalCount,
    }
  }
}

module.exports = DefaultService;