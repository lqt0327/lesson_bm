import React,{lazy,Suspense} from 'react';
// import Button from './components/button';
// import Input from './components/input';
import "./assets/css/app.css";
const Input=lazy(()=>import("./components/input"));
const Button=lazy(()=>import("./components/button"));

class App extends React.Component{
    constructor(){
        super();
        this.state={
            isShowInput:false
        };
    }
    del(){
        alert("删除");
    }
    showInput(){
        this.setState({isShowInput:true})
    }
    render(){
        return (
            <div className="App">
                <form action="http://www.lucklnk.com" target="_blank">
                    {
                        this.state.isShowInput &&
                        <Suspense fallback={<React.Fragment></React.Fragment>}>
                            <Input/>
                        </Suspense>
                    }
                    <Suspense fallback={<React.Fragment></React.Fragment>}>
                        <Button type="submit">提交</Button>&nbsp;&nbsp;<Button type="reset">重置</Button>
                    </Suspense>
                </form>
                <Suspense fallback={<React.Fragment></React.Fragment>}>
                    <Button className="btn-bg" style={{width:"100px",height:"50px",fontSize:"20px",color:"#FF0000"}} onClick={this.del.bind(this)}>删除</Button><br/><br/>
                    <Button type="button">修改</Button>
                    <Button type="button" onClick={this.showInput.bind(this)}>显示input组件</Button>
                </Suspense>
            </div>
        )
    }
}

export default App;
