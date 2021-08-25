import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import './Main.scss';

class MainCheoljin extends Component {
  state = {
    feeds: [],
  };

  componentDidMount = () => {
    fetch('http://localhost:3000/data/CommentDataCJ.json', {
      method: 'GET',
    })
      .then(result => result.json())
      .then(feeds => {
        this.setState({
          feeds,
        });
      });
  };

  // handleAdd = (value, feed) => {
  //   const comment = {
  //     id: Date.now(),
  //     userName: '24_Wecode',
  //     comment: value,
  //     isUser: true,
  //   };
  //   const comments = [...feed.comments, comment];
  //   const newFeed = { ...feed, comments };
  //   const feeds = this.state.feeds.map(item => {
  //     if (feed.id === item.id) {
  //       return newFeed;
  //     } else {
  //       return item;
  //     }
  //   });
  //   this.setState({ feeds });
  // };

  // handleDelete = (reply, feed) => {
  //   const comments = feed.comments.filter(item => reply.id !== item.id);
  //   const newFeed = { ...feed, comments };
  //   const feeds = this.state.feeds.map(item => {
  //     if (feed.id === item.id) {
  //       return newFeed;
  //     } else {
  //       return item;
  //     }
  //   });
  //   this.setState({ feeds });
  // };

  render() {
    return (
      <div className="main-cheoljin">
        <Nav />
        <main className="main">
          <div className="main__container">
            <section className="main__feeds">
              {this.state.feeds.map(feed => (
                <Feed
                  key={feed.id}
                  feed={feed}
                  comments={feed.comments}
                  onDelete={this.handleDelete}
                  onAdd={this.handleAdd}
                />
              ))}
            </section>
            <aside className="aside">
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
                      <img
                        src="/images/cheoljinJu/wecode.jpeg"
                        alt="other-profile"
                      />
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
                      <img
                        src="/images/cheoljinJu/wecode.jpeg"
                        alt="other-profile"
                      />
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
          </div>
        </main>
      </div>
    );
  }
}

export default MainCheoljin;
