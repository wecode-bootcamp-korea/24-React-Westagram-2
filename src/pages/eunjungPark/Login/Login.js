import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginEunjung extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      bottonChange: 'login-btn',
    };
  }
  loginButton = () => {
    const { id, pw } = this.state;
    const checkId = id.includes('@');
    const checkPw = pw.length >= 4;

    if (checkId && checkPw) {
      alert('로그인 성공');
      this.props.history.push('/main-eunjungPark');
    }

    if (!checkId) {
      alert('아이디에는 @가 포함되어야 합니다.');
    }

    if (!checkPw) {
      alert('비밀번호는 4자리 이상이어야 합니다.');
      this.isLoginOK = false;
    }
  };

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
              <button className="login-btn" onClick={this.loginButton}>
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
