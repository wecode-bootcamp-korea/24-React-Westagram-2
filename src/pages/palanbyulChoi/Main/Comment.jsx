import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.commentId);
  };
  render() {
    const { userName, comment } = this.props;
    return (
      <>
        <div>
          <strong>{userName}</strong>
          <span> {comment}</span>
        </div>
        <div>
          <i className="fas fa-times" onClick={this.handleDelete} />
          <i className="far fa-heart" />
        </div>
      </>
    );
  }
}

export default Comment;
