function reduce(arr, reduceCallback, initialValue) {
    // 参数校验 ？ 
    if (!Array.isArray(arr) || !arr.length || 
    typeof reduceCallback !== 'function') {
        return [];
    } else {
        // initialValue  0  1
        // 定义中间变量
        let hasInitialValue =  initialValue !== undefined;
        // 分步法 定义变量
        let value = hasInitialValue?initialValue:arr[0]; //上一次的执行结果 
        for (let i = hasInitialValue? 0: 1; i < arr.length; i++) {
            value = reduceCallback(value, arr[i], i, arr); 
        }
        return value;
    }
}
reduce([1,2,3], function(pre, cur, index, arr){
    return pre + cur; //
});
// [1,2,3].reduce
// Array.prototype.reduceFn
