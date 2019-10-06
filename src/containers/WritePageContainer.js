import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../utils/api';

import WritePage from '../components/WritePage';

const WritePageContainer = ({ history }) => {
  const [state, setState] = useState({
    comment: {
      title: '',
      name: '',
      body: '',
    },
    isBusy: false,
    hasError: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      comment: {
        ...state.comment,
        [name]: value,
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, isBusy: true });
    postComment();
  };

  const handleSuccess = () => {
    setState({ ...state, isBusy: false });
    history.push('/read');
  };

  const handleError = () => {
    setState({ ...state, hasError: true });
  };

  const postComment = () => {
    api.post({
      url: '/api/comments',
      body: state.comment,
      onSuccess: handleSuccess,
      onError: handleError,
    });
  };

  const { isBusy, hasError } = state;

  return (
    <WritePage
      hasError={hasError}
      isBusy={isBusy}
      onChange={handleChange}
      onSubmit={handleSubmit} />
  );
};

export default withRouter(WritePageContainer);
