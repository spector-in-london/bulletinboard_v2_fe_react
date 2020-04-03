import React, { useState, useEffect } from 'react';
import api from '../utils/api';

import ReadPage from '../components/ReadPage';
import { CommentProps } from '../components/Comment';
import Routes, { formatRoute } from '../constants/routes';

export enum SortOrder {
  ASCENDING = 'asc',
  DESCENDING = 'desc',
}

interface ReadPageContainerState {
  comments: CommentProps[];
  isFetching: boolean;
  hasError: boolean;
  offset: number;
  sort: string;
}

const ReadPageContainer: React.FC = () => {
  const [state, setState] = useState<ReadPageContainerState>({
    comments: [],
    isFetching: false,
    hasError: false,
    offset: 0,
    sort: SortOrder.DESCENDING,
  });

  const handleError = () => {
    setState({
      ...state,
      isFetching: false,
      hasError: true,
    });
  };

  const handleSuccess = (data: { comments: CommentProps[] }) => {
    const comments = [...state.comments, ...data.comments];
    setState({
      ...state,
      comments,
      isFetching: false,
    });
  };

  const fetchComments = () => {
    api.get({
      url: formatRoute(Routes.API_GET_COMMENTS, { offset: state.offset, sort: state.sort }),
      onError: handleError,
      onSuccess: handleSuccess,
    });
  };

  const handleLoadMoreClick = () => {
    setState({ ...state, offset: state.offset + 1 });
  };

  const handleChangeSort = () => {
    setState({
      ...state,
      comments: [],
      offset: 0,
      sort: state.sort === SortOrder.DESCENDING
        ? SortOrder.ASCENDING
        : SortOrder.DESCENDING,
    });
  };

  useEffect(() => {
    setState({ ...state, isFetching: true });
  }, [state.offset, state.sort]);

  useEffect(() => {
    if (state.isFetching) fetchComments();
  }, [state.isFetching]);

  const { comments, hasError, sort } = state;

  return (
    <ReadPage
      comments={comments}
      hasError={hasError}
      onChangeSort={handleChangeSort}
      onLoadMore={handleLoadMoreClick}
      sortOrder={sort}/>
  );
};

export default ReadPageContainer;
