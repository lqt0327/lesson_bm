/**
 * @author lqt
 * @date 2020-4-28
 * @func 面试题 10.01. 合并排序的数组
 */
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let len = m+n;
    while(m>0&&n>0){
        if(A[m-1]>B[n-1]){
            A[len-1]=A[m-1];
            m--;
        }
        else{
            A[len-1]=B[n-1];
            n--;
        }
        len--;
    }
    // console.log(A);
    while(n--){
        A[len-1]=B[n];
        len--;
    }
    return A;
};