import React, { Component } from 'react';

import ReadPage from '../components/ReadPage';

class ReadPageContainer extends Component {
  state = {
    comments: [
      { id: 1, title: 'title', body: 'body', date: '11-11-2018' },
      { id: 2, title: 'title', body: 'body', date: '11-11-2018' },
      { id: 3, title: 'title', body: 'body', date: '11-11-2018' },
    ]
  }
  render() {
    return (
      <ReadPage comments={this.state.comments}/>
    );
  }
}

export default ReadPageContainer;
