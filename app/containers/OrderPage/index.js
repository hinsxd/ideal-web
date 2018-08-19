/**
 *
 * OrderPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectOrderPage from './selectors';
import reducer from './reducer';
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

const mapStateToProps = createStructuredSelector({
  orderpage: makeSelectOrderPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'orderPage', reducer });
const withSaga = injectSaga({ key: 'orderPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrderPage);
