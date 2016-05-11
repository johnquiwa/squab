import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUpOrSignInActions } from 'core/signup';
import { authActions } from 'core/auth';
import SignInOrSignUpForm from './sign-in-or-sign-up-form';

export class SignInOptions extends Component {

	render() {
		const {
			signInWithGithub, 
			signInWithGoogle, 
			signInWithTwitter,
			signInWithEmail,
			showSignInEmail,
			title,
			showSignInAndSignUp
		} = this.props;

		console.log(this.props);

		return (
			<div className="g-col">
		        <h1 className="sign-in__heading">{title}</h1>
		        <button className="sign-in__button" onClick={showSignInEmail} type="button">Email</button>
		        <button className="sign-in__button" onClick={signInWithGithub} type="button">GitHub</button>
		        <button className="sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
		        <button className="sign-in__button" onClick={signInWithTwitter} type="button">Twitter</button>
		        <button className="sign-in__button" onClick={showSignInAndSignUp} type="button">Back</button>
		    </div>
		);
	}
}

export default connect(null, authActions)(SignInOptions);