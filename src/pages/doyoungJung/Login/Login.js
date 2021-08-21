import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputId from './LoginComponent/InputId';
import InputPassword from './LoginComponent/InputPassword';
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
    console.log(this.state);
    return (
      <div>
        <main className="Login">
          <div className="loginPage">
            <h1 className="logo">Westagram</h1>
            <form className="loginSpace">
              <InputId handleInputID={this.handleInputID} />
              <InputPassword handleInputPassword={this.handleInputPassword} />
              <Link to="/main-doyoung">
                <button type="button" className="loginBtn">
                  로그인
                </button>
              </Link>
            </form>
            <div className="findPassword">비밀번호를 잊으셨나요?</div>
          </div>
        </main>
      </div>
    );
  }
}

export default LoginDoyoung;
