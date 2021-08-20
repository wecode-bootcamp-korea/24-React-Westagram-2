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

  goToMain = () => {
    this.props.history.push('/main-cheoljin');
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
              onClick={this.goToMain}
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
