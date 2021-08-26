import React, { Component } from 'react';
class Comment extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.commentId);
  };
  render() {
    const { userName, comment, commentLoveClassName } = this.props;
    return (
      <>
        <div>
          <strong>{userName}</strong>
          <span> {comment}</span>
        </div>
        <div>
          <i
            className="fas fa-times"
            id="commentOut"
            onClick={this.handleDelete}
          />
          <i className={commentLoveClassName} />
        </div>
      </>
    );
  }
}

export default Comment;
