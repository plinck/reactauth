import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

class Navigation extends React.Component {
  constructor(props) {
      super(props);

      this.navBarClass = '';

      if (props.scroll){
          this.navBarClass = 'transparent z-depth-0';
      } else {
          this.navBarClass = 'z-depth-0 blue darken-4'
      }
  }

  render() {
    const navigationAuth = 
      <ul>
        <li>
          <Link to="/">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
      ;

    const navigationNonAuth = 
      <ul>
        <li>
            <Link to="/">Landing</Link>
        </li>
        <li>
            <Link to="/signin">Signin</Link>
        </li>
      </ul>
    ;

    // get auth user from react-context firebase
    const Navigation = () => (
      <div>
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? navigationAuth : navigationNonAuth
          }
        </AuthUserContext.Consumer>
      </div>
    );
      
    return (
      <div>
        <ul className="sidenav" id="mobile-menu">
            <Navigation />
        </ul>

        <div className='navbar-fixed'>
            <nav className={this.navBarClass}>
                <div className="container nav-wrapper">
                    <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <Navigation />
                    </ul>
                </div>
            </nav>
        </div>
      </div>
    );
  }// render
} //class

export default Navigation;