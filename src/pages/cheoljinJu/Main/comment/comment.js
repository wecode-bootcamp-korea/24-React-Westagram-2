import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    const { userName, comment } = this.props.reply;
    const { isUser } = this.props.reply;
    return (
      <li className="feed__comment">
        <span>{userName}</span>
        <span>{comment}</span>
        <button type="button" className="comment__heart">
          <i className="far fa-heart" />
        </button>
        <button type="button" className="comment__delete">
          <i class={isUser ? 'far fa-trash-alt' : 'far fa-trash-alt none'} />
        </button>
      </li>
    );
  }
}

export default Comment;
