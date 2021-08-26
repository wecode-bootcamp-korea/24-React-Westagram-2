import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <aside className="aside-cheoljin">
        <div className="user-profile">
          <a href="#">
            <img src="/images/cheoljinJu/food.jpeg" alt="user-profile" />
          </a>
          <span className="user-id">
            <a href="#">Wecoder_24th</a>
          </span>
        </div>
        <div className="aside-board">
          <div className="aside-board__header">
            <span>스토리</span>
            <span>
              <a href="#">모두보기</a>
            </span>
          </div>
          <div className="aside-board__contents">
            <div className="aside-board__content">
              <a href="#" className="border">
                <img src="/images/cheoljinJu/wecode.jpeg" alt="other-profile" />
              </a>
              <div>
                <span>
                  <a href="#"> wecode__bootcamp </a>
                </span>
                <span>10분전</span>
              </div>
            </div>
            <div className="aside-board__content">
              <a href="#" className="border">
                <img src="/images/cheoljinJu/wecode.jpeg" alt="other-profile" />
              </a>
              <div>
                <span>
                  <a href="#"> wecode__bootcamp </a>
                </span>
                <span>10분전</span>
              </div>
            </div>
          </div>
        </div>
        <div className="aside-board">
          <div className="aside-board__header">
            <span>회원님을 위한 추천</span>
            <span>
              <a href="#">모두보기</a>
            </span>
          </div>
          <div className="aside-board__contents">
            <div className="aside-board__content">
              <a href="#">
                <img
                  src="/images/cheoljinJu/wecode.jpeg"
                  className="other-profile"
                />
              </a>
              <div>
                <span>
                  <a href="#"> wecode__bootcamp </a>
                </span>
                <span>회원님을 팔로우 합니다.</span>
              </div>
              <button type="button">팔로우</button>
            </div>
            <div className="aside-board__content">
              <a href="#">
                <img
                  src="/images/cheoljinJu/wecode.jpeg"
                  className="other-profile"
                />
              </a>
              <div>
                <span>
                  <a href="#"> wecode__bootcamp </a>
                </span>
                <span>회원님을 팔로우 합니다.</span>
              </div>
              <button type="button">팔로우</button>
            </div>
          </div>
        </div>
        <Footer />
      </aside>
    );
  }
}

export default Aside;
