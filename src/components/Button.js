import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  display: block;
  width: 100%;
  border: none;
  padding: 0.5em;
  background-color: rgba(255, 188, 5, 0.265);
  outline: none;

  :disabled {
    cursor: not-allowed;
    background-color: #eee;
  }

  ${props => props.focusWithKeyboard && css`
    :focus {
      outline: none;
      background-color: #ffbc05;
      box-shadow: 0 0 0 3px rgba(255, 188, 5, 0.265)
    }
  `}
`;

class Button extends React.Component {
  state = {
    focusWithKeyboard: false,
  }

  toggleInputMethod = ({ type }) => {
    type === 'keyup'
      ? this.setState({ focusWithKeyboard: true })
      : this.setState({ focusWithKeyboard: false });
  }

  render() {
    return (
      <ButtonWrapper
        {...this.props}
        focusWithKeyboard={this.state.focusWithKeyboard}
        onKeyUp={this.toggleInputMethod}
        onMouseDown={this.toggleInputMethod} />
    );
  }
}

export default Button;
