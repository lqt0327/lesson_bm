import React from 'react';
import {connect} from 'react-redux';
import config from '../../assets/js/conf/config';
import actions from '../../store/actions';
import axios from 'axios';
import Css from '../../assets/css/user/index.css';
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showHead:"",
            percentVal:0
        };
    }
    componentDidMount(){
        console.log(this.props.state);
    }
    outLogin(){
        // this.props.dispatch(actions.user.outLogin());
        this.props.dispatch((dispatch)=>{
            dispatch(actions.user.outLogin());
        })
        this.props.history.replace(config.path+"login");
    }
    uploadHead(e){
        // console.log(e.target.files[0]);
        let headFile = e.target.files[0];
        let data = new FormData();
        data.append("headfile", headFile);
        var config = {
            onUploadProgress: (progressEvent) => {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                this.setState({percentVal:percentCompleted});
            }
        };

        axios.post("http://vueshop.glbuys.com/api/user/myinfo/formdatahead?token=1ec949a15fb709370f",data,config).then(res => {
            console.log(res);
            if(res.data.code === 200) {
                this.setState({showHead:"http://vueshop.glbuys.com/userfiles/head/"+res.data.data.msbox})
            }
        })
    }
    render() {
        return (
            <div>
                欢迎{this.props.state.user.username}回来！<br/>
                头像预览：<img src={this.state.showHead} alt="" width="100" height="100" /><br />
                上传头像：<input ref="head-file" type="file" onChange={this.uploadHead.bind(this)} /><br />
                上传进度：
                <div className={Css['percent-wrap']}>
                    <div className={Css['percent']} style={{width:this.state.percentVal+"%"}}></div>
                </div>
                <button type="button" onClick={this.outLogin.bind(this)}>安全退出</button>
            </div>
        )
    }
}

export default connect((state)=>({state}))(Index);