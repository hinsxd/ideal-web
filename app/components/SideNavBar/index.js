/**
 *
 * SideNavBar
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Dropdown, Menu } from 'semantic-ui-react';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class SideNavBar extends React.Component {
  render() {
    return (
      <div>
        <Menu secondary vertical>
          <Menu.Item as={NavLink} to="/dashboard" name="dashboard" />
          <Menu.Item as={NavLink} to="/myorders" name="myOrders" />
        </Menu>
      </div>
    );
  }
}
SideNavBar.propTypes = {
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

export default withRouter(compose(withConnect)(SideNavBar));
