const yaml = require('js-yaml');
const fs = require('fs');
 
let obj = yaml.load(fs.readFileSync('example.yml', 'utf8'));

// 可查看 result.md
 console.log(obj)
 console.log('--------')
let str = yaml.dump(obj);
console.log(str)