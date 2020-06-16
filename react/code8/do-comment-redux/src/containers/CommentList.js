// UI , 
// 部门， 向中央财务去申请， 我要用comments
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';


class CommentListContainer extends Component {
  render() {
    console.log(this.props.comments)
    return (
      <div>
        CommentList
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}


export default connect(
  mapStateToProps
)(CommentListContainer)
