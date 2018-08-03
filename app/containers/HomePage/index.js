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
import DashboardPage from 'containers/DashboardPage';
import MyOrdersPage from 'containers/MyOrdersPage';
import BalancePage from 'containers/BalancePage/Loadable';
/* eslint-disable react/prefer-stateless-function */
const HomePage = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={DashboardPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/myorders" component={MyOrdersPage} />
      <Route path="/balance" component={BalancePage} />
    </Switch>
  </div>
);

export default HomePage;
