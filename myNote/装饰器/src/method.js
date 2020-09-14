let obj = {}
Object.defineProperty(obj, 'a', {
    value: 1
})

function log(target,key, descriptor) {
    let originAdd = descriptor.value
    descriptor.value = function(...args) {
        console.log('start');
        let res = originAdd.apply(this,args)
        return res;
    }
    return descriptor;
}

class Math {
    constructor() {
        this.c = 10
    }
    // 无侵入的
    // add 有参数怎么办 有 this 怎么办
    @log
    add(a,b) {
        // 不完美的
        // console.log('监听到了')
        // const sum = 'add'
        const sum = a + b + this.c;
        return sum
    }
}

let m = new Math()
m.add();
// 监听一下 add 方法有没有被调用