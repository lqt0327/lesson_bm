import React from 'react';
import {Link} from 'react-router-dom';
import config from '../../assets/js/conf/config';
class Index extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to={config.path+"news"}>新闻页面</Link></li>
                    <li><Link to={config.path+"goods"}>商品页面</Link></li>
                    <li><Link to={config.path+"login"}>会员登录</Link></li>
                    <li><Link to={config.path+"user"}>会员中心</Link></li>
                </ul>
            </div>
        )
    }
}

export default Index;