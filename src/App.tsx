import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './constants/routes';

import MainLayout from './components/MainLayout';
import ReadPageContainer from './containers/ReadPageContainer';
import WritePageContainer from './containers/WritePageContainer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path={Routes.HOME} component={ReadPageContainer} />
        <Route path={Routes.READ} component={ReadPageContainer} />
        <Route path={Routes.WRITE} component={WritePageContainer} />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
