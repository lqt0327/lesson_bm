var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let obj = {};
Object.defineProperty(obj, 'a', {
  value: 1
});

function log(target, key, descriptor) {
  let originAdd = descriptor.value;

  descriptor.value = function () {
    console.log('start');
    let res = originAdd();
    return res;
  };

  return descriptor;
}

let Math = (_class = class Math {
  // 无侵入的
  add() {
    // 不完美的
    // console.log('监听到了')
    const sum = 'add';
    return sum;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);
let m = new Math();
m.add(); // 监听一下 add 方法有没有被调用