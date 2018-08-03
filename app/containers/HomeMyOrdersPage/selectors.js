import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the HomeMyOrdersPage state domain
 */

const selectHomeMyOrdersPageDomain = state =>
  state.get('HomeMyOrdersPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeMyOrdersPage
 */

const makeSelectHomeMyOrdersPage = () =>
  createSelector(selectHomeMyOrdersPageDomain, substate => substate.toJS());

export default makeSelectHomeMyOrdersPage;
export { selectHomeMyOrdersPageDomain };
