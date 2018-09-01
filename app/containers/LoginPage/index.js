/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Checkbox, Form, Divider } from 'semantic-ui-react';
import { makeSelectAuth, providers } from 'auth';
import { login, logout } from 'auth/actions';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
// };

const FormWrapper = styled.div`
  margin: 0 auto;
`;
/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  handleLoginGoogle = () => {
    this.props.login(providers.GOOGLE);
  };
  handleLoginFacebook = () => {
    this.props.login(providers.FACEBOOK);
  };
  render() {
    const { loading, loggedIn, user, error } = this.props.auth;
    return (
      <FormWrapper>
        <div>
          {loggedIn && <p>Logged in as {user.email}</p>}
          {error && <p>{error.message}</p>}
          <Button disabled={loggedIn} onClick={this.handleLoginGoogle}>
            Sign in as Google
          </Button>
          <Button disabled={loggedIn} onClick={this.handleLoginFacebook}>
            Sign in as Facebook
          </Button>

          {loading && <p>Loading</p>}
        </div>
      </FormWrapper>
    );
  }
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

const mapDispatchToProps = {
  login,
  logout,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(LoginPage);
