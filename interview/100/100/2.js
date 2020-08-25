// 函数和构造函数 即统一又分离
const Person = function(name) { // 风格
    this.name = name;
    // return 1;
    return {
        name: 'jascon'
    }
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

const person = new Person('Tony');
console.log(person.name)
console.log(person.sayName)
console.log(person instanceof Person)
