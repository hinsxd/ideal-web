/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

const initialState = fromJS({
  auth: {
    currentUser: false,
    loggedIn: false,
  },
  myOrders: {
    data: false,
    loading: false,
  },
  // orders: {
  //   data: false,
  //   loading: false,
  // },
});
function appReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default appReducer;
