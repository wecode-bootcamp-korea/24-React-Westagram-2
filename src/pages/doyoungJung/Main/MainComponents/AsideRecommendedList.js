import React, { Component } from 'react';

class AsideRecommendedList extends Component {
  render() {
    const {
      altMessage,
      recommendedUserPicPath,

      recommendedUserName,
      followInformation,
    } = this.props;

    return (
      <div>
        <li>
          <img
            alt={altMessage}
            className="recommendListPic"
            src={recommendedUserPicPath}
          />
          <div>
            <p>{recommendedUserName}</p>
            <p>{followInformation}</p>
          </div>
          <span>팔로우</span>
        </li>
      </div>
    );
  }
}

export default AsideRecommendedList;
