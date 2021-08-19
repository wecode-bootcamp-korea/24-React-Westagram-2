import React, { Component } from 'react';
import './Main.scss';

class MainPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peedloveColor: 'black',
      peedloveClassName: 'far fa-heart',
      commentInput: '',
    };
  }

  changePeedLove = () => {
    if (this.state.peedoveColor === 'black') {
      this.setState({
        peedloveColor: 'rgb(237, 73, 86)',
        peedloveClassName: 'fa fa-heart',
      });
    } else {
      this.setState({
        peedloveColor: 'black',
        peedloveClassName: 'far fa-heart',
      });
    }
  };
  writeComment = e => {
    this.setState({ commentInput: e.target.value });
  };
  enterComment = () => {};
  render() {
    return (
      <div className="MainPalanbyul">
        <div className="nav">
          <div className="nav_logo">
            <i class="fab fa-instagram" id="nav_logo_icon" />
            <div className="nav_logo_name">Westagram</div>
          </div>
          <div className="nav_search">
            <input placeholder="검색" />
          </div>
          <div className="nav_icons">
            <img
              alt="explore"
              className="nav_icon"
              src="/images/palanbyulChoi/explore.png"
            />
            <img
              alt="my_profile"
              className="nav_icon"
              src="/images/palanbyulChoi/profile.png"
              id="my_profile"
            />
            <img
              alt="news"
              className="nav_icon"
              src="/images/palanbyulChoi/heart.png"
            />
          </div>
        </div>
        <main>
          <div className="feeds">
            <div className="article">
              <div className="profile_box">
                <div className="profile">
                  <div>
                    <img
                      alt="my_profile"
                      className="user_photo"
                      src="/images/palanbyulChoi/wecode.jpeg"
                    />
                  </div>
                  <div className="username">code_bootcamp</div>
                </div>
                <div id="faEllipsis">
                  <i class="fas fa-ellipsis-h" />
                </div>
              </div>
              <div className="feed">
                <img
                  alt="feed_photo"
                  className="feed_photo"
                  src="/images/palanbyulChoi/main.jpeg"
                />
              </div>
              <div className="feed_bottom">
                <div className="feed_icons">
                  <div>
                    <i
                      className={this.state.peedloveClassName}
                      style={{ color: this.state.peedloveColor }}
                      onClick={this.changePeedLove}
                    />
                    <i className="far fa-comment" />
                    <i className="far fa-paper-plane" />
                  </div>
                  <div id="bookmark">
                    <i class="far fa-bookmark" />
                  </div>
                </div>
                <div className="feed_likes">
                  <strong>CSS</strong>님 외 3명이좋아합니다
                </div>
                <div className="feed_text">
                  <strong>wecode_bootcamp</strong> 안녕하세요
                  <br />
                </div>
                <div className="comment_box">
                  <div className="comment">
                    <div>
                      <b>html</b> 멋져요🛶
                    </div>
                    <div>
                      <i class="fas fa-times" id="commentOut" />
                      <i class="far fa-heart" />
                    </div>
                  </div>
                  <div className="comment">
                    <div>
                      <b>java</b> 이뻐요🚀
                    </div>
                    <div>
                      <i class="fas fa-times" id="commentOut" />
                      <i class="far fa-heart" />
                    </div>
                  </div>
                </div>
                <div className="feed_time">12분전</div>
              </div>
              <div className="comment_input_box">
                <input
                  className="comment_input"
                  type="text"
                  placeholder="댓글 달기..."
                  value={this.state.commentInput}
                  onChange={this.writeComment}
                />
                <span className="comment_enter" onClick={this.enterComment}>
                  게시
                </span>
              </div>
            </div>
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
                      <div className="username">JAVA</div>
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
                      <div className="username">HTML</div>
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
                      <div className="username">react</div>
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
                      <div className="username">code</div>
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
                      <div className="username">dsfnl2</div>
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
                      <div className="username">fds2</div>
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
                      <div className="username">wecoder</div>
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
                        <div className="username">have</div>
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
                        <div className="username">have</div>
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
                        <div className="username">have</div>
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
                        <div className="username">have</div>
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
