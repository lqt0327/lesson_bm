## 何为继承
> 继承可以使得子类具有父类别的各种属性和方法，而不需要再次编写相同的代码。

## 原型链继承
```
<script>
    function fatherFn() {
        this.some = '父类的this属性'
    }
    fatherFn.prototype.fatherFnSome = '父类原型对象的属性或方法';
    function sonFn() {
        this.obkoro1 = '子类的this属性'
    }
    sonFn.prototype = new fatherFn();
    sonFn.prototype.sonFnSome = '子类原型对象的属性或方法'
    const sonFnInstance = new sonFn()
    console.log('子类的实例：',sonFnInstance);
</script>
```
**缺点**
- 父类使用this声明的属性被所有实例共享
- 创建子类实例时，无法向父类构造函数传参，不够灵活。

## 借用构造函数继承
```
<script>
    function fatherFn(...arr) {
        this.some = '父类的this属性'
        this.params = arr;
    }
    fatherFn.prototype.fatherFnSome = '父类原型对象的属性或方法'
    function sonFn(fatherParams, ...sonParams) {
        fatherFn.call(this, ...fatherParams);
        this.obkoro1 = '子类的this属性'
        this.sonParams = sonParams;
    }
    sonFn.prototype.sonFnSome = '子类原型对象的属性或者方法'
    let fatherParamsArr = ['父类参数1', '父类参数2']
    let sonParamsArr = ['子类参数1', '子类参数2']
    const sonFnInstance = new sonFn(fatherParamsArr, ...sonParamsArr);
    console.log('借用构造函数子类实例', sonFnInstance)
</script>
```
**优点**
- 可以向父类传递参数
- 解决了原型链继承中：父类属性使用this声明的属性会在所有实例共享的问题。

**缺点**
- 只能继承父类通过this声明的属性 / 方法，不能继承父类prototype上的属性 / 方法。
- 父类方法无法复用：因为无法继承父类的prototype，所以每次子类实例化都要执行父类函数，重新声明父类this里所定义的方法，因此方法无法复用。

## 组合继承
```
<script>
    function fatherFn(...arr) {
        this.some = '父类的this属性'
        this.params = arr;
    }
    fatherFn.prototype.fatherFnSome = '父类原型对象的属性或方法'
    function sonFn() {
        fatherFn.call(this, '借用构造函数', '第二次调用')
        this.obkoro1 = '子类的this属性'
    }
    sonFn.prototype = new fatherFn('原型链继承', '第一次调用')
    sonFn.prototype.sonFnSome = '子类原型对象的方法或属性'
    const sonFnInstance = new sonFn()
    console.log('组合继承子类实例', sonFnInstance)
</script>
```
**优点**
- 完整继承(又不是不能用) ，解决了：
- 父类通过this声明属性 / 方法被子类实例共享的问题(原型链继承的问题)
- 每次实例化子类将重新初始化父类通过this声明的属性，实例根据原型链查找规则，每次都会
- 父类通过prototype声明的属性 / 方法无法继承的问题(借用构造函数的问题) 。

**缺点**
- 两次调用父类函数(new fatherFn()和fatherFn.call(this)) ，造成一定的性能损耗。
- 因调用两次父类, 导致父类通过this声明的属性 / 方法，生成两份的问题。
- 原型链上下文丢失：子类和父类通过prototype声明的属性 / 方法都存在于子类的prototype上

## 原型式继承
```
<script>
    function cloneObject(obj) {
        function F() { }
        F.prototype = obj
        return new F()
    }
    let oldObj = { p: 1 };
    let newObj = cloneObject(oldObj);
    oldObj.p = 2;
    console.log('oldObj newObj', oldObj, newObj);
</script>
```
**优点：** 兼容性好，最简单的对象继承。

**缺点：**
- 因为旧对象(oldObj)是实例对象(newObj)的原型，多个实例共享被继承对象的属性，存在篡改的可能。
- 无法传参

## 寄生式继承
```
<script>
    function cloneObject(obj) {
        function F() {}
        F.prototype = obj;
        return new F()
    }
    function createAnother(original) {
        var clone = cloneObject(original)
        clone.some = function(){}
        clone.obkoro1 = '封装继承过程'
        return clone;
    }
</script>
```

## 寄生组合式继承
```
<script>
    function fatherFn(...arr) {
        this.some = '父类的this属性'
        this.params = arr;
    }
    fatherFn.prototype.fatherFnSome = '父类原型对象的属性或方法'
    function sonFn() {
        fatherFn.call(this, '接用构造继承')
        this.obkoro1 = '子类的this属性'
    }
    function inheritPrototype(son, father) {
        const fatherFnPrototype = Object.create(father.prototype)
        son.prototype = fatherFnPrototype;
        son.prototype.constructor = son;
    }
    inheritPrototype(sonFn, fatherFn);
    sonFn.prototype.sonFnSome = '子类原型对象的属性或方法'
    const sonFnInstance = new sonFn()
    console.log('寄生组合式继承子类实例', sonFnInstance)
</script>
```
**寄生组合式继承相对于组合继承有如下优点：**
- 只调用一次父类fatherFn构造函数。
- 避免在子类prototype上创建不必要多余的属性。
- 使用原型式继承父类的prototype，保持了原型链上下文不变。
- 子类的prototype只有子类通过prototype声明的属性 / 方法和父类prototype上的属性 / 方法泾渭分明。

## ES5继承与ES6继承的区别：
- ES5的继承实质上是**先创建子类的实例对象，再将父类的方法添加到this上。**

- ES6的继承是**先创建父类的实例对象this，再用子类的构造函数修改this。**因为子类没有自己的this对象，所以必须先调用父类的super()方法。

## 为什么要修正constructor指向？
**当我们只有实例对象没有构造函数的引用时：**

某些场景下，我们对实例对象经过多轮导入导出，我们不知道实例是从哪个函数中构造出来或者追踪实例的构造函数，较为艰难。

这个时候就可以通过实例对象的constructor属性来得到构造函数的引用

**保持constructor指向的一致性：**

因此每次重写函数的prototype都应该修正一下constructor的指向，以保持读取constructor行为的一致性。

## 参考
> https://blog.csdn.net/OBKoro1/article/details/101116725