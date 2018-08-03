import { fromJS } from 'immutable';
import HomeDashboardPageReducer from '../reducer';

describe('HomeDashboardPageReducer', () => {
  it('returns the initial state', () => {
    expect(HomeDashboardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
