import axios from 'axios';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../../utils/setAuthToken';
import { BACKEND } from '../../config/backend';
import { ERRORS, ACCOUNT } from './types';

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post(`${BACKEND}/login`, userData)
    .then(res => {
    // Save to localStorage

      const { token } = res.data;

      // Set token to localStorage
      localStorage.setItem('jwtToken', token);

      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: ERRORS.ERROR,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: ACCOUNT.LOGIN,
    payload: decoded
  };
};