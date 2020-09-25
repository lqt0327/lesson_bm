const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/') {
        fs.createReadStream('./jsonp1.html').pipe(res);
    }else if(req.url.includes('/api')) {
        // let callBackName = req.url.split('=')
        // let cb = callBackName[callBackName.length - 1]
        let obj = qs.parse(req.url.split('?')[1])
        let cb = obj.callback
        let info = {code: 0, msg: 'success'}
        res.end(`${cb}(${JSON.stringify(info)})`)
    }else {
        res.end('')
    }
})
.listen(8080,()=>{
    console.log(8080)
})