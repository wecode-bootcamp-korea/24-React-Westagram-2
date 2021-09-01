import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginDoyoung from './pages/doyoungJung/Login/Login';
import MainDoyoung from './pages/doyoungJung/Main/Main';

import LoginCheoljin from './pages/cheoljinJu/Login/Login';
import MainCheoljin from './pages/cheoljinJu/Main/Main';

import LoginEunjung from './pages/eunjungPark/Login/Login';
import MainEunjung from './pages/eunjungPark/Main/Main';
import SighUpEunjung from './pages/eunjungPark/SignUp/SignUp';

import LoginPalanbyul from './pages/palanbyulChoi/Login/Login';
import MainPalanbyul from './pages/palanbyulChoi/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-cheoljin" component={LoginCheoljin} />
          <Route exact path="/main-cheoljin" component={MainCheoljin} />
          <Route exact path="/login-doyoung" component={LoginDoyoung} />
          <Route exact path="/main-doyoung" component={MainDoyoung} />
          <Route exact path="/login-eunjung" component={LoginEunjung} />
          <Route exact path="/main-eunjung" component={MainEunjung} />
          <Route exact path="/signup-eunjung" component={SighUpEunjung} />
          <Route exact path="/login-palanbyul" component={LoginPalanbyul} />
          <Route exact path="/main-palanbyul" component={MainPalanbyul} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
