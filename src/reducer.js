import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import { authReducer } from 'core/auth';
import { firebaseReducer } from 'core/firebase';
import { notificationReducer } from 'core/notification';
import { tasksReducer } from 'core/tasks';
import { teamsReducer } from 'core/teams';
import { signUpReducer } from 'core/signup';


export default combineReducers({
  auth: authReducer,
  signup: signUpReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  routing: routerReducer,
  tasks: tasksReducer,
  teams: teamsReducer
});
