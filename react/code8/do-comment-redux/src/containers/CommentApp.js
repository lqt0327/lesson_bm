import React from 'react';
import CommentList from './CommentList';

export default class CommentApp extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {/* Comment */}
                <CommentList />
            </div>
        )
    }
}