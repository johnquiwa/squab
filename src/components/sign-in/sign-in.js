import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { authActions } from 'core/auth';
import { signUpOrSignInActions } from 'core/signup';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SignInOrSignUpForm from './sign-in-or-sign-up-form';
import SignInOrSignUp from './sign-in-or-sign-up';
import SignInOptions from './sign-in-options';

const actions = Object.assign({}, authActions, signUpOrSignInActions);

export class SignIn extends Component {
  static propTypes = {
    signInWithGithub: PropTypes.func.isRequired,
    signInWithGoogle: PropTypes.func.isRequired,
    signInWithTwitter: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    signInWithEmail: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: ''
    }
  }

  showThis(props) {
    console.log(props);
    if (props.signup.display === "signUp") {
      return (
          <SignInOrSignUpForm title="Sign Up" submit={props.createUser} back={props.showSignInAndSignUp} />
      )
    } else if (props.signup.display === "signIn") {
      return (
          <SignInOptions {...props} />
      );
    } else if (props.signup.display === "signInEmail") {
      return (
          <SignInOrSignUpForm title="Sign In" submit={props.signInWithEmail} back={props.showSignIn}/>
      );
    } else {
      return (
          <SignInOrSignUp />
      );
    }
  }

  render() {
    const {
      signInWithGithub,
      signInWithGoogle,
      signInWithTwitter,
      showSignUp,
      showSignIn,
      createUser,
      signInWithEmail
    } = this.props;

    return (
      <div className="g-row sign-in">
          {this.showThis(this.props)}
      </div>
    );

  }
}

export default connect(state => ({signup: state.signup}), actions)(SignIn);
