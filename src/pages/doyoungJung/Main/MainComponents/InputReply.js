import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    return (
      <div>
        <li className="friendsReply">
          <span className="friendsID">{this.props.name}</span>
          <span>{this.props.comment}</span>
          <span>
            <i className="trashcan fas fa-trash-alt"></i>
          </span>
        </li>
      </div>
    );
  }
}

export default InputReply;
