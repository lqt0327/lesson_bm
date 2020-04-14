var maxArea = function(height) {
    let sum=0;  //最大容纳水量
    let max=0;
    let left=0;
    let right=height.length-1;
    while(left<right){
         console.log(sum);
        if(sum>max){
            max=sum;
        }
        if(height[left]>=height[right]){
            sum=height[right]*(right-left);
            right--;
        }
        if(height[right]>height[left]){
            sum=height[left]*(right-left);
            left++
        }
    }
    return max;
};

let arr=[4,4,2,11,0,11,5,11,13,8];
console.log(maxArea(arr));