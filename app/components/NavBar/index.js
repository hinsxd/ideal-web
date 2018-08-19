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
import styled from 'styled-components';
import { Button, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  render() {
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
              <Button as={Link} to="/login">
                Sign In
              </Button>
              <Button primary as={Link} to="/register">
                Register
              </Button>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};
function mapStateToProps(state) {
  return {
    loggedIn: state.getIn(['global', 'loggedIn']),
  };
}
const withConnect = connect(mapStateToProps);

export default compose(withConnect)(NavBar);
