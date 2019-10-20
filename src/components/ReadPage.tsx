import React from 'react';

import Comments from './Comments';
import LoadMoreButton from './LoadMoreButton';
import Message from './Message';
import SortButton from './SortButton';
import { CommentProps } from './Comment';

const sortOrderType = {
  descending: 'sort: newest first',
  ascending: 'sort: oldest first',
};

interface ReadpageProps {
  comments: Array<CommentProps>;
  hasError: boolean;
  onChangeSort(): void;
  onLoadMore(): void;
  sortOrder: string;
}

const ReadPage: React.FC<ReadpageProps> = (props) => {
  const {
    comments,
    hasError,
    onChangeSort,
    onLoadMore,
    sortOrder
  } = props;

  return (
    <>
      <SortButton data-test-id="sort-button" onClick={onChangeSort}>
        {sortOrder === 'desc'? sortOrderType.descending : sortOrderType.ascending}
      </SortButton>
      <Comments comments={comments} />
      <LoadMoreButton data-test-id="load-more-button" onClick={onLoadMore}>load more...</LoadMoreButton>
      {hasError && <Message error />}
    </>
  );
};

export default ReadPage;
