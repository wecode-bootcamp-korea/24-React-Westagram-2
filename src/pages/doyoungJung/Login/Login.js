import React, { Component } from 'react';

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
      ID: '',
      Password: '',
    };
  }

  handleInputID = event => {
    this.setState({
      ID: event.target.value,
    });
  };

  handleInputPassword = event => {
    this.setState({
      Password: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <main className="Login">
          <div className="loginPage">
            <h1 className="logo">Westagram</h1>
            <form className="loginSpace">
              <InputId handleInputID={this.handleInputID} />
              <InputPassword handleInputPassword={this.handleInputPassword} />
              <LoginButton
                inputId={this.state.ID}
                inputPassword={this.state.Password}
              />
            </form>
            <div className="findPassword">비밀번호를 잊으셨나요?</div>
          </div>
        </main>
      </div>
    );
  }
}

export default LoginDoyoung;
