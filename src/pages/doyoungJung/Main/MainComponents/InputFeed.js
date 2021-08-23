import React, { Component } from 'react';
import InputReply from './InputReply';

class InputFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  makeComment = event => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  addComment = event => {
    event.preventDefault();
    if (this.state.commentValue === '') {
      alert('내용을 입력해주세요.');
    } else {
      this.setState({
        commentList: this.state.commentList.concat(this.state.commentValue),
        commentValue: '',
      });
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData-Doyoung.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { commentList, commentValue } = this.state;
    console.log(this.props.commentList);

    return (
      <div>
        <article className="firstFeed">
          <div className="feedUploader">
            <img
              className="UploaderPic"
              alt="Main Feed Uploader"
              src={this.props.uploaderPic}
            />
            <div className="uploaderId">{this.props.uploaderName}</div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className="feedPic">
            <img
              className="feedUploadedPic"
              alt="Main Feed"
              src={this.props.feedPic}
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
              <span>doyboy03</span> {this.props.uploaderComment}
              <span>더 보기</span>
            </li>
          </ul>
          <div className="grayReply">30분 전</div>

          <ul>
            {commentList.map(comment => {
              return (
                <InputReply
                  key={comment.id}
                  name={comment.userName}
                  comment={comment.content}
                />
              );
            })}
          </ul>

          <form type="submit" className="addReply">
            <input
              onChange={this.makeComment}
              value={commentValue}
              className="inputText"
              type="text"
              placeholder="댓글 달기..."
            />
            <button onClick={this.addComment} className="inputBtn">
              게시
            </button>
          </form>
        </article>
      </div>
    );
  }
}

export default InputFeed;
