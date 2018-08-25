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

const OrderList = ({ orders: { data } }) =>
  data.length > 0 ? (
    data.map(order => <OrderItem {...order} key={order.id} />)
  ) : (
    <h2>No orders</h2>
  );

OrderList.propTypes = {
  orders: PropTypes.object.isRequired,
  // dispatch: PropTypes.func.isRequired,
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
