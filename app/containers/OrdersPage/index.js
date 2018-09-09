/**
 *
 * OrdersPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import moment from 'moment';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import request from 'utils/request';
import OrderList from 'containers/OrderList';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class OrdersPage extends React.Component {
  state = {
    orders: null,
    loading: true,
  };

  componentDidMount() {
    // request('http://localhost:4000/orders').then(result =>
    //   this.setState({
    //     orders: result,
    //     loading: false,
    //   }),
    // );
  }

  render() {
    const { orders, loading } = this.state;
    return (
      <React.Fragment>
        <h1>Orders</h1>
        {loading ? <p>Loading...</p> : <OrderList orders={orders} />}
      </React.Fragment>
    );
  }
}

OrdersPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
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

const withSaga = injectSaga({ key: 'orders', saga });

export default compose(
  withSaga,
  withConnect,
)(OrdersPage);
