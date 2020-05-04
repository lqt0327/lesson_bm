/**
 * @author lqt
 * @date 2020-5-4
 * @func 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        if(sum>0){
            sum+=num;
        }else{
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};