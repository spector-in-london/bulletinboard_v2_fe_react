import React from 'react';
import styled from 'styled-components';

import FormGroup from './FormGroup';

const Input = styled.input`
  border: unset;
  border-bottom: 1px solid black;
  padding: 0.5em;
`;

const InputField = (props) => {
  const { label, autofocus } = props;

  return (
    <FormGroup label={label}>
      <Input type='text' placeholder='Max 50 characters' maxLength='50' autoFocus={autofocus} />
    </FormGroup>
  );
};

export default InputField;
