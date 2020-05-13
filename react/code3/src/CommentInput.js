import React, {Component} from 'react';


class CommentInput extends Component {
    constructor() { //构造函数
        super();
        this.state = {
            username: '你好',
            content: '世界'
        }
    }
    handleUsernameChange(event) {
        // console.log(event);
        this.setState({
            username: event.target.value,
        })
    }
    handleContentChange(event) {
        this.setState({
            content: event.target.value,
        })
    }
    handleSubmit(){
        // console.log(this.state);
        const {username, content} = this.state;
        this.props.onSubmit({username, content})
        this.setState({
            content:''
        })
    }
    render() {
        let { username, content } = this.state;
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input type="text" value={username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea value={content} onChange={this.handleContentChange.bind(this)}></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;