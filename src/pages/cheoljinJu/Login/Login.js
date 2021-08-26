import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

class LoginCheoljin extends Component {
  state = {
    id: '',
    password: '',
  };

  handleInput = event => {
    const { className, value } = event.target;
    const state = { ...this.state, [className]: value };
    this.setState(state);
  };

  handleSignUp = event => {
    fetch('http://10.58.1.129:8000/users/sign-up', {
      method: 'POST',
      body: JSON.stringify({
        nane: '하루',
        email: this.state.id,
        password: this.state.password,
        phone_number: '010-1111-2222',
        date_of_birth: '2001-01-02',
      }),
    })
      .then(result => result.json())
      .then(result => console.log(result));
  };

  handleLogin = event => {
    fetch('http://10.58.1.129:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
      }),
    })
      .then(result => result.json())
      .then(result => {
        result.TOKEN
          ? this.props.history.push('/main-cheoljin')
          : alert('아이디와 비밀번호를 맞게 작성해주세요');
      });
  };

  render() {
    const { id, password } = this.state;
    const isActive = id.includes('@') && password.length > 4 ? true : false;

    return (
      <div className="login">
        <div className="login-box">
          <h1 className="logo">westagram</h1>
          <form className="login-form" action="">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="id"
              aria-label="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="password"
              aria-label="비밀번호"
              onChange={this.handleInput}
            />
            <button
              type="button"
              className={`login-form__submit ${isActive ? 'active' : ''}`}
              disabled={!isActive}
              onClick={this.handleLogin}
            >
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
