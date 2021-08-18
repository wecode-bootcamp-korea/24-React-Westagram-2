import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/doyoungJung/Login/Login';
import Main from './pages/doyoungJung/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
	      <Switch>
          <Route exact path="/" component={Login} />
	        <Route exact path="/main" component={Main} />
        </Switch>
	    </Router>
    )
  }
}

export default Routes;