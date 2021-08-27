import React, { Component } from 'react';
import './AsideFeed.scss';

class StoryFeed extends Component {
  render() {
    const { userName, description, isBorder } = this.props.user;
    return (
      <li className="aside-board__content">
        <a href="#" className={isBorder ? 'border' : ''}>
          <img
            src="/images/cheoljinJu/wecode.jpeg"
            alt="other-profile"
            className="other-profile"
          />
        </a>
        <div>
          <span>
            <a href="#"> {userName} </a>
          </span>
          <span>{description}</span>
        </div>
      </li>
    );
  }
}

export default StoryFeed;
