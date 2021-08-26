import React, { Component } from 'react';

class Comment extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <span className="user-id">{this.props.userId}</span>
        <span className="comment-text">{this.props.commentText}</span>
        <img
          className="comment-like"
          style={{
            width: '13px',
            height: '13px',
          }}
          alt="좋아요"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
      </div>
    );
  }
}

export default Comment;
