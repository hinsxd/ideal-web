/**
 *
 * OrdersPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OrdersPage extends React.Component {
  render() {
    return <div>Orders</div>;
  }
}

OrdersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'ordersPage', saga });

export default compose(
  withSaga,
  withConnect,
)(OrdersPage);
