import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the ordersPage state domain
 */

const selectOrdersPageDomain = state => state.get('orders', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by OrdersPage
 */

const makeSelectOrdersPage = () =>
  createSelector(selectOrdersPageDomain, substate => substate.toJS());

export default makeSelectOrdersPage;
export { selectOrdersPageDomain };
