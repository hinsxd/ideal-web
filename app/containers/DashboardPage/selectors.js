import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the DashboardPage state domain
 */

const selectDashboardPageDomain = state =>
  state.get('DashboardPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardPage
 */

const makeSelectDashboardPage = () =>
  createSelector(selectDashboardPageDomain, substate => substate.toJS());

export default makeSelectDashboardPage;
export { selectDashboardPageDomain };
