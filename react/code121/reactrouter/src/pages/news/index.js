import React from 'react';
// import {Link} from 'react-router-dom';

class Index extends React.Component {
    componentDidMount() {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.props.history.push({
                            pathname:"/news/details",
                            search:"?id=1&title=新闻详情2",
                            query:{
                                id:1,
                                title:'新闻详情2'
                            }
                        })
                    }}
                    >新闻详情2</li>
                    <li onClick={()=>{
                        this.props.history.push("/news/details?id=2&title=新闻详情3")
                    }}>新闻详情3</li>
                </ul>
            </div>
        )
    }
}

export default Index;