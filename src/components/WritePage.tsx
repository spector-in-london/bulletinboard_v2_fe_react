import React from 'react';

import SubmitButton from '../components/SubmitButton';
import InputField from '../components/InputField';
import Message from '../components/Message';
import TextareaField from '../components/TextareaField';
import { useContentCopy } from '../hooks';

interface WritePageProps {
  hasError: boolean;
  isBusy: boolean;
  isDirty: boolean;
  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

const WritePage: React.FC<WritePageProps> = (props) => {
  const {
    hasError,
    isBusy,
    isDirty,
    onChange,
    onSubmit,
  } = props;

  return (
    <form data-test-id="write-page-form" onSubmit={onSubmit}>
      <InputField
        autofocus
        label={useContentCopy("writePageForm.label.name")}
        name='name'
        onChange={onChange} />
      <InputField
        label={useContentCopy("writePageForm.label.title")}
        name='title'
        onChange={onChange} />
      <TextareaField
        label={useContentCopy("writePageForm.label.body")}
        name='body'
        onChange={onChange} />
      <SubmitButton
        disabled={isBusy || !isDirty}
        data-test-id="write-page-submit-button"
        type='submit'>
        {useContentCopy("writePageForm.submit")}
      </SubmitButton>
      {hasError && <Message hasError/>}
    </form>
  );
};

export default WritePage;
