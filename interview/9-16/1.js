const timeCompare = (time1, time2) => {
    let t1 = time1.split(':'), t2 = time2.split(':');
    let len = Math.max(t1.length, t2.length);
    for(let i = 0; i < len; i++) {
        let num1 = t1[i] ? parseInt(t1[i]) : 0;
        let num2 = t2[i] ? parseInt(t2[i]) : 0;
        if(num1 > num2) {
            return 1;
        }else if(num2 > num1){
            return -1
        }
    }
    return 0;
}

// [].sort()
let arr = [1,2,3,4,5]
arr.sort((a,b)=>{
    if(a > b) {
        return 1;
    }else if (a < b) {
        return -1;
    }else {
        return 0;
    }
})
console.log(arr)

let times = ["14:30:30","14:30:29","14:29:29"]
times.sort(timeCompare);
console.log(times);