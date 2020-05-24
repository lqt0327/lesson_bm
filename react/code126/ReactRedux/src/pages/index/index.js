import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import config from '../../assets/js/conf/config';
import Counter from '../../components/counter';
class Index extends React.Component {
    constructor() {
        super();
        this.state={};
        this.num = 0;
    }
    incCount(){
        //1、选购商品,触发actions
        this.props.dispatch({type:"INC", data:{count:++this.num}})
        console.log(this.props);
    }
    decCount(){
        this.props.dispatch({type:"DEC", data:{count:--this.num}})
    }
    componentDidMount() {
        console.log(this.props.state);
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={config.path+"news"}>新闻页面</Link></li>
                    <li><Link to={config.path+"goods"}>商品页面</Link></li>
                    <li><Link to={config.path+"login"}>会员登录</Link></li>
                    <li><Link to={config.path+"user"}>会员中心</Link></li>
                </ul>
                <Counter></Counter>
                计数器:<button type="button" onClick={this.decCount.bind(this)}>-</button> {this.props.state.counter.count} <button type="button" onClick={this.incCount.bind(this)}>+</button>
            </div>
        )
    }
}
//将组件与redux连接
export default connect((state)=>({state}))(Index);