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
      commentInput: '',
      enter: '',
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
  changeCommentLove = e => {
    const newLikedComments = this.state.commentList.map(comment => {
      if (comment.id === e.target.id) {
        this.setState({
          commentLoveClassName: 'fa fa-heart',
        });
      }
      return comment;
    });
    this.setState({ commentList: newLikedComments });
  };
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
  getComment = e => {
    this.setState({ commentInput: e.target.value });
  };
  // 댓글 마우스로 전송 누르면 배열에 담기
  enterComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.commentInput),
      commentInput: '',
      commentCounter: this.state.commentCounter + 1,
    });
  };
  enter = e => {
    if (e.key === 'Enter')
      this.setState({
        commentList: this.state.commentList.concat(this.state.commentInput),
        commentInput: '',
      });
  };
  render() {
    return (
      <div className="MainPalanbyul">
        <Nav />
        <main>
          <div className="feeds">
            {this.state.feedList.map(el => {
              return (
                <Article
                  className={this.state.peedLoveClassName}
                  style={{ color: this.state.peedLoveColor }}
                  onClick={this.changePeedLove}
                  value={this.state.commentInput}
                  onChange={this.getComment}
                  onKeyDown={this.enter}
                  onClickk={this.enterComment}
                  commentLove={this.state.commentLoveClassName}
                  changeCommentLove={this.changeCommentLove}
                  feedList={el.src}
                  key={el.id}
                  userName={el.userName}
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
