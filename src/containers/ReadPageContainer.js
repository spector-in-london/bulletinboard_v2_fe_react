import React, { Component } from 'react';

import ReadPage from '../components/ReadPage';

class ReadPageContainer extends Component {
  state = {
    comments: [],
    isFetching: false,
    hasError: false,
    offset: 0,
  }

  componentDidMount() {
    this.setState({ isFetching: true }, this.fetchComments());
  }

  handleError = (error) => {
    this.setState(
      {
        hasError: true,
        isFetching: false,
      },
      console.error(error) // eslint-disable-line no-console
    );
  }

  fetchComments() {
    const offset = this.state.offset;

    fetch(`/api/comments?offset=${offset}`)
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success' && res.data) {
          const comments = [
            ...this.state.comments,
            ...res.data.comments,
          ];

          this.setState({
            comments,
            isFetching: false,
          });
        } else {
          this.handleError(res.message);
        }
      })
      .catch(this.handleError);
  }

  handleLoadMoreClick = () => {
    this.setState(prevState =>  ({ offset: prevState.offset + 1 }), this.fetchComments);
  }

  render() {
    const { comments, hasError } = this.state;
    return (
      <ReadPage
        comments={comments}
        hasError={hasError}
        onLoadMore={this.handleLoadMoreClick} />
    );
  }
}

export default ReadPageContainer;
