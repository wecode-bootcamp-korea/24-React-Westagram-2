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
    this.setState(
      {
        [id]: value,
      },
      this.activeLogin
    );
  };
  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/main-palanbyul');
    }
  };
  con = () => {
    fetch('http://10.58.0.171:8000/users/sign-in', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        name: '테드하',
        phone_number: '010-2222-3333',
        date_of_birth: '1998-12-15',
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.message === 'SUCCESS') {
          alert('성공');
        } else if (response.message === 'INVALID_USER') {
          alert('이메일과 비밀번호를 다시 확인해주세요');
        }
      });
  };

  render() {
    return (
      <div className="LoginPalanbyul">
        <main>
          <div className="logo">Westagram</div>
          <article>
            <form
              onSubmit={e => {
                // e.preventDefault();

                console.log(e);
              }}
            >
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
                  type="button"
                  className="login_btn"
                  onClick={this.goToMain}
                  disabled={this.state.disabled}
                >
                  로그인
                </button>
              </div>
            </form>
          </article>
          <footer>비밀번호를 잊으셨나요?</footer>
        </main>
      </div>
    );
  }
}

export default LoginPalanbyul;
