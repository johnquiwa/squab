import { SHOW_SIGN_UP, SHOW_SIGN_IN, SHOW_SIGN_IN_EMAIL, SHOW_SIGN_IN_AND_SIGN_UP} from './action-types';

export const initialState = {
	display: null
};

export function signUpReducer(state = initialState, action) {
  switch (action.type) {
  	case SHOW_SIGN_UP:
  	  return {
  	  	display: action.display
  	  };

  	case SHOW_SIGN_IN:
  	  return {
  	  	display: action.display
  	  };

  	case SHOW_SIGN_IN_EMAIL:
  	  return {
  	  	display: action.display
  	  };

  	case SHOW_SIGN_IN_AND_SIGN_UP:
  	return {
  		display: action.display
  	}

  	default:
  	  return state;
  }
}
