import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  color: unset;
  text-decoration: none;

  &:hover {
    color: #ffbc05;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  :focus {
    outline: none;
    border-bottom: 2px solid #ffbc05;
  }
`;

export default Link;
