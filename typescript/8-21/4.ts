// 类型 定义文件 React FC
// 类型 声明和业务分开
interface IUser {
    name: string;
    age: string;
}

type IUserInfoFunc = (user: IUser) => string;
const getUserInfo: IUserInfoFunc = (user) =>{
    return `name: ${user.name}, age: ${user.age}`
}