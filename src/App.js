import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import ReadPageContainer from './containers/ReadPageContainer';
import WritePageContainer from './containers/WritePageContainer';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/' component={ReadPageContainer} />
        <Route path='/read' component={ReadPageContainer} />
        <Route path='/write' component={WritePageContainer} />
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
