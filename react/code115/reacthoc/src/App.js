import React from 'react';
import Hoc from './components/hoc/hoc';
// import Css from "./assets/css/app.css";

const Login=Hoc((props) => {
    // console.log(props)
    return (
        <div>
            {props.title}<br />
            用户名：<input type="text" placeholder="请输入用户名" {...props.username} />{props.nulls.isUsername?"请输入用户名":""}<br />
            密码：<input type="text" placeholder="请输入密码" {...props.password} />{props.nulls.isPassword?"请输入密码":""}<br/>
            <button type="button" onClick={props.submit.bind(this, ()=>{
                alert("username="+props.username.value+",password="+props.password.value);
            })}>登录</button>
        </div>
    )
})

const Login2=Hoc((props)=>{
    // console.log(props);
    return (
        <div>
            {props.title}<br/>
            用户名：<input type="text" placeholder="请输入用户名" {...props.username}  />{props.nulls.isUsername?"请输入用户名":""}
            密码：<input type="text" placeholder="请输入密码" {...props.password} />{props.nulls.isPassword?"请输入密码":""}
            <button type="button" onClick={props.submit.bind(this,()=>{
                alert("username="+props.username.value+",password="+props.password.value);
            })}>登录</button>
        </div>
    )
});

// 有状态组件
class App extends React.Component{
    constructor(){
        super();
        this.state={
            
        };
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div>
                <Login title="会员登录"></Login>
                <Login2 title="会员登录2"></Login2>
            </div>
        )
    }
}

export default App;