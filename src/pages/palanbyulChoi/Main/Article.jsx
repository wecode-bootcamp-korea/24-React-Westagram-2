import React, { Component } from 'react';
import CommentList from './CommentList';
import Love from './Love';
import './Article.scss';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      commentList: this.props.commentListData,
      id: 4,
      userName: '',
    };
  }

  onDelete = commentListId => {
    const newComment = this.state.commentList.filter(
      comment => comment.id !== commentListId
    );
    this.setState({ commentList: newComment });
  };

  getComment = e => {
    this.setState({ commentInput: e.target.value });
  };

  addMyInfo = () => {
    this.setState({
      commentList: this.state.commentList.concat({
        id: this.state.id,
        userName: 'wecode_bootcamp',
        comment: this.state.commentInput,
      }),
      commentInput: '',
      id: this.state.id + 1,
    });
  };

  addComment = () => {
    if (this.state.commentInput) {
      this.addMyInfo();
    }
  };

  handleEnter = e => {
    if (e.key === 'Enter' && this.state.commentInput) {
      this.addMyInfo();
    }
  };

  render() {
    const { userName, feedLoveClassName, imgSrc, userImg, feedText } =
      this.props;

    const { commentInput, commentList } = this.state;

    return (
      <div className="article">
        <div className="profileBox">
          <div className="profile">
            <div>
              <img alt="myProfile" className="userPhoto" src={userImg} />
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
          <img alt="feedPhoto" className="feedPhoto" src={imgSrc} />
        </div>
        <div className="feedBottom">
          <div className="feedIcons">
            <div>
              <Love
                feedLoveClassName={feedLoveClassName}
                changeFeedLove={this.props.changeFeedLove}
                feedId={this.props.feedId}
                isLiked={this.props.isLiked}
              />
              <i className="far fa-comment" />
              <i className="far fa-paper-plane" />
            </div>
            <div id="bookmark">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="feedLikes">
            <strong>CSS</strong>님 <strong>외 3명</strong>이좋아합니다
          </div>
          <div className="feedText">
            <strong>{userName}</strong> {feedText}
            <br />
          </div>
          <CommentList commentList={commentList} onDelete={this.onDelete} />
          <div className="feedTime">12분전</div>
        </div>
        <div className="commentInputBox">
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            value={commentInput}
            onChange={this.getComment}
            onKeyDown={this.handleEnter}
          />
          <button className="commentEnter" onClick={this.addComment}>
            게시
          </button>
        </div>
      </div>
    );
  }
}
export default Article;
