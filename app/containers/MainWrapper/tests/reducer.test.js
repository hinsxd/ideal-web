import { fromJS } from 'immutable';
import mainWrapperReducer from '../reducer';

describe('mainWrapperReducer', () => {
  it('returns the initial state', () => {
    expect(mainWrapperReducer(undefined, {})).toEqual(fromJS({}));
  });
});
