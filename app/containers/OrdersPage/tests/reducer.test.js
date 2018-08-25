import { fromJS } from 'immutable';
import ordersPageReducer from '../reducer';

describe('ordersPageReducer', () => {
  it('returns the initial state', () => {
    expect(ordersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
