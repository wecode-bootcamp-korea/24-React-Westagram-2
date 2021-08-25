import React, { Component } from 'react';
import './CommentForm.scss';

class CommentForm extends Component {
  inputRef = React.createRef();

  handleAdd = e => {
    e.preventDefault();
    const { value } = this.inputRef.current;
    value && this.props.onAdd(value);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="commentForm-cheoljin" onSubmit={this.handleAdd}>
        <input
          type="text"
          aria-label="댓글달기"
          placeholder="댓글달기..."
          className="comment-input"
          ref={this.inputRef}
        />
        <button type="submit" className="comment-button">
          게시
        </button>
      </form>
    );
  }
}

export default CommentForm;
