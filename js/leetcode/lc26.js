/**
 * @author lqt
 * @date 2020-4-15
 * @func 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    let len=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==nums[i+1]){
            nums[len]=nums[i];
            len++;
        }
        // console.log(nums);
    }
    return len;
    // let i=0;
    // for( ;i<nums.length;i++){
    //     if(nums[i]===nums[i+1]){
    //         nums.splice(i+1,1);
    //         i--;
    //     }
        
    // }
    // // console.log(nums);
    // return i;
};

console.log(removeDuplicates([1,1,2]));