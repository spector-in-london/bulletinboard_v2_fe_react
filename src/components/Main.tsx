import styled from 'styled-components';

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.lightGrey};
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(10)};
  flex: auto;

  @media (max-width: 450px) {
    padding: 1em;
  }
`;

export default Main;
