import React, { Component } from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';
import Nav from '../../../components/Nav/Nav';
import InputReply from './MainComponents/InputReply';

class MainDoyoung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      Comments: [],
    };
  }

  makeComment = event => {
    this.setState({
      value: event.target.value,
    });
  };

  addComment = event => {
    event.preventDefault();
    if (this.state.value === '') {
      alert('내용을 입력해주세요.');
    } else {
      this.setState({
        Comments: this.state.Comments.concat(this.state.value),
        value: '',
      });
    }
  };

  render() {
    console.log(this.state.value);
    console.log(this.state.comments);
    return (
      <body className="Main">
        <main>
          <Nav />
          <div className="feedsList">
            <article className="firstFeed">
              <div className="feedUploader">
                <img
                  className="UploaderPic"
                  alt="Main Feed Uploader"
                  src="../../../images/doyoungJung/profilepic.jpeg"
                />
                <div className="uploaderId">doyboy03</div>
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="feedPic">
                <img
                  className="feedUploadedPic"
                  alt="Main Feed"
                  src="../../../images/doyoungJung/greenknight.jpeg"
                />
              </div>
              <div className="feedFunction">
                <div className="leftFeedFunction">
                  <i className="fas fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-share-square"></i>
                </div>
                <i className="far fa-bookmark"></i>
              </div>
              <div className="feedCommunication">
                <img
                  className="feedCommunicationPic"
                  alt="Like Icon"
                  src="../../../images/doyoungJung/likeuser.jpeg"
                />
                <div className="likeComment">
                  <span>challanfilm</span>님 <span>외 10명</span>이 좋아합니다
                </div>
              </div>
              <ul className="feedReply">
                <li className="myFeedReply">
                  <span>doyboy03</span> 넘나 보고싶은 영화...
                  <span>더 보기</span>
                </li>
              </ul>
              <div className="grayReply">30분 전</div>

              {/* 입력한 댓글 */}
              <ul>
                {this.state.Comments.map((comment, index) => {
                  return <InputReply key={index} value={comment} />;
                })}
              </ul>
              {/* 입력한 댓글 */}

              {/* 댓글달기 */}
              <form type="submit" className="addReply">
                <input
                  onChange={this.makeComment}
                  value={this.state.value}
                  className="inputText"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button onClick={this.addComment} className="inputBtn">
                  게시
                </button>
              </form>
              {/* 댓글달기 */}
            </article>
          </div>
          <aside>
            <div className="loginUser">
              <img
                alt="User"
                src="../../../images/doyoungJung/profilepic.jpeg"
              />
              <div>doyboy03</div>
            </div>
            <div className="subFeedList">
              <div className="moreInformation">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <ul className="storyList">
                <li>
                  <img
                    alt="Bluebottle Logo"
                    className="subFeedListPic"
                    src="../../../images/doyoungJung/bluebottle.jpeg"
                  />
                  <div>
                    <span>bluebottlecoffee_korea</span>
                    <span>10분 전</span>
                  </div>
                </li>
                <li>
                  <img
                    alt="Apple Logo"
                    className="subFeedListPic"
                    src="../../../images/doyoungJung/apple.jpeg"
                  />
                  <div>
                    <span>apple</span>
                    <span>11분 전</span>
                  </div>
                </li>
                <li>
                  <img
                    alt="Krispy Logo"
                    className="subFeedListPic"
                    src="../../../images/doyoungJung/krispy.jpeg"
                  />
                  <div>
                    <span>krispykreme</span>
                    <span>12분 전</span>
                  </div>
                </li>
                <li>
                  <img
                    alt="Mcdonalds Logo"
                    className="subFeedListPic"
                    src="../../../images/doyoungJung/mcdonalds.jpeg"
                  />
                  <div>
                    <span>mcdonalds_kr</span>
                    <span>13분 전</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="subFeedList">
              <div className="moreInformation">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <ul className="recommendList">
                <li>
                  <img
                    alt="Bluebottle Logo"
                    className="recommendListPic"
                    src="../../../images/doyoungJung//bluebottle.jpeg"
                  />
                  <div>
                    <p>bluebottle</p>
                    <p>wonder_e님 외 2명이 팔로우</p>
                  </div>
                  <span>팔로우</span>
                </li>
                <li>
                  <img
                    alt="Bluebottle Logo"
                    className="recommendListPic"
                    src="../../../images/doyoungJung/bluebottle.jpeg"
                  />
                  <div>
                    <p>bluebottle</p>
                    <p>wonder_e님 외 2명이 팔로우</p>
                  </div>
                  <span>팔로우</span>
                </li>
                <li>
                  <img
                    alt="Bluebottle Logo"
                    className="recommendListPic"
                    src="../../../images/doyoungJung/bluebottle.jpeg"
                  />
                  <div>
                    <p>bluebottle</p>
                    <p>wonder_e님 외 2명이 팔로우</p>
                  </div>
                  <span>팔로우</span>
                </li>
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
        </main>
      </body>
    );
  }
}

export default MainDoyoung;
