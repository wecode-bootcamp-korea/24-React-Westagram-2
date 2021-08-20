import React, { Component } from 'react';
import './Comment.scss';
class Comment extends Component {
  render() {
    return (
      <div className="comment_box">
        <div className="comment">
          <div>
            <strong>html</strong> 멋져요🛶
          </div>
          <div>
            <i className="fas fa-times" id="commentOut" />
            <i className="far fa-heart" />
          </div>
        </div>
        <div className="comment">
          <div>
            <b>java</b> 이뻐요🚀
          </div>
          <div>
            <i className="fas fa-times" id="commentOut" />
            <i className="far fa-heart" />
          </div>
        </div>
        {this.props.list.map((comment, id) => {
          return (
            <div key={id} className="comment">
              <div>
                <b>code_bootcamp</b> {comment}
              </div>
              <div>
                <i className="fas fa-times" id="commentOut" />
                <i className="far fa-heart" />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
