import { setCurrentUser } from './login';
import setAuthToken from '../../utils/setAuthToken';
import { ACCOUNT } from './types';

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // Redux logout msg
  dispatch({type: ACCOUNT.LOGOUT});
};