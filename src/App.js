import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Background from './components/Background';
import ContentWrapper from './components/ContentWrapper';
import Decoration from './components/Decoration';
import Header from './components/Header';
import Link from './components/Link';
import Main from './components/Main';
import Navigation from './components/Navigation';
import ReadPage from './components/ReadPage';
import SiteTitle from './components/SiteTitle';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oxygen', 'Helvetica Neue', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ContentWrapper>
          <Header>
            <SiteTitle>bulletin board</SiteTitle>
            <Navigation>
              <Link href='/'>read</Link>
              <Link href='/'>write</Link>
            </Navigation>
            <Decoration />
          </Header>
          <Main>
            <ReadPage />
          </Main>
          <GlobalStyle />
        </ContentWrapper>
        <Background />
      </React.Fragment>
    );
  }
}

export default App;
