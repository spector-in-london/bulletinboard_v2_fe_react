import React, { Component } from 'react';

import ReadPage from '../components/ReadPage';

class ReadPageContainer extends Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments() {
    fetch('/api/comments/')
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success' && res.data) {
          this.setState({ comments: res.data.comments });
        }
      })
      // TODO handle errors
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    return (
      <ReadPage comments={this.state.comments}/>
    );
  }
}

export default ReadPageContainer;
