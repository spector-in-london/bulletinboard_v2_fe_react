import { renderHook } from '@testing-library/react-hooks'
import { useContentCopy } from '../../hooks/useContentCopy';

it('should render a message when a correct id is passed', () => {
  const { result } = renderHook(() => useContentCopy("writePageForm.submit"));
  expect(result.current).toEqual("Submit");
});

it('should render the raw id when an incorrect id is passed', () => {
  const { result } = renderHook(() => useContentCopy("Not an id"));
  expect(result.current).toEqual("Not an id");
});
