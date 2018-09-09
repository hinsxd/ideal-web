/**
 *
 * OrderPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OrderPage extends React.Component {
  render() {
    const { orderid } = this.props.match.params;
    return <div>Order no.: {orderid}</div>;
  }
}

OrderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'orderPage', saga });

export default compose(
  withSaga,
  withConnect,
)(OrderPage);
