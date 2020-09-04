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

export default class Stick {
    private items: Array<any>
    constructor() {
        this.items = []
    }
    push(item: any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size():number {
        return this.items.length;
    }
    toString() {
        return this.items.toString();
    }
}