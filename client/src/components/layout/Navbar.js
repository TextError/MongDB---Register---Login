import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/logout';

// Components
import Logo from './Logo';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      isAuthenticated: false,
    }
  }

  onClick = () => { this.setState({ show: !this.state.show }); };
  onSignOut = () => { 
    // Clears cookie;
    this.props.logoutUser();
  }

  render() {

    const { isAuthenticated } = this.props.authenticated;
    const { show } = this.state;

    // isAuthenticated === true
    const authLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/dashboard'
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
            ><span>Dashboard</span></NavLink>
        </li>
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/admin'
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
            ><span>Admin</span></NavLink>
        </li>
        
        <li className="nav-item mr-3 mt-3">
          <span
            className='nav-link'
            onClick={this.onSignOut}
            ><span>Sign Out</span></span>
        </li>
      </ul>
    );

    // isAuthenticated === false
    const guestLinks = (
      <ul className="navbar-nav ml-auto mr-5">
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/register' 
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
          ><span>Register</span></NavLink>
        </li>
        <li className="nav-item mr-3 mt-3">
          <NavLink 
            to='/login' 
            className='nav-link'
            activeClassName="active"
            onClick={this.onClick}
          ><span>Sign in</span></NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Logo />
        <button
          className="navbar-toggler" 
          type="button"
          onClick={this.onClick}  
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={classnames('collapse navbar-collapse', { 'show' : show })}>
          <ul className='navbar-nav mr-auto m-r-5'>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/home' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              ><span>Home</span></NavLink>
            </li>
            <li className="nav-item mr-3 mt-3">
            <NavLink 
              to='/about' 
              className='nav-link'
              activeClassName="active"
              onClick={this.onClick}
              ><span>About</span></NavLink>
            </li>
          </ul>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    )
  }
};

const mapStateToProps = state => ({
  authenticated: state.authenticated
});


export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar))