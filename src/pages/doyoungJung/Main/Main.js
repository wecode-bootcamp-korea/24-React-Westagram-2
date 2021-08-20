import React, { Component } from 'react';
import './Main.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

class MainDoyoung extends Component {
  render() {
    return (
      <div>
        <body className="Main">
          <nav className="navigation">
            <div className="mainLogo">
              <div className="logo">
                <i class="fab fa-instagram"></i>
              </div>
              <div className="logoText">Westagram</div>
            </div>
            <div className="searchBar">
              <i className="fas fa-search"></i>
              <div>검색</div>
            </div>
            <div className="mainMenu">
              <img
                alt="See More"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
              <div className="heart">
                <img
                  alt="Heart Icon"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
                <div className="redDot"></div>
              </div>
              <img
                alt="My Profile"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              />
            </div>
          </nav>
          <main>
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
                <form type="submit" className="addReply">
                  <input
                    className="inputText"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <input className="inputBtn" type="submit" value="게시" />
                </form>
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
                <div>ⓒ 2019 INSTAGRAM</div>
              </div>
            </aside>
          </main>
        </body>
      </div>
    );
  }
}

export default MainDoyoung;
