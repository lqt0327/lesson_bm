const traverse = require('json-schema-traverse');
const data = require('./data.json')

// console.log(data)

const schema = {
  properties: {
    foo: {type: 'string'},
    bar: {type: 'integer'}
  }
};

function cb(a,b,c,d,e,f,g){console.log('???',a,'---',b,'---',c,'---',d,'====',e,'---',f,'---',g,'???')}

// function cb(e) { console.log(e) }

traverse(schema, {allKeys: true, cb});
// cb is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}

// Or:

// traverse(schema, {cb: {pre, post}});
// pre is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}
//
// post is called 3 times with:
// 1. {type: 'string'}
// 2. {type: 'integer'}
// 3. root schema