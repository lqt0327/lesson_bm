## new
> new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

```js
// 第一版代码
function objectFactory() {

    var obj = new Object(),

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    Constructor.apply(obj, arguments);

    return obj;

};
```
1. 用new Object()的方式新建了一个对象obj
2. 取出第一个参数，就是我们要传入的构造函数，此外因为shift会改变原数组，所以arguments会被去除第一个参数
3. 将obj的原型指向构造函数，这样obj就可以访问构造函数原型中的属性
4. 使用apply，改变构造函数this的指向到新建的对象，这样obj就可以访问到构造函数中的属性
5. 返回obj

创建一个全新的对象。
这个新对象的原型(__proto__)指向函数的prototype对象。
执行函数，函数的this会绑定在新创建的对象上。
如果函数没有返回其他对象(包括数组、函数、日期对象等)，那么会自动返回这个新对象。
返回的那个对象为构造函数的实例。