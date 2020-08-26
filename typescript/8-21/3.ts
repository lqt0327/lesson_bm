// 面向接口的编程是一切高级编程的开端  使用设计模式
// interface Java nb
interface IUser {
    name: string;
    age: string;
}

const getUserInfo = (user: IUser): string => {
    return `name: ${user.name}, age: ${user.age}`
}