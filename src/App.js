import React, { Component } from 'react';

import MainLayout from './components/MainLayout';
import ReadPageContainer from './containers/ReadPageContainer';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <ReadPageContainer />
      </MainLayout>
    );
  }
}

export default App;
