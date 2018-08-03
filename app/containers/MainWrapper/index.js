/**
 *
 * MainWrapper
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage';
import WelcomePage from 'containers/WelcomePage/Loadable';

import SideNavBar from 'components/SideNavBar';

const MainPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 85rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const ContentPageWrapper = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

/* eslint-disable react/prefer-stateless-function */
export default class MainWrapper extends React.Component {
  state = {
    auth: true,
    role: 'writer',
  };
  render() {
    return (
      <MainPageWrapper>
        <SideNavBar />
        <ContentPageWrapper>
          <Switch>
            <Route
              path="/:path(|dashboard|myorders|balance)"
              component={HomePage}
            />
            <Redirect to="/" />
          </Switch>
        </ContentPageWrapper>
      </MainPageWrapper>
    );
  }
}
