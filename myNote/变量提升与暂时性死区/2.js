// 这是因为 ES6 中有明确的规定：如果区块中存在 let 和 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。假如我们尝试在声明前去使用这类变量，就会报错。

var me = 'xiuyan';

{
	me = 'bear';    //由于在块作用域内存在let me，所以报错
	let me;
}   //ReferenceError: Cannot access 'me' before initialization


var me = 'xiuyan';

{
	me = 'bear';
}   //正常


// 其实这也就是暂时性死区的本质：当我们进入当前作用域时，let 或者 const 声明的变量已经存在了——它们只是不允许被获取而已。要想获取它们，必须得等到代码执行到声明处。