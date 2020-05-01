/**
 * @author lqt
 * @date 2020-5-1
 * @func 面试题57 - II. 和为s的连续正数序列
 */
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
    if(target < 3) return [];
    let ans = [];
    let start = 0;
    let index = 0;
    while(start <= target/2){
        let res = [];
        let pre = 0;
        let sum = start;
        while(pre<target){
            sum = sum + 1;
            res.push(sum);
            pre = pre + sum;
        }
        let req = pre - target;
        if(req===0){
            ans[index] = res;
            // ans.push(res);
            // console.log(ans);
            index++;
        }
        start++;
    }
    // console.log(ans);
    return ans;

};