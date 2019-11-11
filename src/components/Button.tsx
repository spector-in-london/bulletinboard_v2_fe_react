import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button<ButtonProps>`
  display: block;
  width: 100%;
  border: none;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.color.primaryTransparent};
  outline: none;

  :disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.grey};
  }

  ${props => props.focusWithKeyboard && css`
    :focus {
      outline: none;
      background-color: ${({ theme }) => theme.color.primary};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.color.primaryTransparent};
    }
  `}
`;

export interface ButtonProps {
  disabled?: boolean;
  focusWithKeyboard?: boolean;
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const [ canFocusWithKeyBoard, toggleCanFocus] = useState(false);
  const toggleFocusStyle = ({ type }: { type: string }) => toggleCanFocus(type === 'keyup');

  return (
    <ButtonWrapper
      {...props}
      focusWithKeyboard={canFocusWithKeyBoard}
      onKeyUp={toggleFocusStyle}
      onMouseDown={toggleFocusStyle}
    />
  );
};

export default Button;
