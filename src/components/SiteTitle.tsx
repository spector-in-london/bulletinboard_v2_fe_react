import styled from 'styled-components';

const SiteTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontSecondary};
  font-size: ${({ theme }) => theme.spacing(6)};
`;

export default SiteTitle;
