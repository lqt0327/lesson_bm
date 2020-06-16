import React from 'react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

class Index extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <Link to="/news/details">新闻详情123</Link>
                
                </ul>
            </div>
        )
    }
}

export default Index;