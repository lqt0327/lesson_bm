let mid1 = async(ctx, next) => {
    console.log(1)
    await next()    // await next === mid2
    console.log(2)
}
let mid2 = async(ctx, next) => {
    console.log(3)
    await next()
    console.log(4)
}
let mids = [mid1, mid2];
run();
function run() {
    // 
    dispatch(0);
    function dispatch(index) {
        let fn = mids[index]
        fn();
    }
}