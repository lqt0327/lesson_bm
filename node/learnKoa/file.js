const fs = require('fs');

fs.readFile('./readme.md', (err, data) => {
    // 异步
    if (err) {
        console.log('出错了')
    }
    console.log(data);
})

console.log(123);