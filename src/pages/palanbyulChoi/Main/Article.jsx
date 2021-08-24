import React, { Component } from 'react';
import CommentList from './CommentList';
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  getComment = e => {
    this.setState({ commentInput: e.target.value });
  };

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
        commentCounter: this.state.commentCounter + 1,
      });
  };

  render() {
    const {
      userName,
      className,
      changePeedLove,
      commentLoveClassName,
      imgSrc,
    } = this.props;

    const { commentInput, commentList } = this.state;

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
              <strong>{userName}</strong>
            </div>
          </div>
          <div id="faEllipsis">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="feed">
          <img alt="feed_photo" className="feed_photo" src={imgSrc} />
        </div>
        <div className="feed_bottom">
          <div className="feed_icons">
            <div>
              <i className={className} onClick={changePeedLove} />
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
            <strong>{userName}</strong> 안녕하세요
            <br />
          </div>
          <CommentList
            commentLoveClassName={commentLoveClassName}
            commentList={commentList}
          />
          <div className="feed_time">12분전</div>
        </div>
        <div className="comment_input_box">
          <input
            className="comment_input"
            type="text"
            placeholder="댓글 달기..."
            value={commentInput}
            onChange={this.getComment}
            onKeyDown={this.enter}
          />
          <span className="comment_enter" onClick={this.enterComment}>
            게시
          </span>
        </div>
      </div>
    );
  }
}
export default Article;
