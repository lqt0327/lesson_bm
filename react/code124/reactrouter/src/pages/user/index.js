import React from 'react';
import config from '../../assets/js/conf/config';
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){

    }
    outLogin(){
        localStorage.clear();
        this.props.history.replace(config.path+"login");
    }
    render() {
        return (
            <div>
                欢迎{localStorage['username']}回来！<br/>
                <button type="button" onClick={this.outLogin.bind(this)}>安全退出</button>
            </div>
        )
    }
}

export default Index;