import React from 'react';
import { render } from '@testing-library/react';
import { useContentCopy } from '../../hooks/useContentCopy';

const Container = ({ id }: { id: string }) => (
  <div>{useContentCopy(id)}</div>
);

it('should render a message when a correct id is passed', () => {
  const { container } = render(<Container id="writePageForm.submit" />);
  const div = container.firstChild as HTMLDivElement;

  expect(div.textContent).toBe("Submit");
});

it('should render the raw id when an incorrect id is passed', () => {
  const { container } = render(<Container id="Not an id" />);
  const div = container.firstChild as HTMLDivElement;

  expect(div.textContent).toBe("Not an id");
});
