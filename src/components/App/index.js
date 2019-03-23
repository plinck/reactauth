import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import * as ROUTES from '../../constants/routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    // This is used to proxy the client (react) through the express server
    // So client and server can be deployed together
    this.connecToServer = this.connecToServer.bind(this);
  }

  // This is used to proxy the client (react) through the express server
  // So client and server can be deployed together
  connecToServer() {
    fetch('/');
  }

  // This is used to proxy the client (react) through the express server
  // So client and server can be deployed together
  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return ( 
      <Router>
        <div>
          <Navigation />
          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default App;