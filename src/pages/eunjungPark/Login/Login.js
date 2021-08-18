import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginEunjung extends Component {
  render() {
    return (
      <div className="body-container">
        <section className="main-container">
          <div class="logo">
            <h1>Westagram</h1>
          </div>
          <div className="login-input">
            <input
              id="login-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="login-pwd" type="password" placeholder="비밀번호" />
            <Link to="/main-eunjung">
              <button className="login-btn" disabled="disabled">
                로그인
              </button>
            </Link>
            <footer className="foot-section">
              <a href="https://www.instagram.com/accounts/password/reset/">
                비밀번호를 잊으셨나요?
              </a>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default LoginEunjung;
