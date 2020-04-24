/**
 * @author lqt
 * @date 2020-4-24
 * @func 实现 strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index=0;
    if(needle.length===0){
        return 0;
    }
    for(let i=0;i<haystack.length;i++){
        if(haystack[i]===needle[index]){
            if(index===(needle.length-1)){
                return i-needle.length+1;
            }
            index++;
        }else{
            i=i-index;
            index=0;
        }
    }
    return -1;
};