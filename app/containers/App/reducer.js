/*
 * AppReducer
 */

import { fromJS } from 'immutable';
import auth from '../../utils/auth';

import {
  SENDING_REQUEST,
  SET_AUTH,
  LOGIN,
  SIGNUP,
  SET_ERROR_MESSAGE,
  LOGOUT,
  CHANGE_FORM,
} from './actions';

const initialState = fromJS({
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  errorMessage: '',
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return state.set('currentlySending', action.sending);
    case LOGIN:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    case SIGNUP:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    case SET_AUTH:
      return state.set('loggedIn', action.newState);
    case SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);
    case LOGOUT:
      return state
        .setIn(['formState', 'username'], '')
        .setIn(['formState', 'password'], '');
    case CHANGE_FORM:
      return state
        .setIn(['formState', 'username'], action.username)
        .setIn(['formState', 'password'], action.password);
    default:
      return state;
  }
}

export default appReducer;

// /*
//  * AppReducer
//  *
//  * The reducer takes care of our data. Using actions, we can change our
//  * application state.
//  * To add a new action, add it to the switch statement in the reducer function
//  *
//  * Example:
//  * case YOUR_ACTION_CONSTANT:
//  *   return state.set('yourStateVariable', true);
//  */

// import { fromJS } from 'immutable';

// import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// // The initial state of the App
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// });

// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_REPOS:
//       return state
//         .set('loading', true)
//         .set('error', false)
//         .setIn(['userData', 'repositories'], false);
//     case LOAD_REPOS_SUCCESS:
//       return state
//         .setIn(['userData', 'repositories'], action.repos)
//         .set('loading', false)
//         .set('currentUser', action.username);
//     case LOAD_REPOS_ERROR:
//       return state.set('error', action.error).set('loading', false);
//     default:
//       return state;
//   }
// }

// export default appReducer;
