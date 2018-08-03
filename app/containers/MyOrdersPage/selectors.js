import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the MyOrdersPage state domain
 */

const selectMyOrdersPageDomain = state =>
  state.get('MyOrdersPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyOrdersPage
 */

const makeSelectMyOrdersPage = () =>
  createSelector(selectMyOrdersPageDomain, substate => substate.toJS());

export default makeSelectMyOrdersPage;
export { selectMyOrdersPageDomain };
