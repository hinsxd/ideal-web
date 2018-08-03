/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'containers/Header';
import HomePage from 'containers/HomePage';
import WelcomePage from 'containers/WelcomePage/Loadable';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 70rem;
  * {
    box-sizing: border-box;
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem;
`;

const routes = [
  {
    exact: true,
    path: '/',
    component: WelcomePage,
  },
  {
    path: '/home',
    component: HomePage,
  },
];

export default function App() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Switch>
          {routes.map((route, index) => <Route {...route} key={index} />)}
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
    </Wrapper>
  );
}
