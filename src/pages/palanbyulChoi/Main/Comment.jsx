import React, { Component } from 'react';
class Comment extends Component {
  render() {
    const { userName, comment, commentLoveClassName, changeCommentLove } =
      this.props;
    return (
      <>
        <div>
          <strong>{userName}</strong>
          <span> {comment}</span>
        </div>
        <div>
          <i className="fas fa-times" id="commentOut" />
          <i className={commentLoveClassName} onClick={changeCommentLove} />
        </div>
      </>
    );
  }
}

export default Comment;
