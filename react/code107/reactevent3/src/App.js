import React from 'react';
import Header from './components/header';
import Input from './components/input';
import "./assets/css/app.css";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            text:""
        };
    }
    getChildren(val){
        console.log(val);
    }
    submitSave(){
        alert("保存");
    }
    render(){
        return (
            <div className="App">
                <Header isShow={true} sendParent={this.getChildren.bind(this)} onClick={this.submitSave.bind(this)}></Header>
                <Input onChange={(e)=>{this.setState({text:e.target.value})}}/><br/>{this.state.text}
            </div>
        )
    }
}

export default App;
