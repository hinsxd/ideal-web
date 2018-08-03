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

import Header from 'containers/Header';

import MainWrapper from 'containers/MainWrapper/Loadable';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%vw;
  max-height: 100%vh;
  * {
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <MainWrapper />
    </Wrapper>
  );
}
