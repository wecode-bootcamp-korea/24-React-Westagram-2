import React, { Component } from 'react';
import './Main.scss';

// 아이콘 이름 facebook-f -----> 컴포넌트 이름 faFacebookF

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

class MainEunjung extends Component {
  render() {
    return (
      <div className="body-container">
        {/* nav바 위치 */}

        <div className="main">
          <div className="feeds">
            <section className="article">
              <header className="title">
                <div className="title-left">
                  <div className="feeds-profile">
                    <img
                      alt="feeds-profile"
                      src="./images/eunjungPark/feeds-profile.png"
                    />
                  </div>
                  <span className="user-id">eunJeong</span>
                </div>
                <div className="title-right">
                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
              </header>

              <article className="feeds-image">
                <img
                  alt="feeds-image"
                  src="./images/eunjungPark/feeds-image.png"
                />
              </article>

              <article className="image-bottom">
                <div className="feeds-icon">
                  <img
                    alt="좋아요"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <img
                    alt="말풍선"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                  <img
                    alt="공유하기"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </div>
                <div className="bookmark">
                  <img
                    alt="북마크"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </div>
              </article>

              <article className="comment-title">
                <div className="mine-profile">
                  <img
                    alt="mine-profile"
                    src="./images/eunjungPark/feeds-profile.png"
                  />
                </div>
                <div className="comment-tit">
                  <span className="user-id">chunSig</span>님
                  <span className="bold">
                    외<span className="like-number">10명</span>
                  </span>
                  이 좋아합니다.
                </div>
              </article>

              <footer className="art-comment">
                <div className="comment-nth">
                  <span className="user-id">eunJeong</span>
                  <span>수호가 라이언을 좋아하는구나..!</span>
                  <span className="color-light">더 보기</span>
                </div>
                <p className="color-light"></p>

                <div className="comment-nth">
                  <span className="user-id">hoon-zz</span>
                  <span className="comment-text">
                    은정아 라이언 좀 적당히 사
                  </span>
                  <img
                    className="comment-like"
                    style={{
                      width: '13px',
                      height: '13px',
                    }}
                    alt="좋아요"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <p className="color-light">42분 전</p>
                </div>
              </footer>

              <div className="comment-plus">
                <input
                  id="comment-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="comment-btn" disabled="disabled">
                  게시
                </button>
              </div>
            </section>
          </div>

          <aside className="main-right">
            <header className="feeds-profile">
              <div>
                <img
                  alt="feeds-profile"
                  src="./images/eunjungPark/feeds-profile.png"
                />
              </div>
              <div>
                <p className="user-id">eunJeong</p>
                <p className="color-light">라이언 너무 좋아</p>
              </div>
            </header>
            {/* 스토리라인 */}
            <article className="story">
              <div className="story-title">
                <span className="color-light">스토리</span>
                <span className="bold">모두 보기</span>
              </div>
              <div className="story-main">
                <div className="right-article">
                  <div>
                    <img
                      alt="feeds-profile"
                      src="./images/eunjungPark/feeds-profile.png"
                    />
                  </div>
                  <div>
                    <p className="user-id">eunJeong</p>
                    <p className="color-light">라이언 너무 좋아</p>
                  </div>
                </div>
                <div className="right-article">
                  <div>
                    <img
                      alt="feeds-profile"
                      src="./images/eunjungPark/feeds-profile.png"
                    />
                  </div>
                  <div>
                    <p className="user-id">eunJeong</p>
                    <p className="color-light">라이언 너무 좋아</p>
                  </div>
                </div>
                <div className="right-article">
                  <div>
                    <img
                      alt="feeds-profile"
                      src="./images/eunjungPark/feeds-profile.png"
                    />
                  </div>
                  <div>
                    <p className="user-id">eunJeong</p>
                    <p className="color-light">라이언 너무 좋아</p>
                  </div>
                </div>
              </div>
            </article>

            {/* 친구추천 */}
            <article className="suggest">
              <div className="suggest-title">
                <span className="color-light">회원님을 위한 추천</span>
                <span className="bold">모두 보기</span>
              </div>
              <div className="suggest-main">
                <div className="suggest-nth">
                  <div className="right-article">
                    <div>
                      <img
                        alt="mine-profile"
                        src="./images/eunjungPark/mine-profile.png"
                      />
                    </div>
                    <div>
                      <p className="user-id">chunSig</p>
                      <p className="color-light">춘식이도 사랑해주세요</p>
                    </div>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="suggest-nth">
                  <div className="right-article">
                    <div>
                      <img
                        alt="mine-profile"
                        src="./images/eunjungPark/mine-profile.png"
                      />
                    </div>
                    <div>
                      <p className="user-id">chunSig</p>
                      <p className="color-light">춘식이도 사랑해주세요</p>
                    </div>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
                <div className="suggest-nth">
                  <div className="right-article">
                    <div>
                      <img
                        alt="mine-profile"
                        src="./images/eunjungPark/mine-profile.png"
                      />
                    </div>
                    <div>
                      <p className="user-id">chunSig</p>
                      <p className="color-light">춘식이도 사랑해주세요</p>
                    </div>
                  </div>
                  <p className="follow">팔로우</p>
                </div>
              </div>
            </article>

            <footer className="footer">
              westagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ 채용 정보 ・
              개인정보처리방침 ・ 약관 ・ 디렉토리 ・ 프로필 ・ 해시태그 ・ 언어
            </footer>
            <span className="color-light">@ 2021 WESTAGRAM</span>
          </aside>
        </div>
      </div>
    );
  }
}

export default MainEunjung;
