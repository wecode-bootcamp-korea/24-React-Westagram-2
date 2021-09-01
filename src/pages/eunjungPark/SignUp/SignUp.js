import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

class SignUpEunjung extends Component {
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
      alert('입력완료');
    } else {
      if (!checkId) {
        alert('아이디에는 @가 포함되어야 합니다.');
        return;
      }

      if (!checkPw) {
        alert('비밀번호는 4자리 이상이어야 합니다.');
        return;
      }
    }

    fetch('http://10.58.3.176:8000/users/signup', {
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
          alert('회원가입성공');
          this.goToLogin();
        } else alert('회원가입다시!');
      });
  };

  goToLogin = () => {
    this.props.history.push('/login-eunjung');
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
              placeholder="이메일"
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
                회원가입
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

export default SignUpEunjung;
