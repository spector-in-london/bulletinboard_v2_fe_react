import React, { Component } from 'react';

import ReadPage from '../components/ReadPage';

class ReadPageContainer extends Component {
  state = {
    comments: [],
    isFetching: false,
    hasError: false,
    offset: 0,
    sort: 'desc',
  }

  componentDidMount() {
    this.setState({ isFetching: true }, () => this.fetchComments());
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

  async fetchComments() {
    const { offset, sort } = this.state;

    try {
      const apiRes = await fetch(`/api/comments?offset=${offset}&sort=${sort}`);
      const res = await apiRes.json();

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
        throw new Error(res.message);
      }
    } catch (error) {
      this.handleError(error);
    }
  }

  handleChangeSort = () => {
    this.setState(prevState => {
      return {
        comments: [],
        offset: 0,
        sort: prevState.sort === 'desc' ? 'asc' : 'desc',
      };
    }, this.fetchComments);
  }

  handleLoadMoreClick = () => {
    this.setState(prevState =>  ({ offset: prevState.offset + 1 }), this.fetchComments);
  }

  render() {
    const { comments, hasError, sort } = this.state;
    return (
      <ReadPage
        comments={comments}
        hasError={hasError}
        onChangeSort={this.handleChangeSort}
        onLoadMore={this.handleLoadMoreClick}
        sortOrder={sort}/>
    );
  }
}

export default ReadPageContainer;
