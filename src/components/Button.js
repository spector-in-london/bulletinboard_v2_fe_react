import styled from 'styled-components';

const Button = styled.button`
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

export default Button;
