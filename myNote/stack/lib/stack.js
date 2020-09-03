"use strict";
// 数据结构由什么组成？
// ADT 数据和操作数据的方法
// 栈 FILO  FIFO
// 元数据  items: any[]
// 方法： constructor this.items = []
// 入栈方法 push
// 出栈方法 pop
// peek 获取栈顶元素
// 数量 size
// 是否为空  isEmpty
// 清空 clear 
// toString 输出
exports.__esModule = true;
var Stick = /** @class */ (function () {
    function Stick() {
        this.items = [];
    }
    Stick.prototype.push = function (item) {
        this.items.push(item);
    };
    Stick.prototype.pop = function () {
        return this.items.pop();
    };
    Stick.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stick.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stick.prototype.clear = function () {
        this.items = [];
    };
    Stick.prototype.size = function () {
        return this.items.length;
    };
    Stick.prototype.toString = function () {
        return this.items.toString();
    };
    return Stick;
}());
exports["default"] = Stick;
