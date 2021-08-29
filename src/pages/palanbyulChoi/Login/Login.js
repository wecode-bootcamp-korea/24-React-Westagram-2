import React, { Component } from 'react';
import './Login.scss';

class LoginPalanbyul extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleInput = e => {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  };

  goToMain = () => {
    if (!this.state.disabled) {
      this.props.history.push('/main-palanbyul');
    }
  };

  Postlogin = () => {
    fetch('http://10.58.2.219:8000/postings/posting', {
      method: 'POST',
      body: JSON.stringify({
        feed_text: this.state.id,
        password: this.state.pw,
        name: '테드하',
        phone_number: '010-2222-3333',
        date_of_birth: '1998-12-15',
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('성공');
        } else if (response.message === 'INVALID_USER') {
          alert('이메일과 비밀번호를 다시 확인해주세요');
        }
      });
  };

  postToken = () => {
    fetch('http://10.58.2.219:8000/postings/posting', {
      method: 'POST',
      body: JSON.stringify({
        feed_text: this.state.id,
        image_url: this.state.pw,
      }),
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoxNn0.qOl1lSALZKy8IyW1JrGMhCus2L6ToOQEaxiyBO_5kN0', //토큰 값 전달
      },
    });
  };

  render() {
    const { id, pw } = this.state;
    const isButtonDisabled = id.includes('@') && pw.length >= 5;
    return (
      <div className="loginPalanbyul">
        <main>
          <div className="logo">Westagram</div>
          <article>
            <form>
              <div className="loginId">
                <input
                  id="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름또는 이메일"
                  className="idValue"
                  onChange={this.handleInput}
                />
              </div>
              <div className="loginPassword">
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
                  className="loginBtn"
                  onClick={this.goToMain}
                  disabled={!isButtonDisabled}
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
