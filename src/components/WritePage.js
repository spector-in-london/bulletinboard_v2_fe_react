import React, { Component } from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';

class ReadPage extends Component {
  render() {
    const { onChange, onSubmit } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <InputField name='title' onChange={onChange} label='Your Name' autofocus />
        <TextareaField name='body' onChange={onChange} label='Your Comment' />
        <SubmitButton type='submit'>Submit</SubmitButton>
      </form>
    );
  }
}

export default ReadPage;
