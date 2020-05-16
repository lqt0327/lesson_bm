import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

class CommentApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow:1
        }
    }
    changePage(index) {
        console.log(index);
        if(index === 1) {
            this.setState({isShow:1});
        }else if(index === 2) {
            this.setState({isShow:2});
        }
    }
    render() {
        return (
            <div className="body">
                <button type="button" onClick={this.changePage.bind(this,1)}>热门</button>&nbsp;&nbsp;
                <button type="button" onClick={this.changePage.bind(this,2)}>最新</button>
                <CommentInput isShow={this.state.isShow} />
                <CommentList isShow={this.state.isShow} />
            </div>
        )
    }
}

export default CommentApp;