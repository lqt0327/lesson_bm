/**
 * @author lqt
 * @date 2020-4-23
 * @func 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let res=0;
    for(const num of nums){
        if(num!=val){
            nums[res]=num;
            res++;
        }
    }
    return res;
};