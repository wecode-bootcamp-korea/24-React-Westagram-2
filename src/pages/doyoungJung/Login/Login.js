import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import InputId from './LoginComponents/InputId';
import InputPassword from './LoginComponents/InputPassword';
import LoginButton from './LoginComponents/LoginButton';
import './Login.scss';
import '../../../styles/common.scss';
import '../../../styles/reset.scss';

class LoginDoyoung extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleInputLogin = () => {
    fetch('http://10.58.0.84:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        // name: '정도영',
        // phone_number: '01027631662',
        // date_of_birth: '1995-05-20',
        // address: 'seoul',
        // gender: 'M',
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.TOKEN) {
          this.props.history.push('/main-doyoung');
          alert('로그인 성공!');
          console.log(result);
        } else {
          alert('로그인 or 비밀번호를 확인해주세요.');
        }
      });
    // .then(result => console.log('결과: ', result));
  };

  render() {
    const { email, password } = this.state;
    console.log(password);
    return (
      <div>
        <main className="Login">
          <div className="loginPage">
            <h1 className="logo">Westagram</h1>
            <form className="loginSpace">
              <InputId handleInput={this.handleInput} />
              <InputPassword handleInput={this.handleInput} />
              <LoginButton
                handleInputLogin={this.handleInputLogin}
                inputId={email}
                inputPassword={password}
              />
            </form>
            <div className="findPassword">비밀번호를 잊으셨나요?</div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginDoyoung);
