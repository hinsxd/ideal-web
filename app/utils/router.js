import React from 'react';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import { push, routerActions } from 'react-router-redux';
import { Route } from 'react-router-dom';
// import LoadingScreen from '../components/LoadingScreen'; // change it to your custom component

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: () => <div>Loading</div>,
  allowRedirectBack: true,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/login',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && !auth.isEmpty,
  // redirectAction: newLoc => dispatch => {
  //   dispatch(push(newLoc));
  // },
  redirectAction: routerActions.replace,
});

export const userIsNotAuthenticated = connectedRouterRedirect({
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: () => <div>Loading</div>,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing === true,
  authenticatedSelector: ({ firebase: { auth } }) =>
    auth.isLoaded && auth.isEmpty,
  // redirectAction: newLoc => dispatch => {
  //   dispatch(push(newLoc));
  // },
  redirectAction: routerActions.replace,
});

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={userIsAuthenticated(Component)} />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} component={userIsNotAuthenticated(Component)} />
);
