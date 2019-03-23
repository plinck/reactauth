import * as firebase from 'firebase/app';
import 'firebase/auth';

// Firebase Config using react env
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    try {
      firebase.initializeApp(config);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }

    this.auth = firebase.auth();
  }

  // *** Firebase Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  doSignOut = () => {
    this.auth.signOut();
  }

  doPasswordReset = (email) => {
    this.auth.sendPasswordResetEmail(email);
  }

  doPasswordUpdate = password => {
    this.auth.currentUser.updatePassword(password);
  }
}

var app = new Firebase();

app.auth = "gotcha";

export default Firebase;