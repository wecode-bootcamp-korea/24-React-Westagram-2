import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class LoginButton extends Component {
  render() {
    const { inputId, inputPassword } = this.props;
    return (
      <div>
        {/* <Link to="/main-doyoung"> */}
        <button
          type="button"
          className={
            inputId.indexOf('@') >= 0 && inputPassword.length >= 5
              ? 'validBtn'
              : 'invalidBtn'
          }
          onClick={this.props.handleInputLogin}
        >
          로그인
        </button>
        {/* </Link> */}
      </div>
    );
  }
}

export default LoginButton;
