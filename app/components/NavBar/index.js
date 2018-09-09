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
import { Button, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';
import { selectAuth } from '../../firebase';

class NavBar extends React.Component {
  state = {};
  render() {
    const { firebase, auth, profile } = this.props;
    return (
      <Menu fixed="top">
        <Menu.Menu position="right">
          <Menu.Item>
            {!isEmpty(auth) ? (
              <React.Fragment>
                <span>Logged in as {auth.email}</span>
                <Button primary onClick={() => firebase.logout()}>
                  Logout
                </Button>
              </React.Fragment>
            ) : (
              <Button primary as={Link} to="/login">
                Get Started
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

NavBar.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // loggedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withFirebase,
  withConnect,
)(NavBar);
