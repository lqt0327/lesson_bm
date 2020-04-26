/**
 * @author lqt
 * @date 2020-4-26
 * @func 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const len=nums.length;
    if(len<1) return 0;
    if(target>nums[len-1]) return len;
    for(let i=0;i<len;i++){
        if(target<=nums[i]){
            return i;
        }
    }
};