/**
 *
 * NavBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { Button, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { makeSelectAuth, providers } from 'auth';
import { login, logout } from 'auth/actions';

class NavBar extends React.Component {
  state = {};
  render() {
    const { loading, loggedIn, user } = this.props.auth;
    return (
      <Menu fixed="top">
        <Menu.Menu position="right">
          {this.props.loggedIn ? (
            <Menu.Item>
              <Button primary onClick={() => this.props.dispatch(logout())}>
                Log Out
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item>
              {loggedIn ? (
                <Button primary onClick={this.props.logout}>
                  Logout
                </Button>
              ) : (
                <Button primary as={Link} to="/login">
                  Get Started
                </Button>
              )}
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // loggedIn: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

const mapDispatchToProps = {
  logout,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(NavBar);
