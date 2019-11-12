import styled from 'styled-components';

const Navigation = styled.nav`
  font-size: ${({ theme }) => theme.spacing(10)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.spacing(6)};
  }
`;

export default Navigation;
