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
`;

export default Link;
