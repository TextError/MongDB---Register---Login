import axios from 'axios';
import { BACKEND } from '../../config/backend';
import { ERRORS, ACCOUNT } from './types';


// Register user
export const registerUser = ( userData, history ) => dispatch => {
  axios
    .post(`${BACKEND.USER}/register`, userData)
    .then(res => history.push('/login'))
    .then(() => dispatch({ type: ACCOUNT.REGISTER }))
    .catch(err => dispatch({
      type: ERRORS.ERROR,
      payload: err.response.data
    }));
};