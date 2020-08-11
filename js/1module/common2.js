const { done, obj } = require('./comm1')
console.log(done)
console.log(obj)
// let done = comm1.done;
// let obj = comm1.obj;
setTimeout(()=>{
    console.log(done)
    console.log(obj)
},5000)