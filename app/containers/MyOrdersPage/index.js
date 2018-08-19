/**
 *
 * MyOrdersPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

function MyOrdersPage() {
  return <div>My Orders</div>;
}

MyOrdersPage.propTypes = {
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
const withSaga = injectSaga({ key: 'myorderspage', saga });

export default compose(
  withSaga,
  withConnect,
)(MyOrdersPage);
