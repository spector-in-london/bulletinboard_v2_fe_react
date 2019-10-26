import React from 'react';

import styled from 'styled-components';
import { useContentCopy } from '../hooks';

const MessageWrapper = styled.div`
  margin-top: 1em;
  padding: 0.5em;
  background-color: #eee;
`;

interface MessageProps {
  hasError: boolean;
}

const Message: React.FC<MessageProps> = (props) => {
  const { hasError } = props;

  if (hasError) {
    return (
      <MessageWrapper data-test-id="error-message">
        {useContentCopy("message.broken")}
      </MessageWrapper>
    );
  }

  return null;
};

export default Message;
