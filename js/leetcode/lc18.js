/**
 * @author lqt
 * @date 2020-4-17
 * @func 四数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
    if(nums.length<4){
        return [];
    }
    nums.sort((a,b)=>a-b);
    let res=[];
    let temp=0;
    for(let i=0;i<nums.length-3;i++){
        if(i>0 && nums[i]===nums[i-1]) continue;
        if(nums[i]+nums[i+1]+nums[i+2]+nums[i+3]>target) break;
        for(let j=i+1;j<nums.length-2;j++){
            if(j>i+1&&nums[j]===nums[j-1]) continue;
            let L=j+1;
            let R=nums.length-1;
            while(L<R){
                temp=nums[i]+nums[j]+nums[L]+nums[R];
                if(temp===target){
                    res.push([nums[i],nums[j],nums[L],nums[R]]);
                }
                if(temp>target) while(nums[R]===nums[--R]);
                if(temp<=target) while(nums[L]===nums[++L]);
            }
        }
    }
    return res;
};

console.log(fourSum([-3,-2,-1,0,0,1,2,3],0));