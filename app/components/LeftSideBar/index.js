/**
 *
 * SideNavBar
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
const LeftSideBar = props => (
  <Menu vertical pointing secondary fluid color="blue" size="large">
    <Menu.Item as={NavLink} exact to="/home" name="home" icon="home" />
    <Menu.Menu>
      <Menu.Item as={NavLink} to="/home/myorders" name="myOrders" />
      <Menu.Item as={NavLink} to="/home/balance" name="balance" />
    </Menu.Menu>
    <Menu.Item as={NavLink} to="/orders" name="orders" />
    <Menu.Item as={NavLink} to="/profile" name="profile" />
  </Menu>
);

export default withRouter(LeftSideBar);
