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
    this.state.id.indexOf('@') > 0 && this.state.pw.length >= 5
      ? this.setState({ disabled: false })
      : this.setState({ disabled: true });
  };
  handleInput = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
    this.activeLogin();
  };

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/main-palanbyul');
    }
  };
  render() {
    const { pw, id, loginBtnClassName, disabled } = this.state;
    return (
      <login>
        <main>
          <div className="logo">Westagram</div>
          <article>
            <div className="login_id">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름또는 이메일"
                className="idValue"
                value={id}
                onChange={this.handleInput}
              />
            </div>
            <div className="login_password">
              <input
                id="pw"
                type="password"
                placeholder="비밀번호"
                className="passwordValue"
                value={pw}
                onChange={this.handleInput}
              />
            </div>
            <div>
              <button
                className={loginBtnClassName}
                onClick={this.goToMain}
                disabled={disabled}
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
