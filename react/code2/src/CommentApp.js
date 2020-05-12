import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css';

class CommentApp extends Component {
    render() {
         return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmit.bind(this)} />
                <CommentList />
            </div>
        )
    }
    handleSubmit(comment){
        console.log(comment);
    }
}

export default CommentApp;