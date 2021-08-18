import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginDoyoung from './pages/doyoungJung/Login/Login';
import MainDoyoung from './pages/doyoungJung/Main/Main';

import LoginCheoljin from './pages/cheoljinJu/Login/Login';
import MainCheoljin from './pages/cheoljinJu/Main/Main';

import LoginEunjung from './pages/eunjungPark/Login/Login';
import MainEunjung from './pages/eunjungPark/Main/Main';

import LoginPalanbyul from './pages/palanbyulChoi/Login/Login';
import MainPalanbyul from './pages/palanbyulChoi/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginCheoljin} />
          <Route exact path="/main" component={MainCheoljin} />
          <Route exact path="/test" component={LoginDoyoung} />
          <Route exact path="/main" component={MainDoyoung} />
          <Route exact path="/test2" component={LoginEunjung} />
          <Route exact path="/main" component={MainEunjung} />
          <Route exact path="/test3" component={LoginPalanbyul} />
          <Route exact path="/main" component={MainPalanbyul} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
