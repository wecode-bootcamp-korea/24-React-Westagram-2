import React, { Component } from 'react';
import InputFeed from './MainComponents/InputFeed';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainDoyoung extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData-Doyoung.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedData: data,
        });
      });
  }

  render() {
    const { feedData } = this.state;
    return (
      <div>
        <body className="main">
          <main>
            <Nav />
            <div className="feedsList">
              {feedData.map(data => {
                return (
                  <InputFeed
                    key={data.id}
                    uploaderPic={data.uploaderPic}
                    uploaderName={data.uploaderName}
                    feedPic={data.feedPic}
                    uploaderComment={data.uploaderComment}
                    friendsComments={data.friendsComments}
                  />
                );
              })}
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
      </div>
    );
  }
}

export default MainDoyoung;
