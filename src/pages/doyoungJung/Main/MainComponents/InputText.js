import React, { Component } from 'react';
import './InputText.scss';

class InputText extends Component {
  render() {
    return (
      <div>
        <form type="submit" className="addReply">
          <input
            onChange={this.props.makeComment}
            className="inputText"
            type="text"
            placeholder="댓글 달기..."
          />
          <button onClick={this.props.addComment} className="inputBtn">
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default InputText;
