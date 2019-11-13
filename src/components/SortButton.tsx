import styled from 'styled-components';
import Button from './Button';

const SortButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  width: 200px;
`;

export default SortButton;
