import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oxygen', 'Helvetica Neue', sans-serif;
  }
`;

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: right;
`;

const SiteTitle = styled.div`
`;

const Navigation = styled.nav`
`;

const Main = styled.main`
  background-color: #fafafa;
`;

const SortButton = styled.button``;
const LoadMoreButton = styled.button``;

class App extends Component {
  render() {
    return (
      <ContentWrapper>
        <Header>
          <SiteTitle>bulletin board</SiteTitle>
          <Navigation>
            <a href='/'>read</a>
            <a href='/'>write</a>
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
