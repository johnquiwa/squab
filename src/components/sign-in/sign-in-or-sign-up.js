import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUpOrSignInActions } from 'core/signup';

export class SignInOrSignUp extends Component {

	render() {
		return (
	      <div className="g-col">
	        <h1 className="sign-in__heading">Welcome</h1>
	        <button className="sign-in__button" onClick={this.props.showSignIn} type="button">Sign In</button>
	        <button className="sign-in__button" onClick={this.props.showSignUp} type="button">Sign Up</button>
	      </div>
		);
	}

}

export default connect(null, signUpOrSignInActions)(SignInOrSignUp);