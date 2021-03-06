/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class ProfilePage extends React.Component {
  render() {
    const { userid } = this.props.match.params;
    return userid ? (
      <div>Viewing {userid}</div>
    ) : (
      <div>Redirect to user's own profile</div>
    );
  }
}

ProfilePage.propTypes = {
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

const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withSaga,
  withConnect,
)(ProfilePage);
