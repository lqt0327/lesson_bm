// LHS RHS 变量查找， 就在那一行相关
function foo(a) {
    var b = a;
    return a + b;
} 

// Left Hand Search
var c = foo(2);

// LHS 三处 c=... a=2 b=    3次LHS
// RHS  return a+b;  var b = a  foo  4次RHS