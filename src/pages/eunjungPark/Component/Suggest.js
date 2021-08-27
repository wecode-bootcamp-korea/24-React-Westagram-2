import React, { Component } from 'react';
import './style/Suggest.scss';

class Suggest extends Component {
  render() {
    return (
      <>
        <article className="suggest">
          <div className="suggest-title">
            <span className="color-light">회원님을 위한 추천</span>
            <span className="bold">모두 보기</span>
          </div>
          <div className="suggest-main">
            <div className="suggest-nth">
              <div className="right-article">
                <div>
                  <img
                    alt="mine-profile"
                    src="./images/eunjungPark/mine-profile.png"
                  />
                </div>
                <div>
                  <p className="user-id">chunSig</p>
                  <p className="color-light">춘식이도 사랑해주세요</p>
                </div>
              </div>
              <p className="follow">팔로우</p>
            </div>
            <div className="suggest-nth">
              <div className="right-article">
                <div>
                  <img
                    alt="mine-profile"
                    src="./images/eunjungPark/mine-profile.png"
                  />
                </div>
                <div>
                  <p className="user-id">chunSig</p>
                  <p className="color-light">춘식이도 사랑해주세요</p>
                </div>
              </div>
              <p className="follow">팔로우</p>
            </div>
            <div className="suggest-nth">
              <div className="right-article">
                <div>
                  <img
                    alt="mine-profile"
                    src="./images/eunjungPark/mine-profile.png"
                  />
                </div>
                <div>
                  <p className="user-id">chunSig</p>
                  <p className="color-light">춘식이도 사랑해주세요</p>
                </div>
              </div>
              <p className="follow">팔로우</p>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Suggest;
