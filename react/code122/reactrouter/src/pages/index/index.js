import React from 'react';
import {Link} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/news">新闻页面</Link></li>
                    <li><Link to="/goods">商品页面</Link></li>
                </ul>
            </div>
        )
    }
}

export default Index;