import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        let { comments } = this.props; // 在下面不用this.props.comments
        // console.log(this.props);
        return (
            <div>
                { comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
    
}

export default CommentList;