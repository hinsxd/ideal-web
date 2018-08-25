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
import OrderList from 'containers/OrderList';
import makeSelectOrdersPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// import { defaultAction } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class OrdersPage extends React.Component {
  state = {
    orders: {
      data: [
        {
          id: 1,
          subject: 'History Final Thesis',
          description: 'Some longggg description.Some longggg description.',
          type: 'Thesis',
          files: [],
          price: 10000,
          created: moment('2018-08-20', 'YYYY-MM-DD'),
          deadline: moment('2018-09-30', 'YYYY-MM-DD'),
          isRead: true,
        },
        {
          id: 2,
          subject: 'React Website',
          description: 'Some longggg description.Some longggg description.',
          type: 'Programming',
          files: [],
          price: 60050,
          created: moment('2018-08-03', 'YYYY-MM-DD'),
          deadline: moment('2018-09-11', 'YYYY-MM-DD'),
          isRead: false,
        },
        {
          id: 3,
          subject: 'Python Programming',
          description: 'Some longggg description.Some longggg description.',
          type: 'Programming',
          files: [],
          price: 5000,
          created: moment('2018-08-11', 'YYYY-MM-DD'),
          deadline: moment('2018-09-20', 'YYYY-MM-DD'),
          isRead: false,
        },
        {
          id: 4,
          subject: 'React Website',
          description: 'Some longggg description.Some longggg description.',
          type: 'Programming',
          files: [],
          price: 0,
          created: moment('2018-08-01', 'YYYY-MM-DD'),
          deadline: moment('2018-08-29', 'YYYY-MM-DD'),
          isRead: false,
        },
      ],
      loading: false,
    },
  };
  render() {
    return (
      <React.Fragment>
        <h1>Orders</h1>
        <OrderList orders={this.state.orders} />
      </React.Fragment>
    );
  }
}

OrdersPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  orderspage: makeSelectOrdersPage(),
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

const withReducer = injectReducer({ key: 'orders', reducer });
const withSaga = injectSaga({ key: 'orders', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrdersPage);
