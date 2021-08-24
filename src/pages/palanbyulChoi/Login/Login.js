import React, { Component } from 'react';
import './Login.scss';

class LoginPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
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
    console.log(this.state);
    this.activeLogin();
  };

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/main-palanbyul');
    }
  };
  render() {
    const { disabled } = this.state;

    return (
      <div className="LoginPalanbyul">
        <main>
          <div className="logo">Westagram</div>
          <article>
            <div className="login_id">
              <input
                id="id"
                type="text"
                placeholder="전화번호, 사용자 이름또는 이메일"
                className="idValue"
                onChange={this.handleInput}
              />
            </div>
            <div className="login_password">
              <input
                id="pw"
                type="password"
                placeholder="비밀번호"
                className="passwordValue"
                onChange={this.handleInput}
              />
            </div>
            <div>
              <button
                className="login_btn"
                onClick={this.goToMain}
                disabled={disabled}
              >
                로그인
              </button>
            </div>
          </article>
          <footer>비밀번호를 잊으셨나요?</footer>
        </main>
      </div>
    );
  }
}

export default LoginPalanbyul;
