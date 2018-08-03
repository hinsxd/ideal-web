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
`;

const ContentPageWrapper = styled.div`
  padding: 1rem;
`;

/* eslint-disable react/prefer-stateless-function */
export default class MainWrapper extends React.Component {
  state = {
    auth: true,
    role: 'writer',
  };
  render() {
    return (
      <div>
        {this.state.auth ? (
          <MainPageWrapper>
            <SideNavBar />
            <ContentPageWrapper>
              <Switch>
                <Route path="/" component={HomePage} />
                <Redirect to="/" />
              </Switch>
            </ContentPageWrapper>
          </MainPageWrapper>
        ) : (
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    );
  }
}
