import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    const { comment, name } = this.props;
    return (
      <div>
        <li className="friendsReply">
          <span className="friendsID">{name}</span>
          <span>{comment}</span>
          <span>
            <i className="trashcan fas fa-trash-alt"></i>
          </span>
        </li>
      </div>
    );
  }
}

export default InputReply;
