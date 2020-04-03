import React from 'react';

import Button from './Button';
import Comments from './Comments';
import Message from './Message';

import SortButton from './SortButton';
import { CommentProps } from './Comment';
import { useContentCopy } from '../hooks';

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

  const hasComments = Boolean(comments.length);

  return (
    <>
      <SortButton
        data-test-id="sort-button"
        disabled={!hasComments}
        onClick={onChangeSort}>
        {useContentCopy(sortOrder === 'desc' ? 'sort.newestFirst' : 'sort.newestFirst')}
      </SortButton>
      <Comments comments={comments} />
      <Button
        disabled={!hasComments}
        data-test-id="load-more-button"
        onClick={onLoadMore}>
        {useContentCopy("comments.loadMore")}
      </Button>
      {hasError && <Message hasError />}
    </>
  );
};

export default ReadPage;
