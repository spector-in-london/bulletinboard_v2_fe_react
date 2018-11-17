import React, { Component } from 'react';

import Comments from './Comments';
import LoadMoreButton from './LoadMoreButton';
import Message from './Message';
import SortButton from './SortButton';

class ReadPage extends Component {
  render() {
    const { comments, hasError } = this.props;

    return (
      <>
        <SortButton>sort: newest first</SortButton>
        <Comments comments={comments} />
        <LoadMoreButton>load more...</LoadMoreButton>
        {hasError && <Message error />}
      </>
    );
  }
}

export default ReadPage;
