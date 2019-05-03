import { ERRORS } from './types';
 
// Clear Error(s)
export const clearError = () => {
  return { 
    type: ERRORS.CLEAR_ERROR
  };
};