import { fromJS } from 'immutable';
import DashboardPageReducer from '../reducer';

describe('DashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(DashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
