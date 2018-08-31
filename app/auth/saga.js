// import { take, call, put, select } from 'redux-saga/effects';
import firebase from 'firebase/app';
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';

import rsf from '../firebase';
import { types, providers } from './constants';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
function* loginSaga(action) {
  try {
    switch (action.provider) {
      case providers.GOOGLE:
        yield call(rsf.auth.signInWithPopup, googleAuthProvider);
        break;
      case providers.FACEBOOK:
        yield call(rsf.auth.signInWithPopup, facebookAuthProvider);
        break;
      default:
        break;
    }
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

export default function* authSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  ]);
}
