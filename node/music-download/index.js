const process = require('process');
const axios = require('axios');
const inquirer = require('inquirer');
const http = require('http');
const fs = require('fs');
process.title = "node music";

// console.log(process.argv);
let keywords = process.argv[2];
// 异步 
function request() {
    return axios({
        method: 'GET',
        url: 'http://neteasecloudmusicapi.zhaoboy.com/search',
        params: {
            keywords
        }
    })
    .then(res => {
        // console.log(res);
        return res.data;
    })
}
// 异步 上下键 移动
function choose(songs) {
    return inquirer.prompt(
        [{
        type:"list",
        name:"songs",
        message:`共有${songs.length}首，请回车选择`,
        choices:songs.map(song => {
            return {
                name: song.name,
                value: song.id
            }
        })
    }
]).then(c => {
    console.log('ccccccccccccc',c);
    const id = c.songs;
    // const id = c.value;
    console.log(c.value,'++++++++++++',c.songs);
    return id;
})
}

request()
.then(res => {
    console.log(res);
    return choose(res.result.songs);
})
.then(id => {
    axios({
        url:'http://neteasecloudmusicapi.zhaoboy.com/song/url',
        params:{
            id
        }
    })
    .then(res => {
        let url = res.data.data[0].url
        return url
    })
    .then(url => {
        if (!url) {
            console.log('没有找到这首');
            return
          }
        console.log('获取到 url', url, '开始下载...');
        http.get(url, (res) => {
            res.pipe(fs.createWriteStream(`./${id}.mp3`));
            res.on('end', ()=> {
                console.log('下载完毕');
            })
        })
    })
})
;