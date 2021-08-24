import React, { Component } from 'react';
import InputReply from './InputReply';

class InputFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      isLiked: 'false',
      id: 4,
      commentValue: '',
      commentList: [],
    };
  }

  makeComment = event => {
    this.setState({
      commentValue: event.target.value,
    });
  };

  addComment = event => {
    event.preventDefault();
    const { commentValue, commentList } = this.state;
    if (commentValue === '') {
      alert('내용을 입력해주세요.');
    } else {
      this.setState({
        commentList: commentList.concat({
          id: this.state.id,
          userName: 'doyboy03',
          content: commentValue,
          isliked: false,
        }),
        id: this.state.id + 1,
        commentValue: '',
      });
    }

    console.log(commentList);
  };

  render() {
    const { commentValue } = this.state;
    const { commentList } = this.state;
    const { friendsComments } = this.props;

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
            {friendsComments.concat(commentList).map(comment => {
              return (
                <InputReply name={comment.userName} comment={comment.content} />
              );
            })}
          </ul>

          <form type="submit" className="addReply">
            <input
              className="inputText"
              onChange={this.makeComment}
              value={commentValue}
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
