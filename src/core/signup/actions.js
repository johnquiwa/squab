import { SHOW_SIGN_UP, SHOW_SIGN_IN, SHOW_SIGN_IN_EMAIL, SHOW_SIGN_IN_AND_SIGN_UP } from './action-types';

export function showSignUp() {
	console.log('show sign up');
	return {
		type: SHOW_SIGN_UP,
		display: 'signUp'
	};
}

export function showSignIn() {
	return {
		type: SHOW_SIGN_IN,
		display: 'signIn'
	};
}

export function showSignInEmail() {
	return {
		type: SHOW_SIGN_IN_EMAIL,
		display: 'signInEmail'
	};
}

export function showSignInAndSignUp() {
	return {
		type: SHOW_SIGN_IN_AND_SIGN_UP,
		display: null
	};
}