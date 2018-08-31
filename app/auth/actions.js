/*
 *
 * Auth actions
 *
 */

import { types } from './constants';

export const login = provider => ({
  type: types.LOGIN.REQUEST,
  provider,
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
