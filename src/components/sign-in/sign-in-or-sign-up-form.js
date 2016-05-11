import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors'

export default class SignInOrSignUpForm extends Component {

	constructor(props, context) {
		super(props, context);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(){
	  let email = this.refs.email.getValue();
      let password = this.refs.password.getValue();

      this.props.submit(email, password);
	}

	render() {

	const styles = {
		color: {
			color: Colors.grey50,
		}
	};

	  return (
	    <div className="g-col">
	    	<h1 className="sign-in__heading">{this.props.title}</h1>
	      <TextField ref="email" hintText="email" hintStyle={styles.color} inputStyle={styles.color}></TextField>
	        <br />
	      <TextField ref="password" type="password" hintText="password" hintStyle={styles.color} inputStyle={styles.color}></TextField>
	        <br />
	      <button className="sign-in__button" onClick={this.handleSubmit} type="button">{this.props.title}</button>
	      <button className="sign-in__button" onClick={this.props.back} type="button">Back</button>
	   	</div>
	  );

	}

}

