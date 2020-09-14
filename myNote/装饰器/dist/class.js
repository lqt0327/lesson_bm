var _class;

// 装饰 class 的时候 能够拿到这个class
// 属性
// 方法
function observer(target) {
  target.displayName = 'XXX';
  return target;
}

let Com = observer(_class = class Com {
  render() {
    return '123';
  }

}) || _class;

console.log(Com.displayName);