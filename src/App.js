import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import ContentWrapper from "./components/ContentWrapper";
import Header from "./components/Header";
import Link from "./components/Link";
import LoadMoreButton from "./components/LoadMoreButton";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import SiteTitle from "./components/SiteTitle";
import SortButton from "./components/SortButton";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oxygen', 'Helvetica Neue', sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <ContentWrapper>
        <Header>
          <SiteTitle>bulletin board</SiteTitle>
          <Navigation>
            <Link href='/'>read</Link>
            <Link href='/'>write</Link>
          </Navigation>
        </Header>
        <Main>
          <SortButton>sort: newest first</SortButton>
          <div>
            <div>
              <div>
                <div>Header Left</div>
                <div>Date</div>
              </div>
              <div>Body</div>
            </div>
          </div>
          <LoadMoreButton>load more...</LoadMoreButton>
        </Main>
        <GlobalStyle />
      </ContentWrapper>
    );
  }
}

export default App;
