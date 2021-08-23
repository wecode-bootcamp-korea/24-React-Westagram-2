import React, { Component } from 'react';
import './CommentList.scss';
import Comment from './Comment';
class CommentList extends Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    return (
      <div className="comment_box">
        {this.state.commentList.map(el => {
          return (
            <div className="comment" key={el.id} id={el.id}>
              <Comment
                name={el.userName}
                comment={el.content}
                commentLove={this.props.commentLove}
                changeCommentLove={this.props.changeCommentLove}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentList;
