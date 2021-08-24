import React, { Component } from 'react';
class StoryPeed extends Component {
  render() {
    const { imgSrc, userName } = this.props;
    return (
      <div className="story_peed">
        <div className="story_photo">
          <img alt="wecoder_photo" className="user_photo" src={imgSrc} />
        </div>
        <div className="stoty_info">
          <div className="username">
            <strong>{userName}</strong>
          </div>
          <div className="feed_time">1분 전</div>
        </div>
      </div>
    );
  }
}

export default StoryPeed;
