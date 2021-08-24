import React, { Component } from 'react';
import './CommentList.scss';
import Comment from './Comment';
class CommentList extends Component {
  render() {
    const { commentList, commentLove } = this.props;
    return (
      <div className="comment_box">
        {commentList.map(comment => {
          return (
            <div className="comment" key={comment.id} id={comment.id}>
              <Comment
                userName={comment.userName}
                comment={comment.comment}
                commentLove={commentLove}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
