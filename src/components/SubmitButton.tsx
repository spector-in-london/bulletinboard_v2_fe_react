import styled from 'styled-components';
import Button, { ButtonProps } from './Button';

interface SubmitButtonProps {
  disabled?: boolean;
  type?: string;
}

const SubmitButton = styled(Button)<ButtonProps & SubmitButtonProps>`
`;

export default SubmitButton;
