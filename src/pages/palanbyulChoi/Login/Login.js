import React, { Component } from 'react';
import './Login.scss';

class LoginPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      loginBtnClassName: 'login_btn',
      disabled: true,
    };
  }
  activeLogin = () => {
    this.state.id.indexOf('@') > 0 && this.state.pw.length >= 4
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  };
  handleIdInput = e => {
    this.setState({ id: e.target.value });
    this.activeLogin();
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
    this.activeLogin();
  };
  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/main-palanbyul');
    }
  };
  render() {
    return (
      <login>
        <main>
          <div className="logo">Westagram</div>
          <article>
            <div className="login_id">
              <input
                type="text"
                placeholder="전화번호, 사용자 이름또는 이메일"
                className="idValue"
                value={this.state.id}
                onChange={this.handleIdInput}
              />
            </div>
            <div className="login_password">
              <input
                type="password"
                placeholder="비밀번호"
                className="passwordValue"
                value={this.state.pw}
                onChange={this.handlePwInput}
              />
            </div>
            <div>
              <button
                className={this.state.loginBtnClassName}
                onClick={this.goToMain}
                disabled={this.state.disabled}
              >
                로그인
              </button>
            </div>
          </article>
          <footer>비밀번호를 잊으셨나요?</footer>
        </main>
      </login>
    );
  }
}

export default LoginPalanbyul;
