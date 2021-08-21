import React, { Component } from 'react';
import './CommentList.scss';
import Comment from './Comment';
class CommentList extends Component {
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
            <strong>java</strong> 이뻐요🚀
          </div>
          <div>
            <i className="fas fa-times" id="commentOut" />
            <i className="far fa-heart" />
          </div>
        </div>
        {this.props.list.map((el, id) => {
          return (
            <div key={id} className="comment">
              <div>
                <strong>code_bootcamp</strong>
                <Comment value={el} />
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

export default CommentList;
