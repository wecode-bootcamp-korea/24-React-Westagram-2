import React, { Component } from 'react';
import AsideStoryList from './AsideStotyList';
import AsideRecommendedList from './AsideRecommendedList';
import './Aside.scss';

class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyListData: [],
      recommendedListData: [],
    };
  }

  componentDidMount() {
    fetch('/data/storyListData-Doyoung.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          storyListData: data,
        });
      });

    fetch('/data/recommendedListData-Doyoung.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommendedListData: data,
        });
      });
  }

  render() {
    const { storyListData, recommendedListData } = this.state;

    return (
      <div>
        <aside>
          <div className="loginUser">
            <img alt="User" src="../../../images/doyoungJung/profilepic.jpeg" />
            <div>doyboy03</div>
          </div>
          <div className="subFeedList">
            <div className="moreInformation">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="storyList">
              {storyListData.map(data => {
                return (
                  <AsideStoryList
                    key={data.id}
                    altMessage={data.altMessage}
                    picPath={data.picPath}
                    storyFriendName={data.storyFriendName}
                    uploadTimeAgo={data.uploadTimeAgo}
                  />
                );
              })}
            </ul>
          </div>
          <div className="subFeedList">
            <div className="moreInformation">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="recommendList">
              {recommendedListData.map(data => {
                return (
                  <AsideRecommendedList
                    altMessage={data.altMessage}
                    recommendedUserPicPath={data.recommendedUserPicPath}
                    recommendedUserName={data.recommendedUserName}
                    followInformation={data.followInformation}
                  />
                );
              })}
            </ul>
          </div>
          <div className="policy">
            <div>
              Instagrm 정보﹒지원﹒홍보 센터﹒API﹒
              <br />
              채용정보﹒개인정보처리방침﹒약관﹒
              <br />
              디렉터리﹒프로필﹒해시태그﹒언어
              <br />
            </div>
            <div>ⓒ 2021 INSTAGRAM</div>
          </div>
        </aside>
      </div>
    );
  }
}

export default Aside;
