import React from 'react';
import styled from 'styled-components';

import FormGroup from './FormGroup';

const Textarea = styled.textarea`
  border: unset;
  border-bottom: 1px solid black;
  padding: 0.5em;
  resize: none;

  :focus {
    outline: 2px solid #ffbc05;
  }
`;

const TextareaField = (props) => {
  const { label, autofocus } = props;

  return (
    <FormGroup label={label}>
      <Textarea rows='6' placeholder='Max 255 characters' maxLength='255' autoFocus={autofocus} />
    </FormGroup>
  );
};

export default TextareaField;
