/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, types } from './constants';

export const initialState = fromJS({
  loading: false,
  loggedIn: false,
  user: null,
});

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return state.set('loading', true);
    case types.LOGIN.SUCCESS:
      return state
        .set('loading', true)
        .set('loggedIn', false)
        .set('user', action.user);
    case types.LOGIN.FAILURE:
      return state.set('loading', false);
    case types.LOGOUT.SUCCESS:
      return state
        .set('loading', false)
        .set('loggedIn', false)
        .set('user', null);
    case types.LOGOUT.FAILURE:
      return state.set('loading', false);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
};

export default loginPageReducer;
