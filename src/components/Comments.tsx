import React from 'react';
import styled from 'styled-components';
import { useContentCopy } from '../hooks';

import Comment, { CommentProps } from './Comment';

const NoCommentsMessage = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

interface CommentsProps {
  comments: CommentProps[];
}

const Comments: React.FC<CommentsProps> = (props) => {
  const { comments } = props;

  if (comments.length === 0) {
    return (
      <NoCommentsMessage
        data-test-id='no-comments-message'>
        {useContentCopy('comments.beFirst')}
      </NoCommentsMessage>
    );
  }

  return (
    <div data-test-id='comments-component'>
      {comments.map(comment =>
        <Comment key={comment.id} {...comment} />
      )}
    </div>
  );
};

export default Comments;
