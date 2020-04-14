/** 
 * @author lqt
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n
*/
// function climbStairs(n){
//     if (n >= 40) throw new Error('内存将会溢出');
//     if (n == 1) return 1;
//     if (n == 2 ) return 2;
//     return climbStairs(n-1) + climbStairs(n-2);
// } 

// function climbStairs(n){
//     const w=new Map();
//     if (n == 1) return 1;
//     if (n == 2 ) return 2;
//     const ret = climbStairs(n-1) + climbStairs(n-2);
//     w.set(n, ret);
//     return ret;
// } 


function climbStairs(n){
    let arr=[];
    arr[0]=1;
    arr[1]=1;
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n];

}

console.log(climbStairs(39));