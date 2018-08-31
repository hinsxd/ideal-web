/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, types } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const login = () => ({
  type: types.LOGIN.REQUEST,
});

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user,
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
});
