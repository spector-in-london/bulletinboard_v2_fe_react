import styled from 'styled-components';


const ContentWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 1250px) {
    width: 1000px;
  }
`;

export default ContentWrapper;
