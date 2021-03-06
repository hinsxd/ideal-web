// import { take, call, put, select } from 'redux-saga/effects';
import firebase from 'firebase/app';
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';

import rsf from '../../firebase';

import { types } from './constants';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* loginSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);
    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut);
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);
  while (true) {
    const { user } = yield take(channel);
    if (user) yield put(loginSuccess(user));
    else yield put(logoutSuccess());
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}
// Individual exports for testing
// export default function* defaultSaga() {
// See example in containers/HomePage/saga.js
// }
