import React, { Component } from 'react';
import './style/Feeds.scss';
import Comment from './Comment';

class Feeds extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="feeds">
        <section className="article">
          <header className="title">
            <div className="title-left">
              <div className="feeds-profile">
                <img alt="feeds-profile" src={this.props.feedsProfileUrl} />
              </div>
              <span className="user-id">{this.props.userId}</span>
            </div>
            <div className="title-right">
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
          </header>

          <article className="feeds-image">
            <img alt="feeds-image" src={this.props.feedsImageUrl} />
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
              <img alt="mine-profile" src={this.props.mineProfileUrl} />
            </div>
            <div className="comment-tit">
              <span className="user-id">{this.props.likeUserId}</span>님
              <span className="bold">
                외<span className="like-number">{this.props.likeUserNum}</span>
              </span>
              이 좋아합니다.
            </div>
          </article>

          <footer className="art-comment">
            <div className="comment-nth">
              <span className="user-id">{this.props.userId}</span>
              <span>{this.props.commentTitText}</span>
              <span className="color-light">더 보기</span>
            </div>

            <div className="comment-nth">
              {this.props.commentList.map(comment => {
                return (
                  <Comment
                    key={comment.id}
                    userId={comment.userId}
                    commentText={comment.commentText}
                  />
                );
              })}
              <p className="color-light">42분 전</p>
            </div>
          </footer>

          <div className="comment-plus">
            <input
              id="comment-input"
              type="text"
              placeholder="댓글 달기..."
              // onChange={this.handleCommentInput}
              // onKeyUp={this.changeColor}
              // value={this.state.value}
            />
            <button
              className="comment-btn"
              disabled="disabled"
              onClick={this.addComment}
            >
              게시
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Feeds;
