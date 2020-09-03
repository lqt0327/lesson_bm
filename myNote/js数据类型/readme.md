## JS数据类型：概念
JS的数据类型有**8种**

在ES5的时候，数据类型是6种：Number String Null undefined object boolean

ES6新增了一种Symbol。这种类型的对象永不相等，可以解决属性名冲突的问题。

谷歌67版本中还出现了一种bigInt。用来安全存储，操作大整数。

## JS的数据类型有几种？
8种。Number、String、Boolean、Null、undefined、object、symbol、bigInt。

## Object中包含了哪几种类型
Date、function、Array等。

## JS的基本类型和引用类型有哪些？
基本类型(单类型)：除Object。String、Number、boolean、null、undefined。
引用类型：object。

## JS中typeof输出分别是什么？
| 输入 | 输出 | |
| --------- | ------- | ---- |
| String | String | 字符串 |
| Number | Number | 数据类型 |
| Boolean | Boolean | 布尔型 |
| Undefined | Undefined | 没有初始化 |
| Null | Object | 不存在的对象 |
| NaN | Number | Number中的特殊数值 |
| Object | Function | |

## 如何判断数据类型？
- typeof 操作符
- 用 isNaN（） 检测是否是非数值型。
- toString 
    > Object.prototype.toString.call(arr) == '[object Array]' 
- 检测数组类型的方法 
    - instanceof 
    - constructor 
    - Array.isArray()

## 补充 Object 类型
object 的每个实例都有下列属性和方法：
- constructor：保存着用于创建当前对象的函数。（构造函数)constructor就是object();
- hasOwnProperty(propertyName):用于检查给定的当前属性在当前对象实例中）而不是在实例原型中）是否存在。其中，作为参数的属性名（propertyName)必须以字稚串形式指定（例如：o.hasOwnProperty(“name”))。
- isPrototypeOf(object):用于检查传入的对象是否是传入对象原型。
- propertyIsEnumerable(propertyName):用于检查给定属性是否能够用for-in语句。与hasOwnProperty（）方法一样，作为参数的属性名必须以字符串形式指定。
- toLocaleString( ):返回对象的字符串表示，该字符串与执行环境的地区对应。
- toString( ):返回对象的字符串表示。
- valueOf( ):返回对象的字符串、数值或者布尔值表示。通常与toString( )方法的返回值得相同。