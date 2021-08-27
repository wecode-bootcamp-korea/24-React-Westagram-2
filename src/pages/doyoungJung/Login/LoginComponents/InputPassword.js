import React, { Component } from 'react';

class InputPassword extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleInput}
          className="loginPassword loginInformation"
          type="password"
          name="password"
          placeholder="비밀번호"
        />
      </div>
    );
  }
}

export default InputPassword;
