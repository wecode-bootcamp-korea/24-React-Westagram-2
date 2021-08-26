import React, { Component } from 'react';
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
        <footer className="footer">
          <ul>
            <li>
              <a href="#">소개</a>
            </li>
            <li>
              <a href="#">도움말</a>
            </li>
            <li>
              <a href="#">홍보 센터</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">채용 정보</a>
            </li>
            <li>
              <a href="#">개인정보처리방침</a>
            </li>
            <li>
              <a href="#">약관</a>
            </li>
            <li>
              <a href="#">위치</a>
            </li>
            <li>
              <a href="#">인기 계정</a>
            </li>
            <li>
              <a href="#">해시태그</a>
            </li>
            <li>
              <a href="#">언어</a>
            </li>
          </ul>
          <span>© 2021 INSTAGRAM FROM FACEBOOK</span>
        </footer>
      </aside>
    );
  }
}

export default Aside;
