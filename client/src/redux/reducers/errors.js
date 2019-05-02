import { ERRORS } from '../actions/types';

const initialState = {
  errors: {}
};

const errors = (state=initialState, action) => {
  switch(action.type) {
    case ERRORS.ERROR:
      return {
        ...state,
        errors: action.payload
      }
    case ERRORS.CLEAR_ERROR:
      return {
        ...state,
        errors: {}
      }
    default:
      return state
  }
};

export default errors;