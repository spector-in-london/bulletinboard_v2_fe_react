import styled from 'styled-components';

const Link = styled.a`
  color: unset;
  text-decoration: none;

  &:hover {
    color: #ffbc05;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default Link;
