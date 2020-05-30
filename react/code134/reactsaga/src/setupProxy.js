const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', {
        target: 'http://vueshop.glbuys.com/api',
        changeOrigin: true,//是否跨域，如果target是域名则需要配置，如果是ip地址不需要
        pathRewrite:{
            "^/api": "" // 把/api 变成空
        }
    }));
    // app.use(proxy('/test', { target: 'http://localhost:3000' }));
};