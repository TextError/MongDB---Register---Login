import { combineReducers } from 'redux';
import errors from './errors';
import authenticated from './authenticated';


export default combineReducers({
  errors,
  authenticated
});