import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';
import './Feed.scss';

class Feed extends Component {
  state = {};

  componentDidMount = () => {
    this.setState(this.props.feed);
  };

  handleAdd = value => {
    const comment = {
      id: Date.now(),
      userName: '24_Wecode',
      comment: value,
      isUser: true,
      isLike: false,
    };
    const comments = [...this.state.comments, comment];
    this.setState({ comments });
  };

  handleDelete = reply => {
    const comments = this.state.comments.filter(item => reply.id !== item.id);
    this.setState({ comments });
  };

  handleLike = reply => {
    const comments = this.state.comments.map(item => {
      if (item.id === reply.id) {
        item.isLike = !item.isLike;
        return item;
      } else {
        return item;
      }
    });
    this.setState({ comments });
  };

  render() {
    const { comments } = this.state;
    const totalLike =
      comments && comments.filter(item => item.isLike === true).length;
    const { feed } = this.props;
    const { profile, userName, url } = feed;
    return (
      <article className="feed-cheoljin">
        <header className="feed__header">
          <div className="feed__user">
            <a href="#">
              <img src={profile} alt="user-Profile" />
            </a>
            <a href="#">
              <h2>{userName}</h2>
            </a>
          </div>
          <button type="button">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </header>
        <div className="feed__box">
          <img src={url} alt="content-image" />
          <div className="feed__content">
            <div className="icons">
              <img
                src="/images/cheoljinJu/heart.png"
                alt="댓글 달기"
                className="icon"
              />
              <img
                src="/images/cheoljinJu/commentary.png"
                alt="댓글 달기"
                className="icon"
              />
              <img
                src="/images/cheoljinJu/send.png"
                alt="댓글 달기"
                className="icon"
              />
              <img
                src="/images/cheoljinJu/bookmark.png"
                alt="댓글 달기"
                className="icon"
              />
            </div>
            <div className="feed__text">
              <p className="feed__liked">
                <strong>wecode__bootcamp</strong>님
                <strong>외 {totalLike}명</strong>이 좋아합니다
              </p>
              <ul>
                {comments &&
                  comments.map(reply => (
                    <Comment
                      key={reply.id}
                      reply={reply}
                      feed={feed}
                      onDelete={this.handleDelete}
                      onLike={this.handleLike}
                    />
                  ))}
              </ul>
            </div>
          </div>
          <CommentForm onAdd={this.handleAdd} feed={feed} />
        </div>
      </article>
    );
  }
}

export default Feed;
