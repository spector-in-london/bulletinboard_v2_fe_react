import React from 'react';

import styled from 'styled-components';

const MessageWrapper = styled.div`
  margin-top: 1em;
  padding: 0.5em;
  background-color: #eee;
`;

interface MessageProps {
  // TODO: rename prop
  error: boolean;
}

const Message: React.FC<MessageProps> = (props) => {
  const { error } = props;

  if (error) {
    return (
      <MessageWrapper data-test-id="error-message">
        Potentially, things are broken. Yell at your screen and try again.
      </MessageWrapper>
    );
  }

  return null;
};

export default Message;
