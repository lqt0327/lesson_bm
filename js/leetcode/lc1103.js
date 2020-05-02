/** 
 * @author lqt
 * @date 2020-5-2
 * @func 分糖果 II
*/
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let ans = Array.from({length: num_people}, (v, i) => 0);
    // console.log(ans);
    let sum = 0;
    let index = 0;
    while(candies > 0){
        sum++;
        ans[index] += sum;
        index++;
        if(index === num_people){
            index = 0;
        }
        candies -= sum;
    }
    if(candies === 0){
        return ans;
    }else{
        index = index===0?num_people-1:index-1;
        ans[index] += candies;
        return ans;
    }
};


var distributeCandies = function(candies, num_people) {
    let ans = Array.from({length: num_people}, (v, i) => 0);
    // console.log(ans);
    let index = 0;
    while(candies != 0){
        ans[index%num_people] += Math.min(index+1, candies);
        // console.log(index);
        candies -= Math.min(index+1, candies);
        index++;
    }
    return ans;
};