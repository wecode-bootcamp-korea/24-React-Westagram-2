import React, { Component } from 'react';

class InputId extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleInput}
          className="loginId loginInformation"
          type="text"
          name="email"
          placeholder="이메일"
        />
      </div>
    );
  }
}

export default InputId;
