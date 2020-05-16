import React from 'react';
import './index.css';

class CommentList extends React.Component {
    render() {
        return (
            <div className={this.props.isShow === 2 ? "content show" : "content"}>
                <h1>CommentList最新</h1>
            </div>
        )
    }
}

export default CommentList;