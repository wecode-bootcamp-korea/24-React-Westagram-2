import React, { Component } from 'react';
class RecommendFeed extends Component {
  render() {
    const { imgSrc, userName } = this.props;
    return (
      <div className="recommend_feed">
        <div className="recommend_photo">
          <img alt="wecoder_photo" src={imgSrc} className="user_photo" />
        </div>
        <div className="recommend_info">
          <div>
            <div className="username">
              <strong>{userName}</strong>
            </div>
            <div className="feed_time">7명이 팔로우</div>
          </div>
          <div className="follow">팔로우</div>
        </div>
      </div>
    );
  }
}

export default RecommendFeed;
