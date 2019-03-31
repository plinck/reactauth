import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Firebase, { FirebaseContext } from './components/Firebase'; // Firebase instance and context
// Top ensure firebase is only instantiated once

import * as serviceWorker from './serviceWorker';

// Doing it this way, we can be assured that Firebase is only instantiated once 
// and that it is injected via React’s Context API to React’s component tree. 
// Now, every component that is interested in using Firebase has access to the Firebase instance
// with a FirebaseContext.Consumer component. 
// Even though you will see it first-hand later for this application, the following code snippet shows how it would work:
// import React from 'react';
// import  { FirebaseContext } from '../Firebase';
// const SomeComponent = () => (
//   <FirebaseContext.Consumer>
//     {firebase => {
//       return <div>I've access to Firebase and render something.</div>;
//     }}
//   </FirebaseContext.Consumer>
// );
// export default SomeComponent;
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
