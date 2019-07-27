import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import WritePage from '../components/WritePage';

const WritePageContainer = () => {
  const [state, setState] = useState({
    comment: {
      title: '',
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

  const handleError = (errorMessage) => {
    console.error(errorMessage); // eslint-disable-line no-console
    setState({ ...state, hasError: true });
  };

  const postComment = async () => {
    const options = {
      method: 'post',
      body: JSON.stringify(state.comment),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    };

    try {
      const apiRes = await fetch('/api/comments/', options);
      const res = await apiRes.json();

      if (res.status === 'success') {
        setState({ ...state, isBusy: false });
        this.props.history.push('/read');
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      handleError(error);
    }
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
