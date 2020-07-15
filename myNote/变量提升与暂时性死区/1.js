console.log(num);
var num = 1;    //undefined


console.log(num);
let num = 1;    //ReferenceError


console.log(num);
const num = 1;  //ReferenceError


// let 和 var 非常相似，let 区别于 var 的最关键的地方在于：当我们用 let 声明变量时，变量会被绑定到块作用域上，而 var 是不感知块作用域的。
{
    var me = 'xiuyan'
    console.log(me) // 'xiuyan'
}
console.log(me) // 'xiuyan' 

{
    let me = 'xiuyan'
    console.log(me) // 'xiuyan'
}
console.log(me) // 报错


// 引用类型的属性值（包括数组的元素）可以被更改，只要你不修改引用的指向。
const me = {
    name: 'xiuyan'
}

me.name = 'Bear' // 没问题


// 这样就相当于重新给 me 赋值了，是在尝试把 me 的引用指向一个全新的对象、指向另一块内存空间，这种做法就是不被接受的。
const me = {
    name: 'xiuyan'
}

me = {
    name: 'Bear'
} // 报错

