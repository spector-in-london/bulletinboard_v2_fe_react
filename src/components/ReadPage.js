import React, { Component } from 'react';

import Comments from './Comments';
import LoadMoreButton from './LoadMoreButton';
import SortButton from './SortButton';

class ReadPage extends Component {
  render() {
    const { comments } = this.props;

    return (
      <>
        <SortButton>sort: newest first</SortButton>
        <Comments comments={comments} />
        <LoadMoreButton>load more...</LoadMoreButton>
      </>
    );
  }
}

export default ReadPage;
