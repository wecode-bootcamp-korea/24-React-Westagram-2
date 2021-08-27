import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import AsideFeeds from '../AsideFeeds/AsideFeeds';
import './Aside.scss';

class Aside extends Component {
  render() {
    const storyData = 'StoryDataCJ.json';
    const suggestData = 'SuggestDataCJ.json';
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
          <AsideFeeds data={storyData} />
        </div>
        <div className="aside-board">
          <div className="aside-board__header">
            <span>회원님을 위한 추천</span>
            <span>
              <a href="#">모두보기</a>
            </span>
          </div>
          <div className="aside-board__contents">
            <AsideFeeds data={suggestData} />
          </div>
        </div>
        <Footer />
      </aside>
    );
  }
}

export default Aside;
