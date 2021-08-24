import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from './Article';
import StoryPeed from './StoryPeed';
import StoryData from './StotyData';
import RecommendPeed from './RecommendPeed';
import RecommendData from './RecommendData';
import './Main.scss';
class MainPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peedLoveColor: 'black',
      peedLoveClassName: 'far fa-heart',
      commentLoveClassName: 'far fa-heart',
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  changePeedLove = () => {
    this.state.peedLoveClassName === 'far fa-heart'
      ? this.setState({
          peedLoveClassName: 'fa fa-heart',
        })
      : this.setState({
          peedLoveClassName: 'far fa-heart',
        });
  };

  render() {
    const { peedLoveClassName, commentLoveClassName, feedList } = this.state;
    return (
      <div className="MainPalanbyul">
        <Nav />
        <main>
          <div className="feeds">
            {feedList.map(feed => {
              return (
                <Article
                  className={peedLoveClassName}
                  changePeedLove={this.changePeedLove}
                  commentLoveClassName={commentLoveClassName}
                  imgSrc={feed.src}
                  key={feed.id}
                  userName={feed.userName}
                  commentList2={feed.commentList}
                  userImg={feed.userImg}
                />
              );
            })}
          </div>
          <aside>
            <div className="main_right">
              <div className="my_profile">
                <div className="my_photo">
                  <img
                    alt="wecoder_photo"
                    src="/images/palanbyulChoi/wecode.jpeg"
                  />
                </div>
                <div className="my_info">
                  <div className="my_id">wecode_bootcamp</div>
                  <div className="my_name">WeCode | 위코드</div>
                </div>
              </div>
              <div className="story">
                <div className="story_nav">
                  <div>스토리</div>
                  <div>모두보기</div>
                </div>
                <div className="story_peeds">
                  {StoryData.map(story => {
                    return (
                      <StoryPeed
                        imgSrc={story.src}
                        key={story.id}
                        userName={story.userName}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="recommend">
                <div className="recommend_nav">
                  <div>회원님을 위한 추천</div>
                  <div>모두보기</div>
                </div>
                <div className="recommend_peeds">
                  {RecommendData.map(recommend => {
                    return (
                      <RecommendPeed
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
