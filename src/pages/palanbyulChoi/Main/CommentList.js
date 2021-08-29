import React, { Component } from 'react';
import Comment from './Comment';
import './CommentList.scss';

class CommentList extends Component {
  render() {
    const { commentList, onDelete } = this.props;
    return (
      <div className="commentBox">
        {commentList.map(comment => {
          return (
            <div className="comment" key={comment.id}>
              <Comment
                userName={comment.userName}
                comment={comment.comment}
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
