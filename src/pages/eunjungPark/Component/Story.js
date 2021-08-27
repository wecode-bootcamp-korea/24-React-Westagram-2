import React, { Component } from 'react';
import './style/Story.scss';

class Story extends Component {
  render() {
    return (
      <>
        <article className="story">
          <div className="story-title">
            <span className="color-light">스토리</span>
            <span className="bold">모두 보기</span>
          </div>
          <div className="story-main">
            <div className="right-article">
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
            </div>
            <div className="right-article">
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
            </div>
            <div className="right-article">
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
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Story;
