import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    return (
      <div>
        <li className="friendsReply">
          <span className="friendsID">doyboy03</span>
          <span>{this.props.value}</span>
        </li>
      </div>
    );
  }
}

export default InputReply;
