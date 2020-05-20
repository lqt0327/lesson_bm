// 属性代理
import React from 'react';
export default function Hoc(WithComponent) {
    return class HocComponent extends React.Component {
        constructor() {
            super();
            this.state = {
                username: "",
                password: "",
                isNullUsername: false,
                isNullPassword: false
            }
        }
        setUsername(e){
            this.setState({username:e.target.value});
        }
        setPassword(e){
            this.setState({password:e.target.value});
        }
        submitData(callback){
            if(this.state.username.match(/^\s*$/)){
                this.setState({isNullUsername:true});
                return;
            }else{
                this.setState({isNullUsername:false});
            }
            if(this.state.password.match(/^\s*$/)){
                this.setState({isNullPassword:true});
                return;
            }else{
                this.setState({isNullPassword:false});
            }
            if(typeof callback === 'function') {
                callback();
            }
        }
        render() {
            let newProps = {
                username:{
                    onChange:this.setUsername.bind(this),
                    value:this.state.username,
                    onBlur:this.submitData.bind(this)
                },
                password:{
                    onChange:this.setPassword.bind(this),
                    value:this.state.password,
                    onBlur:this.submitData.bind(this)
                },
                nulls:{
                    isUsername:this.state.isNullUsername,
                    isPassword:this.state.isNullPassword
                }
            }
            return (
                <React.Fragment>
                    <WithComponent {...this.props} {...newProps} submit={this.submitData.bind(this)}></WithComponent>
                </React.Fragment>
            )
        }
    }
}