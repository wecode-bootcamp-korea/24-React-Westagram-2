import React, { Component } from 'react';

class InputId extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleInputID}
          className="loginId loginInformation"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
    );
  }
}

export default InputId;
