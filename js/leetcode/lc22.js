/**
 * @author lqt
 * @date 2020-5-5
 * @func 括号生成
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [[""]];
    for(let i = 1; i <= n; i++){
        let res = [];
        for(let j = 0; j < i; j++){
            let left = ans[j];
            let right = ans[i-j-1];
            for(let keyL in left){
                let temL = left[keyL];
                for(let keyR in right){
                    let temR = right[keyR];
                    res.push("("+temL+")"+temR);
                }
            }
        } 
        ans.push(res);
    }
    return ans[ans.length-1];
};