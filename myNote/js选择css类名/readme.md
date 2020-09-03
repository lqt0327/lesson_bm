## getElementsByClassName
```
document.getElementsByClassName("username current");
```
- 参数可包含一或多个类名，类名的先后顺序不重要,类名前不加“.”
- 返回带有指定类的所有元素的 NodeList，是动态查询的过程
- document.getElementsByClassName兼容IE9及以上，是动态查询的过程，会随着dom结构的变化，得到的结点列表也会发生变化

## querySelectorAll
- querySelectorAll是css3中新增的选择器，兼容IE8及以上，得到的是一个静态列表，它不会对dom结构进行动态查询，也就是说不是实时的

## querySelector
```
document.querySelectorAll(".selected");
```
- 可查询标签、类、id等，参数只包含一个类名，且类名前需加“.”
- 返回带有指定类的所有元素的 NodeList，一组元素的快照，而非不断对文档进行搜索的动态查询

```
<div class="wrap">
    <div class="block"></div>
    <div class="block"></div>
    <div class="block"></div>
</div>
<script>
    var a = document.querySelectorAll('.block')
    var b = document.getElementsByClassName('block')

    let div = document.createElement('div');
    div.className = 'block'
    document.querySelector('.wrap').appendChild(div)
</script>
```
在浏览器控制台的输出：
<img src="https://one.luoqintai.cn/uploads/html/20200902200912.png" style="width:50vw">

可以看到 a querySelectorAll 并没有动态添加上节点，b getElementsByClassName 动态添加上了节点。

## 总结
querySelectorAll和getElementsByClassName获取元素最大的区别就是querySelectorAll的实现类似于**一组元素的快照，而并非对文档结构进行搜索的动态查询。所谓快照就是把某个时刻dom中的结构记录下来，而不是通过查询dom结构动态获取**。这样实现可以避免使用NodeList对象通常会引起的大多数性能问题，但是也会带来新的问题，比如dom结构发生变化，这个选择器就无法使用了。

document.getElementsByClassName是**动态查询的过程，会随着dom结构的变化，得到的结点列表也会发生变化**。再对这个block列表中元素进行操作，就有效果了

> 参考：
> https://blog.csdn.net/CSDN_of_wmy/article/details/91808440