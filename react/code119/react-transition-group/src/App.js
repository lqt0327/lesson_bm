import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Css from "./assets/css/app.css";
import "./assets/css/common/animate.css";
class App extends React.Component{
    constructor() {
        super();
        this.state = {
            show:false,
            users: [
                {name: "张三"},
                {name: "李四"},
                {name: "王五"}
            ],
            name: ""
        }
    }
    delUser(pIndex){
        let tmpUsers = this.state.users;
        tmpUsers.splice(pIndex,1);
        this.setState({users: tmpUsers});
        // this.setState((state) => {
        //     users: state.users.filter((item, index) => pIndex !== index)
        // })
    }
    addUser() {
        if(this.state.name.match(/^\s*$/)) {
            alert("请输入姓名");
            return;
        }
        let tmpUsers = this.state.users;
        tmpUsers.push({name: this.state.name});
        this.setState({users: tmpUsers});
    }
    render() {
        return (
            <div className={Css["app"]}>
                <CSSTransition in={this.state.show} timeout={2000} classNames="fade" onEntered={(el) => {
                    console.log("入场动画回调:", el);
                }} onExited={(el) => {
                    console.log("出场动画回调:", el);
                }}>
                    <div className={Css['box']}></div>
                </CSSTransition>
                <button type="button" onClick={() => {this.setState({show:!this.state.show})}}>显示/隐藏动画效果</button>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.users.map((item, index) => {
                                return (
                                    <CSSTransition timeout={500} classNames="name" key={index} >
                                        <li className={Css['name']}>{item.name}<button type="button" onClick={this.delUser.bind(this,index)}>删除</button></li>
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <input type="text" placeholder="请输入姓名" onChange={(e) => {
                    this.setState({name:e.target.value})
                }} />
                <button type="button" onClick={this.addUser.bind(this)}>添加</button>
            </div>
        )
    }
}

export default App;
