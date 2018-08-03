import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the balancePage state domain
 */

const selectBalancePageDomain = state => state.get('balancePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by BalancePage
 */

const makeSelectBalancePage = () =>
  createSelector(selectBalancePageDomain, substate => substate.toJS());

export default makeSelectBalancePage;
export { selectBalancePageDomain };
