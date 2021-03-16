const traverse = require('json-schema-traverse');
const data = require('./data.json')

// console.log(data)

const schema = {
  properties: {
    foo: {type: 'string'},
    bar: {type: 'integer'}
  }
};

const schema2 = {
  // properties: {
      test2:{test:{banner1: {
        // adfas: "asdfasf"
          comp: "Banner",
          template: "banner1",
          link_address: "www.baidu.com",
          title: "title"
      }}},
      // test: {type: 'string'}
  // }
  // carousel2: {
  //     carousel: {
  //         template: "carousel2",
  //         link_address: "www.baidu.com",
  //         title: "title"
  //     }
  // }
}

const schema3 = {
  banner1: {
      banner: {
          template: "banner1",
          link_address: "www.baidu.com",
          title: "title"
      }
  },
  carousel2: {
      carousel: {
          template: "carousel2",
          link_address: "www.baidu.com",
          title: "title"
      }
  }
}

// function cb(a,b,c,d,e,f,g){console.log('???',a,'---',b,'---',c,'---',d,'====',e,'---',f,'---',g,'???')}
function pre(e) {}
// function pre(e) { console.log(e,'prepre')}
// function post(e) {}
// function post(...e) { console.log(e.pop(),'postpost')}
function post(e,b,...a) { console.log(e,'postpost',b)}
// function keyIndex(e) { console.log(e,'keyIndex')}
// function cb(e) { console.log(e) }

// traverse(schema, {allKeys: true, cb});
// Object.keys(schema2).map((item)=>{
//   return (
//     traverse(schema2[item],{cb:{pre, post}})
//     // console.log(schema2[item])
//   )
// })
// traverse(schema2, cb);
// cb is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}

// Or:

traverse(schema3, {allKeys: true, cb: {pre, post}});
// pre is called 3 times with:
// 1. root schema
// 2. {type: 'string'}
// 3. {type: 'integer'}
//
// post is called 3 times with:
// 1. {type: 'string'}
// 2. {type: 'integer'}
// 3. root schema