import React, { Component } from 'react';

class InputReply extends Component {
  deleteComment = () => {
    this.props.deleteComment(this.props.id);
  };

  render() {
    const { content, name } = this.props;
    return (
      <div>
        <li className="friendsReply">
          <span className="friendsID">{name}</span>
          <span>{content}</span>
          <span onClick={this.deleteComment}>
            <i className="trashcan fas fa-trash-alt"></i>
          </span>
        </li>
      </div>
    );
  }
}

export default InputReply;
