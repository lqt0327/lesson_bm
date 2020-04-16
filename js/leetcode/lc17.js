/**
 * @author lqt
 * @date 2020-4-16
 * @func 电话号码的字母组合
 * @param {string} digits
 * @reutrn {string[]}
 */

var letterCombinations = function(digits) {
    let map={
        '2':["a","b","c"],
        '3':["d","e","f"],
        '4':["g","h","i"],
        '5':["j","k","l"],
        '6':["m","n","o"],
        '7':["p","q","r","s"],
        '8':["t","u","v"],
        '9':["w","x","y","z"],
    }
    if(digits.length<1||digits==""){
        return [];
    }
    if(digits.length===1){
        return map[digits[0]];
    }
    let ans=[];
    for(let i=0;i<map[digits[0]].length;i++){
        for(let j=0;j<map[digits[1]].length;j++){
            ans.push(map[digits[0]][i]+map[digits[1]][j]);
        }
    }
    // console.log(ans);
    for(let i=2;i<digits.length;i++){
        let temp=[];
        for(let k=0;k<ans.length;k++){
            for(let j=0;j<map[digits[i]].length;j++){
                temp.push(ans[k]+map[digits[i]][j]);
            }
        }
        ans=temp;
    }
    return ans;
};

console.log(letterCombinations("23"));