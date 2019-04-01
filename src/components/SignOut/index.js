import React from 'react';

import { withFirebase } from '../Auth/Firebase/FirebaseContext';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);