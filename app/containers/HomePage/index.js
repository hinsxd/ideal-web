/**
 *
 * HomePage
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import HomeNav from 'containers/HomeNav';
import HomeDashboardPage from 'containers/HomeDashboardPage';
import HomeMyOrdersPage from 'containers/HomeMyOrdersPage';
/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    const HomeWrapper = styled.div`
      display: flex;
      flex-direction: row;
      > * {
        margin: 0.5rem;
      }
    `;
    const routes = [
      {
        exact: true,
        path: `${this.props.match.path}/`,
        component: HomeDashboardPage,
      },
      {
        path: `${this.props.match.path}/myorders`,
        component: HomeMyOrdersPage,
      },
    ];
    return (
      <HomeWrapper>
        <HomeNav />

        <Switch>
          {routes.map((route, index) => <Route {...route} key={index} />)}
        </Switch>
      </HomeWrapper>
    );
  }
}

HomePage.propTypes = {};
