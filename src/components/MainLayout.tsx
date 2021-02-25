import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Routes from '../constants/routes';

import Background from '../components/Background';
import ContentWrapper from '../components/ContentWrapper';
import Decoration from '../components/Decoration';
import Header from '../components/Header';
import Link from '../components/Link';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import SiteTitle from '../components/SiteTitle';
import { useContentCopy } from '../hooks';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oxygen', 'Helvetica Neue', sans-serif;
  }
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <>
        <ContentWrapper>
          <Header>
            <SiteTitle>{useContentCopy('site.title')}</SiteTitle>
            <Navigation>
              <Link to={Routes.READ}>{useContentCopy('site.navigation.read')}</Link>
              <Link to={Routes.WRITE}>{useContentCopy('site.navigation.write')}</Link>
            </Navigation>
            <Decoration />
          </Header>
          <Main>
            {children}
          </Main>
          <GlobalStyle />
        </ContentWrapper>
        <Background />
      </>
    </ThemeProvider>
  );
};

export default MainLayout;
