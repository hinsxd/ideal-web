/**
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import HomeDashboardPage from 'containers/HomeDashboardPage';
import HomeMyOrdersPage from 'containers/HomeMyOrdersPage';
/* eslint-disable react/prefer-stateless-function */
const HomePage = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={HomeDashboardPage} />
      <Route path="/dashboard" component={HomeDashboardPage} />
      <Route path="/myorders" component={HomeMyOrdersPage} />
    </Switch>
  </div>
);

export default HomePage;
