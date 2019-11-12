import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

const Link = styled(RouterLink)`
  color: unset;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
    text-shadow: 3px 3px ${({ theme }) => theme.color.white};
  }

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  :focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.primary};

    &:before {
      content: '';
      position: absolute;
      top: 2px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: white;
      opacity: 0.5;
      z-index: -1
    }
  }
`;

export default Link;
