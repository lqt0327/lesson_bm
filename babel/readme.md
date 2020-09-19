code -> code

import {zip} from 'loadsh'

import zip from 'lodash/zip'

1. code -> reg 处理字符串 -> code 
2. code -> AST -> 树 CRUD -> 另外一颗 AST -> 另外一份Code


HTML -> AST -> appendChild createElement -> 另外一颗 AST -> 渲染

我 今天 很 高兴
{
    person: '我',
    time: '今天'
}

js: 词法
js代码由什么组成，引擎关心
- whiteSpace 
- 换行
- comment
- token
  - numberLiteral  数字字面量
  - stringLiteral  字符串字面量
  - 符号 [] {} () 
  - indetify  var c = b + 5

<div class="cls" />