import { fromJS } from 'immutable';
import { types } from './constants';

// Initial auth state
export const initialState = fromJS({
  loading: false,
  loggedIn: false,
  user: null,
});

/**
 * Auth reducer
 */
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return state.set('loading', true);
    case types.LOGIN.SUCCESS:
      return state
        .set('loading', false)
        .set('loggedIn', true)
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
    default:
      return state;
  }
}
