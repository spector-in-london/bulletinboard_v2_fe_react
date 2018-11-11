import React, { Component } from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';

class ReadPage extends Component {
  render() {
    return (
      <>
      <InputField label='Name' autofocus />
      <TextareaField label='Name' />
      <SubmitButton type='submit'>Submit</SubmitButton>
      </>
    );
  }
}

export default ReadPage;
