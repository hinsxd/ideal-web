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
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';

import LeftSideBar from 'components/LeftSideBar';
import RightSideBar from 'components/RightSideBar';
import HomePage from 'containers/HomePage/Loadable';
import MyOrdersPage from 'containers/MyOrdersPage/Loadable';
import OrdersPage from 'containers/OrdersPage/Loadable';
import OrderPage from 'containers/OrderPage/Loadable';
import ProfilePage from 'containers/ProfilePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import WelcomePage from 'containers/WelcomePage/Loadable';
import {
  // userIsAuthenticated,
  userIsNotAuthenticated,
  PrivateRoute,
  PublicRoute,
} from 'utils/router';
const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%vw;
  max-height: 100%vh;
  * {
    box-sizing: border-box;
  }
`;

const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  padding: 1em;
  margin-top: 50px;
`;

const ContentWrapper = styled.div`
  padding: 1.5em;
  width: 800px;
`;

const LeftSideBarWrapper = styled.div`
  width: 220px;
`;

const RightSideBarWrapper = styled.div`
  width: 180px;
`;

const LoginContent = () => (
  <React.Fragment>
    <LeftSideBarWrapper>
      <LeftSideBar />
    </LeftSideBarWrapper>

    <ContentWrapper>
      <Switch>
        <PrivateRoute path="/home" exact component={HomePage} />
        <PrivateRoute path="/home/myorders" component={MyOrdersPage} />
        <PrivateRoute path="/orders" component={OrdersPage} />
        <PrivateRoute path="/order/:orderid" component={OrderPage} />
        <PrivateRoute path="/profile" exact component={ProfilePage} />
        <PrivateRoute path="/profile/:userid" component={ProfilePage} />
      </Switch>
    </ContentWrapper>
    <RightSideBarWrapper>
      <RightSideBar />
    </RightSideBarWrapper>
  </React.Fragment>
);

const App = () => (
  <AppWrapper>
    <NavBar />
    <MainWrapper>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <PublicRoute
          path="/login"
          component={userIsNotAuthenticated(LoginPage)}
        />
        <Route render={LoginContent} />
      </Switch>
    </MainWrapper>
  </AppWrapper>
);

export default App;
