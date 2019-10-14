import React from 'react';
import styled from 'styled-components';

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const FormGroupLabel = styled.label`
  padding-left: 0.5em;
`;

interface FormGroupProps {
  label: string;
  children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = (props) => {
  const { label, children } = props;

  return (
    <FormGroupWrapper>
      <FormGroupLabel>
        {label}
      </FormGroupLabel>
      {children}
    </FormGroupWrapper>
  );
};

export default FormGroup;
