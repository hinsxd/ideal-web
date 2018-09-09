/**
 *
 * WelcomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userIsAuthenticated, userIsNotAuthenticated } from 'utils/router';
/* eslint-disable react/prefer-stateless-function */
export class WelcomePage extends React.Component {
  render() {
    return <div>Welcome</div>;
  }
}

export default WelcomePage;
