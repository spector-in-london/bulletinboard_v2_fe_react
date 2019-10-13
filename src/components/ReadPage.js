import React from 'react';

import Comments from './Comments';
import LoadMoreButton from './LoadMoreButton';
import Message from './Message';
import SortButton from './SortButton';

const sortOrderType = {
  descending: 'sort: newest first',
  ascending: 'sort: oldest first',
};

const ReadPage = (props) => {
  const {
    comments,
    hasError,
    onChangeSort,
    onLoadMore,
    sortOrder
  } = props;

  return (
    <>
      <SortButton onClick={onChangeSort}>
        {sortOrder === 'desc'? sortOrderType.descending : sortOrderType.ascending}
      </SortButton>
      <Comments comments={comments} />
      <LoadMoreButton onClick={onLoadMore}>load more...</LoadMoreButton>
      {hasError && <Message error />}
    </>
  );
};

export default ReadPage;
