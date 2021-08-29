import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from './Article';
import StoryFeed from './StoryFeed';
import StoryData from './StotyData';
import RecommendFeed from './RecommendFeed';
import RecommendData from './RecommendData';
import './Main.scss';

class MainPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  changeFeedLove = loveId => {
    const likeFeedList = this.state.feedList.map(feed => {
      if (feed.id === loveId) {
        feed.isLiked = !feed.isLiked;
      }
      return feed;
    });
    this.setState({ feedList: likeFeedList });
  };

  render() {
    const { feedLoveClassName, feedList } = this.state;
    return (
      <div className="MainPalanbyul">
        <Nav />
        <main>
          <div className="feeds">
            {feedList.map(feed => {
              return (
                <Article
                  feedLoveClassName={feedLoveClassName}
                  changeFeedLove={this.changeFeedLove}
                  imgSrc={feed.src}
                  key={feed.id}
                  userName={feed.userName}
                  commentListData={feed.commentList}
                  userImg={feed.userImg}
                  feedText={feed.feedText}
                  feedId={feed.id}
                  isLiked={feed.isLiked}
                />
              );
            })}
          </div>
          <aside>
            <div className="mainRight">
              <div className="myProfile">
                <div className="myPhoto">
                  <img
                    alt="wecoderPhoto"
                    src="/images/palanbyulChoi/wecode.jpeg"
                  />
                </div>
                <div className="myInfo">
                  <div className="myId">wecode_bootcamp</div>
                  <div className="myName">WeCode | 위코드</div>
                </div>
              </div>
              <div className="story">
                <div className="storyNav">
                  <div>스토리</div>
                  <div>모두보기</div>
                </div>
                <div className="storyFeeds">
                  {StoryData.map(story => {
                    return (
                      <StoryFeed
                        imgSrc={story.src}
                        key={story.id}
                        userName={story.userName}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="recommend">
                <div className="recommendNav">
                  <div>회원님을 위한 추천</div>
                  <div>모두보기</div>
                </div>
                <div className="recommendFeeds">
                  {RecommendData.map(recommend => {
                    return (
                      <RecommendFeed
                        imgSrc={recommend.src}
                        key={recommend.id}
                        userName={recommend.userName}
                      />
                    );
                  })}
                </div>
              </div>
              <footer>
                instagram 정보 · 지원 · 홍보 센터 · API · 채용정보 ·
                개인정보처리방침 · 약관 · 다렉터리 · 프로필 · 해시태그 · 언어
                <br />© 2021 INSTAGRAM FROM FACEBOOK
              </footer>
            </div>
          </aside>
        </main>
      </div>
    );
  }
}

export default MainPalanbyul;
