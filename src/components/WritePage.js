import React, { Component } from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import TextareaField from '../components/TextareaField';

class WritePage extends Component {
  render() {
    const { onChange, onSubmit, isBusy } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <InputField
          autofocus
          label='Your Name'
          name='title'
          onChange={onChange} />
        <TextareaField
          label='Your Comment'
          name='body'
          onChange={onChange} />
        <SubmitButton
          disabled={isBusy}
          type='submit'>
          Submit
        </SubmitButton>
      </form>
    );
  }
}

export default WritePage;
