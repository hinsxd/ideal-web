import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainWrapper state domain
 */

const selectMainWrapperDomain = state => state.get('mainWrapper', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainWrapper
 */

const makeSelectMainWrapper = () =>
  createSelector(selectMainWrapperDomain, substate => substate.toJS());

export default makeSelectMainWrapper;
export { selectMainWrapperDomain };
