// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';
// import { call, put, select, take } from 'redux-saga/effects';
import { DEFAULT_ACTION } from './constants';
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(DEFAULT_ACTION, () => {});
}
