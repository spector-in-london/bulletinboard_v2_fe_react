import React, { Component } from 'react';

import MainLayout from './components/MainLayout';
import ReadPage from './components/ReadPage';

class App extends Component {
  render() {
    return (
      <MainLayout>
        <ReadPage />
      </MainLayout>
    );
  }
}

export default App;
