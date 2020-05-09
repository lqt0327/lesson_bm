// const math = require('./math');
// console.log(math);
const { add, minus } = require('./math');

// let result = add(3, 7);
// let expected = 10;
// if(result !== expected) {
//     throw new Error('3 + 7 = 10');
// }
// let result = minus(3, 7);
// let expected = -4;
// if(result !== expected) {
//     throw new Error('3 - 7 = -4');
// }

function expect(result) {
    return {
        toBe: function(value) {
            if(result !== value){
                throw new Error('预期值和真实值不一致');
            }
        }
    }
}
function test(desc, fn) {
    // fn 有没有抛出错误
    try {
        fn();
        console.log('通过');
    } catch(err) {
        console.log('不通过');
    }
}

// toBe 表示相等
// 提示欠缺
// expect(minus(3, 7)).toBe(-4);
// expect(add(3,7)).toBe(10);

test('测试加法', () => {
    expect(add(3,7)).toBe(10);
})

test('测试减法', () => {
    expect(minus(3, 7)).toBe(-4);
})