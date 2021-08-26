import React, { Component } from 'react';
import CommentList from './CommentList';
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      commentList: [],
      id: 4,
      userName: '',
    };
  }

  componentDidMount() {
    this.setState({ commentList: this.props.commentList2 });
  }

  onDelete = commentListId => {
    const goodd = this.state.commentList.filter(
      comment => comment.id !== commentListId
    );
    this.setState({ commentList: goodd });
  };

  getComment = e => {
    this.setState({ commentInput: e.target.value });
  };

  addComment = () => {
    if (this.state.commentInput) {
      this.setState({
        commentList: this.state.commentList.concat({
          id: this.state.id,
          userName: 'wecode_bootcamp',
          comment: this.state.commentInput,
        }),
        commentInput: '',
        id: this.state.id + 1,
      });
    }
  };

  enter = e => {
    if (e.key === 'Enter' && this.state.commentInput)
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

  render() {
    const {
      userName,
      peedLoveClassName,
      changePeedLove,
      commentLoveClassName,
      imgSrc,
      userImg,
      feedText,
    } = this.props;

    const { commentInput, commentList } = this.state;

    return (
      <div className="article">
        <div className="profile_box">
          <div className="profile">
            <div>
              <img alt="my_profile" className="user_photo" src={userImg} />
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
              <i className={peedLoveClassName} onClick={changePeedLove} />
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
            <strong>{userName}</strong> {feedText}
            <br />
          </div>
          <CommentList
            commentLoveClassName={commentLoveClassName}
            commentList={commentList}
            onDelete={this.onDelete}
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
          <button className="comment_enter" onClick={this.addComment}>
            게시
          </button>
        </div>
      </div>
    );
  }
}
export default Article;
