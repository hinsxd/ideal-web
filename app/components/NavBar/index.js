/**
 *
 * NavBar
 *
 */

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class NavBar extends React.Component {
  render() {
    const menuLinkItems = [
      {
        name: 'home',
        to: '/home',
      },
    ];
    return (
      <div>
        <Menu size="large" color="blue">
          {menuLinkItems.map((item, index) => (
            <Menu.Item as={NavLink} {...item} key={index} />
          ))}

          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>Log Out</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

NavBar.propTypes = {};

export default NavBar;
