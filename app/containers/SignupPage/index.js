/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { Button, Checkbox, Form } from 'semantic-ui-react';

import { auth } from '../../firebase';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: '',
  error: null,
};

/* eslint-disable react/prefer-stateless-function */
export class SignupPage extends React.Component {
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState(() => ({ error }));
      });
  };

  render() {
    const { username, email, password, passwordConfirm, error } = this.state;
    const isInvalid =
      password !== passwordConfirm ||
      password === '' ||
      email === '' ||
      username === '';
    return (
      <Form>
        {error && <p>{error.message}</p>}
        <Form.Input
          name="username"
          label="Username"
          type="text"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Input
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Input
          name="password"
          label="Enter Password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <Form.Input
          name="passwordConfirm"
          label="Confirm Password"
          type="password"
          value={passwordConfirm}
          onChange={this.handleChange}
        />
        <Button disabled={isInvalid} onClick={this.onSubmit} type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signuppage: makeSelectSignupPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signupPage', reducer });
const withSaga = injectSaga({ key: 'signupPage', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(SignupPage);
