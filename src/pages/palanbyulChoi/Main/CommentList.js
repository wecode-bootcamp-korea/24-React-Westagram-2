import React, { Component } from 'react';
import './CommentList.scss';
import Comment from './Comment';
class CommentList extends Component {
  render() {
    const { commentList, commentLoveClassName, onDelete } = this.props;
    return (
      <div className="comment_box">
        {commentList.map(comment => {
          return (
            <div className="comment" key={comment.id}>
              <Comment
                userName={comment.userName}
                comment={comment.comment}
                commentLoveClassName={commentLoveClassName}
                commentList={commentList}
                onDelete={onDelete}
                commentId={comment.id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
