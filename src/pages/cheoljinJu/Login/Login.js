import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class LoginCheoljin extends Component {
  render() {
    return (
      <div className="login">
        <div className="login-box">
          <h1 className="logo">westagram</h1>
          <form className="login-form" action="">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="login-form__id"
              aria-label="전화번호, 사용자 이름 또는 이메일"
              ref={this.idRef}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="login-form__pw"
              aria-label="비밀번호"
            />
            <button type="button" className="login-form__submit">
              로그인
            </button>
            <a href="/main" className="login-form__link">
              비밀번호를 잊으셨나요?
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginCheoljin);
