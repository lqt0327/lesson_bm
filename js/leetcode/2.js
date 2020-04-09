//爬楼梯问题
function test(n){
    if(n==1){
        return 1;
    }
    if(n==2){
        return 2;
    }
    return test(n-1)+test(n-2);
}

console.log(test(5))