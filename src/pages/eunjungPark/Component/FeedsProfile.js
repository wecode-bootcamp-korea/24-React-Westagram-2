import React, { Component } from 'react';
import './style/FeedsProfile.scss';

class FeedsProfile extends Component {
  render() {
    return (
      <header className="feeds-profile">
        <div>
          <img
            alt="feeds-profile"
            src="./images/eunjungPark/feeds-profile.png"
          />
        </div>
        <div>
          <p className="user-id">eunJeong</p>
          <p className="color-light">라이언 너무 좋아</p>
        </div>
      </header>
    );
  }
}

export default FeedsProfile;
