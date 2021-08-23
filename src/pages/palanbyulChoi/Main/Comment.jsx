import React, { Component } from 'react';
class Comment extends Component {
  render() {
    return (
      <>
        <div>
          <strong>{this.props.name}</strong>
          <span> {this.props.comment}</span>
        </div>
        <div>
          <i className="fas fa-times" id="commentOut" />
          <i
            className={this.props.commentLove}
            onClick={this.props.changeCommentLove}
          />
        </div>
      </>
    );
  }
}

export default Comment;
