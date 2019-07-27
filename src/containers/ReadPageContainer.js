import React, { useState, useEffect } from 'react';

import ReadPage from '../components/ReadPage';

const ReadPageContainer = () => {
  const [state, setState] = useState({
    comments: [],
    isFetching: false,
    hasError: false,
    offset: 0,
    sort: 'desc',
  });

  const handleError = (errorMessage) => {
    console.error(errorMessage); // eslint-disable-line no-console

    setState({
      ...state,
      isFetching: false,
      hasError: true,
    });
  };

  const fetchComments = async () => {
    try {
      const apiRes = await fetch(`/api/comments?offset=${state.offset}&sort=${state.sort}`);
      const res = await apiRes.json();

      if (res.status === 'success' && res.data) {
        const comments = [...state.comments, ...res.data.comments];
        setState({
          ...state,
          comments,
          isFetching: false,
        });
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleLoadMoreClick = () => {
    setState({ ...state, offset: state.offset + 1 });
  };

  const handleChangeSort = () => {
    setState({
      ...state,
      comments: [],
      offset: 0,
      sort: state.sort === 'desc' ? 'asc' : 'desc',
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
