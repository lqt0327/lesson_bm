import React from 'react';
import './index.css';

class CommentInput extends React.Component {
    render() {
        return (
            <div className={this.props.isShow === 1 ? "content show" : "content"} onClick={()=>{
                console.log(this.props)
            }}>
                <h1>CommentInput热门</h1>
            </div>
        )
    }
}

export default CommentInput;