import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  display: block;
  width: 100%;
  border: none;
  padding: 0.5em;
  background-color: rgba(255, 188, 5, 0.265);

  :focus {
    outline: none;
    background-color: #ffbc05;
  }

  :disabled {
    cursor: not-allowed;
    background-color: #eee;
  }
`;

class Button extends React.Component {
  render() {
    return (
      <ButtonWrapper
        {...this.props} />
    );
  }
}

export default Button;
