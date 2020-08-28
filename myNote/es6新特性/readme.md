## ES6的特性
常用的有：
- 类
- 模块化
- 箭头函数
    - 需要注意的是：不论是bind还是箭头函数，每次被执行都返回的是一个新的函数引用，因此如果你还需要函数的引用去做一些别的事情（譬如卸载监听器），那么你必须自己保存这个引用。
- 函数参数默认值
- 模板字符串
- 解构赋值
- 延展操作符
    - 延展操作符...可以在函数调用/数组构造时, 将数组表达式或者string在语法层面展开；还可以在构造对象时, 将对象表达式按key-value的方式展开。
- 对象属性简写
- Promise
- Let与Const

## ES7
- includes()
- 指数操作符
    - 在ES7中引入了指数运算符**，**具有与Math.pow(..)等效的计算结果。

## ES8
- async/await
- Object.values()
- Object.entries()
    - Object.entries()函数返回一个给定对象自身可枚举属性的键值对的数组。
- String padding
    - 在ES8中String新增了两个实例函数String.prototype.padStart和String.prototype.padEnd，允许将空字符串或其他字符串添加到原始字符串的开头或结尾。
- 函数参数列表结尾允许逗号
- Object.getOwnPropertyDescriptors()
    - Object.getOwnPropertyDescriptors()函数用来获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。