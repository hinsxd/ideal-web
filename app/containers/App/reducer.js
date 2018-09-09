/*
 *
 * App reducer
 *
 */
import { DEFAULT_ACTION } from './constants';

const initialState = {
  // myOrders: {
  //   data: false,
  //   loading: false,
  // },
  // orders: {
  //   data: false,
  //   loading: false,
  // },
};
function appReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
