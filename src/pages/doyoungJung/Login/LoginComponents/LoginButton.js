import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends Component {
  render() {
    return (
      <div>
        <Link to="/main-doyoung">
          <button
            type="button"
            className={
              this.props.inputId.indexOf('@') >= 0 &&
              this.props.inputPassword.length >= 5
                ? 'loginBtn2'
                : 'loginBtn'
            }
          >
            로그인
          </button>
        </Link>
      </div>
    );
  }
}

export default LoginButton;
