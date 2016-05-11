import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS
} from './action-types';


function authenticate(provider) {
  return (dispatch, getState) => {
    const { firebase } = getState();

    firebase.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithOAuthPopup :', error); // eslint-disable-line no-console
      }
      else {
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: authData,
          meta: {
            timestamp: Date.now()
          }
        });
      }
    });
  };
}

export function initAuth() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    dispatch({
      type: INIT_AUTH,
      payload: firebase.getAuth(),
      meta: {
        timestamp: Date.now()
      }
    });
  };
}


export function signInWithGithub() {
  return authenticate('github');
}


export function signInWithGoogle() {
  return authenticate('google');
}


export function signInWithTwitter() {
  return authenticate('twitter');
}

export function signInWithEmail(email, password) {
  return (dispatch, getState) => {
    const { firebase } = getState();

    console.log(email);
    console.log(password);

    firebase.authWithPassword({
      email    : email,
      password : password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: authData,
            meta: {
              timestamp: Date.now()
            }
        });
      }
    });

  }
}

export function createUser(email, password) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.createUser({
      email: email,
      password: password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: userData,
          meta: {
            timestamp: Date.now()
          }
        });
        firebase.child(`/users/${userData.uid}`)
          .set({email});
      }
    });
  }
}

export function signOut() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.unauth();
    dispatch({
      type: SIGN_OUT_SUCCESS
    });
  };
}
