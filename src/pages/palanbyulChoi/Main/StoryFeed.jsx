import React, { Component } from 'react';
import './StoryFeed.scss';

class StoryFeed extends Component {
  render() {
    const { imgSrc, userName } = this.props;
    return (
      <div className="storyFeed">
        <div className="storyPhoto">
          <img alt="wecoderPhoto" className="userPhoto" src={imgSrc} />
        </div>
        <div className="stotyInfo">
          <div className="username">
            <strong>{userName}</strong>
          </div>
          <div className="feedTime">1분 전</div>
        </div>
      </div>
    );
  }
}

export default StoryFeed;
