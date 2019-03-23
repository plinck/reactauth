import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from "./SignUpForm";

import * as ROUTES from '../../constants/routes';

class SignUpPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return ( 
        <div>
          <h1>SignUp</h1>
          <SignUpForm />
        </div>
      );
  }
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class SignUpLink extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return ( 
        <div>
          <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </p>
        </div>
      );
  }
}

export default SignUpPage;

export { SignUpForm, SignUpLink };