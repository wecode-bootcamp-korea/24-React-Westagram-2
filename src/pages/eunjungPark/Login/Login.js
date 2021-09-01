import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginEunjung extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginButton = () => {
    const { id, pw } = this.state;
    const checkId = id.includes('@');
    const checkPw = pw.length >= 4;

    if (checkId && checkPw) {
      alert('입력성공');

      fetch('http://10.58.3.176:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          name: '이름',
          email: this.state.id,
          password: this.state.pw,
          contact_mobile: '010-0000-0000',
          nickname: 'AAA',
          address: 'BBB',
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.message === 'SUCCESS') {
            alert('로그인성공');
            this.goToMain();
          } else {
            alert('로그인다시!');
          }
        });
    } else {
      if (!checkId) {
        alert('아이디에는 @가 포함되어야 합니다.');
      }

      if (!checkPw) {
        alert('비밀번호는 4자리 이상이어야 합니다.');
      }
    }
  };

  goToMain = () => {
    this.props.history.push('/main-eunjung');
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
              name="id"
              onChange={this.handleInput}
            />
            <input
              id="login-pwd"
              type="password"
              placeholder="비밀번호"
              name="pw"
              onChange={this.handleInput}
            />
            <div>
              <button
                onClick={this.loginButton}
                tabIndex="-1"
                className={
                  this.state.id.indexOf('@') !== -1 && this.state.pw.length >= 5
                    ? 'login-btn-yes'
                    : 'login-btn-no'
                }
                disabled={
                  this.state.id.indexOf('@') !== -1 && this.state.pw.length >= 5
                    ? false
                    : true
                }
              >
                로그인
              </button>
            </div>
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
