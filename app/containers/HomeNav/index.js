/**
 *
 * HomeNav
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
export class HomeNav extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const profileLinkItems = [
      {
        exact: true,
        to: this.props.match.path,
        name: 'dashboard',
      },
      {
        to: `${this.props.match.path}/myorders`,
        name: 'myOrders',
      },
    ];
    return (
      <div>
        <Menu secondary vertical>
          {profileLinkItems.map((item, index) => (
            <Menu.Item as={NavLink} {...item} key={index} />
          ))}
        </Menu>
      </div>
    );
  }
}
HomeNav.propTypes = {
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

export default withRouter(compose(withConnect)(HomeNav));
