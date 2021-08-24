import React, { Component } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Article from './Article';
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
    if (this.state.peedLoveColor === 'black') {
      this.setState({
        peedLoveColor: 'rgb(237, 73, 86)',
        peedLoveClassName: 'fa fa-heart',
      });
    } else {
      this.setState({
        peedLoveColor: 'black',
        peedLoveClassName: 'far fa-heart',
      });
    }
  };
  // 댓글쓰면 담기

  render() {
    const { peedLoveClassName, peedLoveColor, commentLoveClassName, feedList } =
      this.state;
    return (
      <div className="MainPalanbyul">
        <Nav />
        <main>
          <div className="feeds">
            {feedList.map(feed => {
              return (
                <Article
                  className={peedLoveClassName}
                  peedLoveColor={{ color: peedLoveColor }}
                  changePeedLove={this.changePeedLove}
                  commentLoveClassName={commentLoveClassName}
                  imgSrc={feed.src}
                  key={feed.id}
                  userName={feed.userName}
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
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>JAVA</strong>
                      </div>
                      <div className="feed_time">1분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>HTML</strong>
                      </div>
                      <div className="feed_time">48분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>REACT</strong>
                      </div>
                      <div className="feed_time">21분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>CODE</strong>
                      </div>
                      <div className="feed_time">42분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>CAD</strong>
                      </div>
                      <div className="feed_time">24분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>DOG</strong>
                      </div>
                      <div className="feed_time">16분 전</div>
                    </div>
                  </div>
                  <div className="story_peed">
                    <div className="story_photo">
                      <img
                        alt="wecoder_photo"
                        className="user_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                      />
                    </div>
                    <div className="stoty_info">
                      <div className="username">
                        <strong>wecoder</strong>
                      </div>
                      <div className="feed_time">10분 전</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommend">
                <div className="recommend_nav">
                  <div>회원님을 위한 추천</div>
                  <div>모두보기</div>
                </div>
                <div className="recommend_peeds">
                  <div className="recommend_peed">
                    <div className="recommend_photo">
                      <img
                        alt="wecoder_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                        className="user_photo"
                      />
                    </div>
                    <div className="recommend_info">
                      <div>
                        <div className="username">
                          <strong>have</strong>
                        </div>
                        <div className="feed_time">7명이 팔로우</div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                  </div>
                  <div className="recommend_peed">
                    <div className="recommend_photo">
                      <img
                        alt="wecoder_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                        className="user_photo"
                      />
                    </div>
                    <div className="recommend_info">
                      <div>
                        <div className="username">
                          <strong>have</strong>
                        </div>
                        <div className="feed_time">7명이 팔로우</div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                  </div>
                  <div className="recommend_peed">
                    <div className="recommend_photo">
                      <img
                        alt="wecoder_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                        className="user_photo"
                      />
                    </div>
                    <div className="recommend_info">
                      <div>
                        <div className="username">
                          <strong>have</strong>
                        </div>
                        <div className="feed_time">7명이 팔로우</div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                  </div>
                  <div className="recommend_peed">
                    <div className="recommend_photo">
                      <img
                        alt="wecoder_photo"
                        src="/images/palanbyulChoi/wecode.jpeg"
                        className="user_photo"
                      />
                    </div>
                    <div className="recommend_info">
                      <div>
                        <div className="username">
                          <strong>have</strong>
                        </div>
                        <div className="feed_time">7명이 팔로우</div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                  </div>
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
