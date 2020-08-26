- 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

- 当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

业务

- 聊
    JS弱类型 -》 强类型
    :string -> interface -> type

- 猜
    ts + react 最好的应用demo
    login

    interface { username:string, password: string}
    type userLoginFunc api bool
    model user {name, age, avatar, hobbies ...}