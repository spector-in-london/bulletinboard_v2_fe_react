import { createContext, useContext } from 'react';

interface ContentCopyType {
  [key: string]: string;
}

const contentCopy: ContentCopyType = Object.freeze({
  'comments.beFirst': 'Nothing yet, be the first!',
  'comments.loadMore': 'load more...',
  'formfield.maxLength255': 'Max 255 characters',
  'formfield.maxLength50': 'Max 50 characters',
  'message.broken': 'Potentially, things are broken. Yell at your screen and try again.',
  'site.navigation.read': 'read',
  'site.navigation.write': 'write',
  'site.title': 'bulletin board',
  'sort.newestFirst': 'sort: newest first',
  'sort.oldestFirst': 'sort: oldest first',
  'writePageForm.label.body': 'Your Comment',
  'writePageForm.label.name': 'Your Name',
  'writePageForm.label.title': 'A Title for Your Comment',
  'writePageForm.submit': 'Submit',
});

const ContentContext = createContext<ContentCopyType>(contentCopy);

export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  if (copy && copy[messageId]) {
    return copy[messageId];
  }

  // eslint-disable-next-line no-console
  console.warn(`useContentCopy: messageId: ${messageId} not found, falling back to raw message`);
  return messageId;
};
