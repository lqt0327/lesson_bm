/** 
 * @author lqt
 * @date 2020-4-15
 * @func 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

// let threeSumClosest = function (nums, target) {
//     let res=0;
//     let com=0;
//     let min=nums[0]+nums[1]+nums[2];
//     if(nums.length<3) return;
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 com=Math.abs(nums[i]+nums[j]+nums[k]-target);
//                 // console.log(com);
//                 if(com<=min){
//                     min=com;
//                     res=nums[i]+nums[j]+nums[k];
//                 }
//                 if(com===0){
//                     return nums[i]+nums[j]+nums[k];
//                 }
//             }
//         }
//     }
//     return res;
// }


let threeSumClosest = function (nums, target) {
    nums.sort((a,b)=>a-b);
    let res=nums[0]+nums[1]+nums[2];
    for(let i=0;i<nums.length;i++){
        let L=i+1;
        let R=nums.length-1;
        while(L<R){
            let sum=nums[i]+nums[L]+nums[R]
        if(sum===target){
            return sum; 
        }
        if(Math.abs(sum-target)<Math.abs(res-target)){
            res=sum;
        }
        if(sum>target) R--;
        if(sum<target) L++;
        }
    }
    return res;
}


console.log(threeSumClosest([-1,2,1,-4],1))