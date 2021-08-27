import React, { Component } from 'react';

class AsideStotyList extends Component {
  render() {
    const { altMessage, picPath, storyFriendName, uploadTimeAgo } = this.props;
    return (
      <div>
        <li>
          <img alt={altMessage} className="subFeedListPic" src={picPath} />
          <div>
            <span>{storyFriendName}</span>
            <span>{uploadTimeAgo}</span>
          </div>
        </li>
      </div>
    );
  }
}

export default AsideStotyList;
