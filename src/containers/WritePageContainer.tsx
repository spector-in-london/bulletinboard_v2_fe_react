import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import api from '../utils/api';
import Routes from '../constants/routes';

import WritePage from '../components/WritePage';

interface WritePageContainerProps extends RouteComponentProps<any> {}

interface WritePageContainerState {
  comment: {
    title: string;
    name: string;
    body: string;
  };
  isBusy: boolean;
  hasError: boolean;
}

const WritePageContainer: React.FC<WritePageContainerProps> = ({ history }) => {
  const [state, setState] = useState<WritePageContainerState>({
    comment: {
      title: '',
      name: '',
      body: '',
    },
    isBusy: false,
    hasError: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setState({
      ...state,
      comment: {
        ...state.comment,
        [name]: value,
      }
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setState({ ...state, isBusy: true });
    postComment();
  };

  const handleSuccess = () => {
    setState({ ...state, isBusy: false });
    history.push(Routes.READ);
  };

  const handleError = () => {
    setState({ ...state, hasError: true });
  };

  const postComment = () => {
    api.post({
      url: Routes.API_POST_COMMENTS,
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
