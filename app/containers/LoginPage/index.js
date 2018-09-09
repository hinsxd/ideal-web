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
import { compose } from 'redux';
import { Button } from 'semantic-ui-react';
import { isLoaded, isEmpty, withFirebase } from 'react-redux-firebase';
import { userIsNotAuthenticated } from 'utils/router';
import { selectAuth, selectProfile } from '../../firebase';

const FormWrapper = styled.div`
  margin: 0 auto;
`;
/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  render() {
    const { firebase, auth, profile } = this.props;
    return (
      <FormWrapper>
        <div>
          <Button // <GoogleButton/> button can be used instead
            onClick={() =>
              firebase.login({ provider: 'google', type: 'popup' })
            }
          >
            Login With Google
          </Button>
          <Button
            onClick={() =>
              firebase.login({ provider: 'facebook', type: 'popup' })
            }
          >
            Login With Facebook
          </Button>
          <div>
            <h2>Auth</h2>
            {!isLoaded(auth) ? (
              <span>Loading...</span>
            ) : isEmpty(auth) ? (
              <span>Not Authed</span>
            ) : (
              <pre>{JSON.stringify(auth, null, 2)}</pre>
            )}
          </div>
        </div>
      </FormWrapper>
    );
  }
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
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
)(LoginPage);
