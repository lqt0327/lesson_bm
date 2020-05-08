import React,{Component} from 'react';
//检查数据类型
import PropTypes from 'prop-types';
class HeaderComponent extends Component{
    // changeTitle(){
    //     this.props.title="首页2";//props是只读不可以改变
    // }
    render() {
        return (
            <div id="header" style={this.props.isShow?{display:'block'}:{display:'none'}}>
                {this.props.title}
                {/*<button type="button" onClick={this.changeTitle.bind(this)}>改变title</button>*/}
                <button type="button" onClick={this.props.sendParent.bind(this,'我是子组件的值')}>给父组件传值</button>&nbsp;&nbsp;<button type="button" onClick={this.props.onClick}>保存</button>
            </div>
        );
    }
}
//检查属性值的类型
HeaderComponent.propTypes={
    title:PropTypes.string.isRequired,//检查是否必填项
    isShow:PropTypes.bool
};
//默认属性值
HeaderComponent.defaultProps={
    title:"默认导航"
};
export default HeaderComponent;
