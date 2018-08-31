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
import HomePage from 'containers/HomePage';
import MyOrdersPage from 'containers/MyOrdersPage';
import OrdersPage from 'containers/OrdersPage';
import OrderPage from 'containers/OrderPage';
import ProfilePage from 'containers/ProfilePage';
import LoginPage from 'containers/LoginPage';
import injectSaga from 'utils/injectSaga';
import { authSaga } from 'auth';

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
        <Route path="/" exact component={HomePage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/home/myorders" component={MyOrdersPage} />
        <Route path="/orders" component={OrdersPage} />
        <Route path="/order/:orderid" component={OrderPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/:userid" component={ProfilePage} />
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
        <Route path="/login" component={LoginPage} />

        <Route render={LoginContent} />
      </Switch>
    </MainWrapper>
  </AppWrapper>
);

export default App;
