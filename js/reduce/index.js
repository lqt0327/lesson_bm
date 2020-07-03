var arr = [1,2,3,4];
// reduce   total
// 一句话结果就出来了  arr.map filter ...
// 1. 可读性 代码风格 
// 参数
var sum = arr.reduce(function(pre, cur, index, arr) {
    console.log(pre,cur,index);
    return pre + cur;
},0)


console.log(sum);
    // .map()
    // .filter() 链式调用 