import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

// Session/State Info for all components
import { withFirebase } from '../Auth/Firebase/FirebaseContext';
import AuthUserContext from '../Auth/Session/AuthUserContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/pw-forget" component={PasswordForgetPage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/admin" component={AdminPage} />
          </div>
        </Router>
      </AuthUserContext.Provider>
    );
  }
}

export default withFirebase(App);