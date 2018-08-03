import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the HomeDashboardPage state domain
 */

const selectHomeDashboardPageDomain = state =>
  state.get('HomeDashboardPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeDashboardPage
 */

const makeSelectHomeDashboardPage = () =>
  createSelector(selectHomeDashboardPageDomain, substate => substate.toJS());

export default makeSelectHomeDashboardPage;
export { selectHomeDashboardPageDomain };
