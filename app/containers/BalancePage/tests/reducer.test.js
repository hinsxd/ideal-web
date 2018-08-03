import { fromJS } from 'immutable';
import balancePageReducer from '../reducer';

describe('balancePageReducer', () => {
  it('returns the initial state', () => {
    expect(balancePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
