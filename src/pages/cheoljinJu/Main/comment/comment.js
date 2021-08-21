import React, { Component } from 'react';
import './comment.scss';

class Comment extends Component {
  render() {
    const { userName, comment } = this.props.reply;
    return (
      <li className="feed__comment">
        <span>{userName}</span>
        <span>{comment}</span>
        <button type="button" className="comment__heart">
          <i className="far fa-heart" />
        </button>
        <button type="button" className="comment__delete">
          <i class="far fa-trash-alt" />
        </button>
      </li>
    );
  }
}

export default Comment;
