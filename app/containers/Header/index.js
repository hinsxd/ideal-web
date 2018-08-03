/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from 'components/NavBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import H1 from 'components/H1';

function Header() {
  return (
    <div>
      <div>
        <Link to="/">
          <H1>Ideal Logo</H1>
        </Link>
      </div>
      <NavBar />
    </div>
  );
}

Header.propTypes = {
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

export default compose(withConnect)(Header);
