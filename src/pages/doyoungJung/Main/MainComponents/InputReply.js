import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.addedComments.map(comment => {
            return (
              <li className="friendsReply">
                <span className="friendsID">doyboy03</span>
                <span key={comment.ID}>{comment}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default InputReply;
