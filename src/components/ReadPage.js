import React, { Component } from 'react';

import Comment from './Comment';
import LoadMoreButton from './LoadMoreButton';
import SortButton from './SortButton';

class ReadPage extends Component {
  render() {
    return (
      <>
        <SortButton>sort: newest first</SortButton>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
        <LoadMoreButton>load more...</LoadMoreButton>
      </>
    );
  }
}

export default ReadPage;
