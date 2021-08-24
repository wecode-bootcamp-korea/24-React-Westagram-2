import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  handleDelete = (e, feed) => {
    this.props.onDelete(this.props.reply, feed);
  };

  render() {
    const { userName, comment, isUser } = this.props.reply;
    return (
      <li className="comment-cheoljin">
        <span>{userName}</span>
        <span>{comment}</span>
        <button type="button" className="comment__heart">
          <i className="far fa-heart" />
        </button>
        <button
          type="button"
          className="comment__delete"
          onClick={e => {
            this.handleDelete(e, this.props.feed);
          }}
        >
          <i class={isUser ? 'far fa-trash-alt' : 'far fa-trash-alt none'} />
        </button>
      </li>
    );
  }
}

export default Comment;
