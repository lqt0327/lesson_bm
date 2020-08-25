// 从面向对象聊到继承？ Object.create()
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human?${this.isHuman}`)
    }
}

const zhaoboy = Object.create(null);
// 最简单的继承方案
// const zhaoboy = Object.create(person);
// zhaoboy.name = '酷吧你我他';
// zhaoboy.isHuman = true;
// zhaoboy.printIntroduction();

// console.log(zhaoboy.__proto__);
// console.log(zhaoboy.__proto__ === Object.prototype)