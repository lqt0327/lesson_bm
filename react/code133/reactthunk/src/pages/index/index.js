import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import config from '../../assets/js/conf/config';
import Counter from '../../components/counter';
import actions from '../../store/actions';
class Index extends React.Component {
    constructor() {
        super();
        this.state={
            navs:[]
        };
        this.num = 0;
    }
    incCount(){
        //1、选购商品,触发actions
        // this.props.dispatch(actions.counter.incCount({count:++this.num}))
        // console.log(this.props);
        this.props.dispatch((dispatch, getState)=>{
            console.log(getState());
            dispatch(actions.counter.incCount({count:++this.num}))
        })
    }
    decCount(){
        // this.props.dispatch(actions.counter.decCount({count:--this.num}))
        this.props.dispatch((dispatch, getState)=>{
            dispatch(actions.counter.decCount({count:--this.num}));
        })
    }
    componentDidMount() {
        // request(config.baseUrl+"/home/index/nav?token=1ec949a15fb709370f").then(res => {
        //     // console.log(res);
        //     if(res.code === 200) {
        //         this.setState({navs:res.data});
        //     }
        // })
        this.props.dispatch((dispatch)=>{
            dispatch(actions.home.getNav());
        })
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
                <ul>
                    {
                        this.props.state.home.navs.map((item, index) => {
                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
//将组件与redux连接
export default connect((state)=>({state}))(Index);