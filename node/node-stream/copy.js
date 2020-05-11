const fs = require('fs');

function copy(sourceUrl, destUrl) {
    // fs.readFile(sourceUrl, (err, info) => {
    //     if(!err) {
    //         fs.writeFile(destUrl, info, (err) => {
    //             if(!err) {
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // })
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);
    // pipe === |
}

copy('./README.md','./copy.md');