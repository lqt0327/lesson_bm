function test(a) {
    console.log(a);
    var a = 2;
    console.log(a);
    function a () {}
    console.log(a);
    var b = function () {};
    console.log(b);
    function d(){}
}
test(1);
