/**
 * @author lqt
 * @date 2020-4-20
 * @func 有效的括号
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2) return false;
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    let ans=[];
    for(let i=0;i<s.length;i++){
        if(s[i] in map){
            ans.push(s[i]);
        }else{
            if(s[i]!=map[ans.pop()]) return false;
        }
    }
    return !ans.length;

};