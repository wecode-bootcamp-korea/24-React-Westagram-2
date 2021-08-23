import React, { Component } from 'react';
import CommentList from './CommentList';
class Article extends Component {
  render() {
    return (
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
            <div className="username">
              <strong>{this.props.userName}</strong>
            </div>
          </div>
          <div id="faEllipsis">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="feed">
          <img
            alt="feed_photo"
            className="feed_photo"
            src={this.props.feedList}
          />
        </div>
        <div className="feed_bottom">
          <div className="feed_icons">
            <div>
              <i
                className={this.props.className}
                style={this.props.style}
                onClick={this.props.onClick}
              />
              <i className="far fa-comment" />
              <i className="far fa-paper-plane" />
            </div>
            <div id="bookmark">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="feed_likes">
            <strong>CSS</strong>님 <strong>외 3명</strong>이좋아합니다
          </div>
          <div className="feed_text">
            <strong>{this.props.userName}</strong> 안녕하세요
            <br />
          </div>
          <CommentList
            commentLove={this.props.commentLove}
            changeCommentLove={this.props.changeCommentLove}
          />
          <div className="feed_time">12분전</div>
        </div>
        <div className="comment_input_box">
          <input
            className="comment_input"
            type="text"
            placeholder="댓글 달기..."
            value={this.props.value}
            onChange={this.props.onChange}
            onKeyDown={this.props.onKeyDown}
          />
          <span className="comment_enter" onClick={this.props.onClickk}>
            게시
          </span>
        </div>
      </div>
    );
  }
}
export default Article;
