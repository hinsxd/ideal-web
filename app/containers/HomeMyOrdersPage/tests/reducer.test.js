import { fromJS } from 'immutable';
import HomeMyOrdersPageReducer from '../reducer';

describe('HomeMyOrdersPageReducer', () => {
  it('returns the initial state', () => {
    expect(HomeMyOrdersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
