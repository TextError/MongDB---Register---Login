import isEmpty from '../../components/validation/isEmpty';

import { ACCOUNT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT.AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}

export default authenticated;