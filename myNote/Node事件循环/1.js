new Promise(function(resolve) {
    console.log('test');
    resolve()
})
.then(function() {
    console.log("promise1")
  }).then(function() {
    console.log("promise2")
  });
  
  process.nextTick(() => {
   console.log('nextTick1')
   process.nextTick(() => {
     console.log('nextTick2')
     process.nextTick(() => {
       console.log('nextTick3')
       process.nextTick(() => {
         console.log('nextTick4')
       })
     })
   })
  })