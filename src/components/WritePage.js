import React, { Component } from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';

class ReadPage extends Component {
  render() {
    return (
      <>
      <InputField label='Your Name' autofocus />
      <TextareaField label='Your Comment' />
      <SubmitButton type='submit'>Submit</SubmitButton>
      </>
    );
  }
}

export default ReadPage;
