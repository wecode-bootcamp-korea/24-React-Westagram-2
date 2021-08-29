import React, { Component } from 'react';
import './RecommendFeed.scss';

class RecommendFeed extends Component {
  render() {
    const { imgSrc, userName } = this.props;
    return (
      <div className="recommendFeed">
        <div className="recommendPhoto">
          <img alt="wecoderPhoto" src={imgSrc} className="userPhoto" />
        </div>
        <div className="recommendInfo">
          <div>
            <div className="username">
              <strong>{userName}</strong>
            </div>
            <div className="feedTime">7명이 팔로우</div>
          </div>
          <div className="follow">팔로우</div>
        </div>
      </div>
    );
  }
}

export default RecommendFeed;
