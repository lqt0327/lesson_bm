// 装饰 class 的时候 能够拿到这个class
// 属性
// 方法
function observer(target) {
    target.displayName = 'XXX';
    return target;
}

@observer
class Com {
    render() {
        return '123'
    }
}

console.log(Com.displayName)