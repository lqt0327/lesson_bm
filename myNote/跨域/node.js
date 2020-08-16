const http = require('http');
http.createServer((req, res) => {
    res.writeHead(202, {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers':'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin':'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers':'content-type,X-Requested-With',
        'Access-Control-Max-Age':-1,
        'Access-Control-Allow-Credentials':true
    })
    let posts = ['js', 'php']
    res.end(JSON.stringify(posts))
})
.listen(9090, ()=>{
    console.log('9090');
})