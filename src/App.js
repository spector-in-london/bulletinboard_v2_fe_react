import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import ReadPageContainer from './containers/ReadPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Route exact path='/' component={ReadPageContainer} />
          <Route path='/read' component={ReadPageContainer} />
        </MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
