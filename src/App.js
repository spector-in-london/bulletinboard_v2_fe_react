import React, { Component } from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: right;
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
          <div>bulletin board</div>
          <nav>
            <a href='/'>read</a>
            <a href='/'>write</a>
          </nav>
          <div />
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
      </ContentWrapper>
    );
  }
}

export default App;
