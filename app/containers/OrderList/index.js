/**
 *
 * OrderList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import OrderItem from 'components/OrderItem';

const OrderList = ({ orders }) =>
  orders.length > 0 ? (
    orders.map(order => <OrderItem {...order} key={order.id} />)
  ) : (
    <h2>No orders</h2>
  );

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
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

export default compose(withConnect)(OrderList);
