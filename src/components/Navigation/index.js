import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

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
        return (
            <div>
            <ul className="sidenav" id="mobile-menu">
                <li>
                    <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                </li>
                <li>
                    <Link to={ROUTES.LANDING}>Landing</Link>
                </li>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTES.ACCOUNT}>Account</Link>
                </li>
                <li>
                    <Link to={ROUTES.ADMIN}>Admin</Link>
                </li>
            </ul>

            <div className='navbar-fixed'>
                <nav className={this.navBarClass}>
                    <div className="container nav-wrapper">
                        <a href="#!" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.LANDING}>Landing</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.ACCOUNT}>Account</Link>
                            </li>
                            <li>
                                <Link to={ROUTES.ADMIN}>Admin</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
            );
    }
}

export default Navigation;