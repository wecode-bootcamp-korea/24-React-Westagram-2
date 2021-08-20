import React, { Component } from 'react';
import './Login.scss';

class LoginPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      backgroundColor: '#C4E1FB',
      disable: false,
    };
  }

  handleIdInput = e => {
    this.setState({ id: e.target.value });
    this.state.id.indexOf('@') > 0 && this.state.pw.length >= 4
      ? this.setState({ backgroundColor: '#0095F6' })
      : this.setState({ backgroundColor: '#C4E1FB' });
  };

  handlePwInput = e => {
    this.setState({ pw: e.target.value });
    this.state.id.indexOf('@') > 0 && this.state.pw.length >= 4
      ? this.setState({ backgroundColor: '#0095F6' })
      : this.setState({ backgroundColor: '#C4E1FB' });
  };
  goToMain = () => {
    if (this.state.backgroundColor === '#0095F6') {
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
                className="login_btn"
                style={{ backgroundColor: this.state.backgroundColor }}
                onClick={this.goToMain}
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
