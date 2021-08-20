import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

class LoginDoyoung extends Component {
  render() {
    return (
      <div>
        <main className="Login">
          <div className="loginPage">
            <h1 className="logo">Westagram</h1>
            <form className="loginSpace">
              <input
                className="loginId loginInformation"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                className="loginPassword loginInformation"
                type="password"
                placeholder="비밀번호"
              />
              <Link to="/main-doyoung">
                <button type="button" className="loginBtn">
                  로그인
                </button>
              </Link>
            </form>
            <div className="findPassword">비밀번호를 잊으셨나요?</div>
          </div>
        </main>
      </div>
    );
  }
}

export default LoginDoyoung;
