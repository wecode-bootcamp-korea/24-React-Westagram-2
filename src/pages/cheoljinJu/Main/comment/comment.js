import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  handleDelete = e => {
    this.props.onDelete(this.props.reply);
  };

  handleLike = e => {
    this.props.onLike(this.props.reply);
  };

  render() {
    const { userName, comment, isUser, isLike } = this.props.reply;
    return (
      <li className="comment-cheoljin">
        <span>{userName}</span>
        <span>{comment}</span>
        <button
          type="button"
          className="comment__heart"
          onClick={this.handleLike}
        >
          <i className={isLike ? 'fas fa-heart' : 'far fa-heart'} />
        </button>
        <button
          type="button"
          className="comment__delete"
          onClick={this.handleDelete}
        >
          <i
            className={isUser ? 'far fa-trash-alt' : 'far fa-trash-alt none'}
          />
        </button>
      </li>
    );
  }
}

export default Comment;
