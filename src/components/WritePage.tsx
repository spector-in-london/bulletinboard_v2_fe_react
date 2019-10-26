import React from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import Message from '../components/Message';
import TextareaField from '../components/TextareaField';

interface WritePageProps {
  hasError: boolean;
  isBusy: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

const WritePage: React.FC<WritePageProps> = (props) => {
  const {
    hasError,
    isBusy,
    onChange,
    onSubmit,
  } = props;

  return (
    <form data-test-id="write-page-form" onSubmit={onSubmit}>
      <InputField
        autofocus
        label='Your Name'
        name='name'
        onChange={onChange} />
      <InputField
        label='A Title for Your Comment'
        name='title'
        onChange={onChange} />
      <TextareaField
        label='Your Comment'
        name='body'
        onChange={onChange} />
      <SubmitButton
        disabled={isBusy}
        data-test-id="write-page-submit-button"
        type='submit'>
        Submit
      </SubmitButton>
      {hasError && <Message hasError/>}
    </form>
  );
};

export default WritePage;
