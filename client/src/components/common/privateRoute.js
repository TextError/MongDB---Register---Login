import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, authenticated, ...rest}) => (
  <Route 
    {...rest}
    render = {
      props => authenticated.isAuthenticated === true ? 
        ( <Component {...props} /> ) : ( <Redirect to='/login' /> )
    }
  />
);

PrivateRoute.propTypes = {
  authenticated: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.authenticated
});

export default connect(mapStateToProps)(PrivateRoute);