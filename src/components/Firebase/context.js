import React from 'react';

const FirebaseContext = React.createContext(null);

// HOC - Higher order component to wrap signup form or others to inject props
//pass all the props (using ...props) and also add the firebase ref to the props
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;