import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainCheoljin extends Component {
  state = {
    comments: [
      { id: 1, userName: '24_Ted', comment: '거봐 좋았자나! ~~ 👀' },
      { id: 2, userName: '24_candy', comment: '나도 여기 가보고 싶어!' },
    ],
  };

  inputRef = React.createRef();

  handleAdd = e => {
    e.preventDefault();
    const comment = {
      id: Date.now(),
      userName: '24_Wecode',
      comment: this.inputRef.current.value,
    };
    const comments = [...this.state.comments, comment];
    this.setState({ comments });
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <div className="main-cheoljin">
        <Nav />
        <main className="main">
          <div className="main__container">
            <section className="main__feeds">
              <article className="main__feed">
                <header className="feed__header">
                  <div className="feed__user">
                    <a href="#">
                      <img
                        src="/images/cheoljinJu/food.jpeg"
                        alt="user-Profile"
                      />
                    </a>
                    <a href="#">
                      <h2>Wecoder_24th</h2>
                    </a>
                  </div>
                  <button type="button">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </header>
                <div className="feed__box">
                  <img src="/images/cheoljinJu/food.jpeg" />
                  <div className="feed__content">
                    <div className="icons">
                      <svg
                        aria-label="좋아요"
                        className="icon"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                      </svg>
                      <svg
                        aria-label="댓글 달기"
                        className="icon"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <svg
                        aria-label="게시물 공유"
                        className="icon"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                      </svg>
                      <svg
                        aria-label="저장"
                        className="icon"
                        fill="#262626"
                        height="24"
                        role="img"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                      </svg>
                    </div>
                    <div className="feed__text">
                      <p className="feed__liked">
                        <strong>wecode__bootcamp</strong>님
                        <strong>외 10명</strong>이 좋아합니다
                      </p>
                      {this.state.comments.map(reply => {
                        return (
                          <div className="feed__comment">
                            <span>{reply.userName}</span>
                            <span>{reply.comment}</span>
                            <button type="button" className="comment__heart">
                              <i className="far fa-heart"></i>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <form className="comment-box" onSubmit={this.handleAdd}>
                    <input
                      type="text"
                      aria-label="댓글달기"
                      placeholder="댓글달기..."
                      className="comment-input"
                      ref={this.inputRef}
                    />
                    <button type="submit" className="comment-button">
                      게시
                    </button>
                  </form>
                </div>
              </article>
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
