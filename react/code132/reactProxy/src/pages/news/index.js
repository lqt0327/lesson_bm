import React from 'react';
// import {Link} from 'react-router-dom';
import config from '../../assets/js/conf/config';
class Index extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {/*<li><Link to="/news/details/1/新闻详情1">新闻详情1</Link></li>*/}
                    <li onClick={()=>{
                        this.props.history.push({
                            pathname:config.path+"news/details",
                            search:"?id=1&title=新闻详情2",
                            query:{
                                id:1,
                                title:'新闻详情2'
                            }
                        })
                    }}>新闻详情2</li>
                    <li onClick={()=>{
                        this.props.history.push(config.path+"news/details?id=2&title=新闻详情3")
                    }}>新闻详情3</li>
                </ul>
            </div>
        )
    }
}

export default Index;