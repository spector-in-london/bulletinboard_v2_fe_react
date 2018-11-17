import React, { Component } from 'react';

import ReadPage from '../components/ReadPage';

class ReadPageContainer extends Component {
  state = {
    comments: [],
    isFetching: false,
  }

  componentDidMount() {
    this.setState({ isFetching: true }, this.fetchComments());
  }

  handleError = (error) => {
    console.error(error); // eslint-disable-line no-console
  }

  fetchComments() {
    fetch('/api/comments/')
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success' && res.data) {
          this.setState({
            comments: res.data.comments,
            isFetching: false,
          });
        } else {
          this.handleError(res.message);
        }
      })
      .catch(this.handleError);
  }

  render() {
    return (
      <ReadPage comments={this.state.comments}/>
    );
  }
}

export default ReadPageContainer;
