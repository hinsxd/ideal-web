/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

const initialState = fromJS({
  auth: {
    loading: false,
    loggedIn: false,
    user: null,
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
    default:
      return state;
  }
}

export default appReducer;
