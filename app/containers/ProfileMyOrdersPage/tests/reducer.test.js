import { fromJS } from 'immutable';
import MyOrdersPageReducer from '../reducer';

describe('MyOrdersPageReducer', () => {
  it('returns the initial state', () => {
    expect(MyOrdersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
