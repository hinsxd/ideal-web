import { createSelector } from 'reselect';
const selectFirebaseDomain = state => state.firebase;
export const selectAuth = () =>
  createSelector(selectFirebaseDomain, substate => substate.auth);
export const selectProfile = () =>
  createSelector(selectFirebaseDomain, substate => substate.profile);
export const authenticated = () =>
  createSelector(
    selectFirebaseDomain,
    ({ auth }) => auth.isLoaded && !auth.isEmpty,
  );
export const authenticating = () =>
  createSelector(
    selectFirebaseDomain,
    ({ auth, isInitializing }) => !auth.isLoaded || isInitializing === true,
  );
