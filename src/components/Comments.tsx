import React from 'react';
import styled from 'styled-components';

import Comment, { CommentProps } from './Comment';

const NoCommentsMessage = styled.div`
  margin-bottom: 1em;
`;

interface CommentsProps {
  comments: Array<CommentProps>;
}

const Comments: React.FC<CommentsProps> = (props) => {
  const { comments } = props;

  if (comments.length === 0) {
    return (
      <NoCommentsMessage
        data-test-id="no-comments-message">
        Nothing yet, be the first!
      </NoCommentsMessage>
    );
  }

  return (
    <div>
      {comments.map(comment =>
        <Comment key={comment.id} {...comment} />
      )}
    </div>
  );
};

export default Comments;
